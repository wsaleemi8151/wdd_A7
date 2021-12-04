

$(document).ready(function () {
    getFilesList();

    $('#myFiles').on('change', function () {
        alert(this.value);
    });
});

function getFilesList() {
    
    jQueryXMLHttpRequest = $.ajax({
        type: "GET",
        url: "startPage.aspx/GetFilesList",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data != null && data.d != null) {
                var response;

                //we need to parse it to JSON - this code is used if the file is found and also if the file is not found
                response = $.parseJSON(data.d);

                $.each(response.myFiles, function (i, item) {
                    $('#myFiles').append($('<option>', {
                        value: item,
                        text: item
                    }));
                });

                document.getElementById("textFileContentArea").value = response.description;
            }
        },
        fail: function () {
            document.getElementById("statusMessage").innerHTML = "The call to the WebMethod failed!";
        }

    });


}


function openAndReadFileContents() {
    //
    openfileData = "mySampleFile.txt";      // name of file to open
    var openFileData = "";                  // variable to hold the file's contents (if opened)

    //build the outgoing JSON parameter being passed in the C# (code behind) entry point
    var jsonData = { fileToLoad: openfileData };
    var jsonString = JSON.stringify(jsonData);

    jQueryXMLHttpRequest = $.ajax({
        type: "POST",
        url: "startPage.aspx/OpenFile",
        data: jsonString,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data != null && data.d != null) {
                var response;

                //we need to parse it to JSON - this code is used if the file is found and also if the file is not found
                response = $.parseJSON(data.d);

                //document.getElementById("statusMessage").innerHTML = "File loading status : <b>" + response.status + "</b>";
                document.getElementById("textFileContentArea").value = response.description;
            }
        },
        fail: function () {
            document.getElementById("statusMessage").innerHTML = "The call to the WebMethod failed!";
        }

    });


}