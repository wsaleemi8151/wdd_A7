

$(document).ready(function () {
	getFilesList();

	$('#ddlMyFiles').on('change', function () {
		if (this.value) {
			openAndReadFileContents(this.value);
			document.getElementById("txtFileName").value = this.value;

			$('#SaveBtn').prop('disabled', false);
			$('#SaveAsBtn').prop('disabled', true);
		} else {
			resetForm();
		}
	});

	$('.saveFile').on('click', function () {
		var fileName = document.getElementById("txtFileName").value;
		var fileContents = document.getElementById("textFileContentArea").value;
		saveFile(fileName, fileContents);

		getFilesList();
	});

	$('#txtFileName').on('change', function () {
		if (this.value === document.getElementById("ddlMyFiles").value) {
			$('#SaveBtn').prop('disabled', false);
			$('#SaveAsBtn').prop('disabled', true);
		} else {
			$('#SaveBtn').prop('disabled', true);
			$('#SaveAsBtn').prop('disabled', false);
		}
	});
});

function resetForm() {
	document.getElementById("txtFileName").value = "";
	document.getElementById("textFileContentArea").value = "";

	$('#SaveBtn').prop('disabled', true);
	$('#SaveAsBtn').prop('disabled', true);
}

function getFilesList() {

	jQueryXMLHttpRequest = $.ajax({
		type: "POST",
		data: "",
		url: "startPage.aspx/GetFilesList",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (data) {
			if (data !== null && data.d !== null) {
				var response;

				//we need to parse it to JSON - this code is used if the file is found and also if the file is not found
				response = $.parseJSON(data.d);

				$('#ddlMyFiles').empty().append($('<option>', {
					value: "",
					text: "Select a file"
				}));

				$.each(response.myFiles, function (i, item) {
					$('#ddlMyFiles').append($('<option>', {
						value: item,
						text: item
					}));
				});
			}
		},
		fail: function () {
			document.getElementById("statusMessage").innerHTML = "The call to the WebMethod failed!";
		}
	});

}


function openAndReadFileContents(fileName) {
	var jsonString = JSON.stringify({ fileToLoad: fileName });

	jQueryXMLHttpRequest = $.ajax({
		type: "POST",
		url: "startPage.aspx/OpenFile",
		data: jsonString,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (data) {
			if (data !== null && data.d !== null) {
				var response;

				response = $.parseJSON(data.d);

				document.getElementById("textFileContentArea").value = response.description;
			}
		},
		fail: function () {
			document.getElementById("statusMessage").innerHTML = "The call to the WebMethod failed!";
		}
	});
}


function saveFile(fileName, fileContents) {
	var jsonString = JSON.stringify({ fileName, fileContents });

	jQueryXMLHttpRequest = $.ajax({
		type: "POST",
		url: "startPage.aspx/SaveFile",
		data: jsonString,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (data) {
			if (data !== null && data.d !== null) {
				var response;

				response = $.parseJSON(data.d);
				if (response.status === "success") {
					document.getElementById("statusMessage").innerHTML = "File saved successfully!";

					resetForm();
				} else {
					document.getElementById("statusMessage").innerHTML = "Error while saving file!";
				}
			}
		},
		fail: function () {
			document.getElementById("statusMessage").innerHTML = "Error while saving file!";
		}
	});
}