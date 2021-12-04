
// global variable - for use in jQuery (AJAX) calls
var jQueryXMLHttpRequest; 

//jquery activate only when ready
//does the intial call to get the file list on document ready
$(document).ready(function () { 
    openAndReadFileContents();
});




/*
* FUNCTION    : openAndReadFileContents()
* DESCRIPTION :
*       This function opens a file from the system. It uses an ajax call to access the code
 *       behind webmethod OpenFile to do the file IO and return the data.
* PARAMETERS  :
*      Nothing.
* RETURNS     :
*      Nothing.
*/
function openAndReadFileContents()
{
    // this example comes prepackaged with a file called "mySampleFile.txt" - if you want to try and run 
    // the page with an example of not finding/opening the file - then change "openfileData" to any other value
    //
    openfileData = "mySampleFile.txt";      // name of file to open
    var openFileData = "";                  // variable to hold the file's contents (if opened)

    //build the outgoing JSON parameter being passed in the C# (code behind) entry point
    var jsonData = { fileToLoad: openfileData};
    var jsonString = JSON.stringify(jsonData);

        

    // jQuery AJAX call to OpenFile webmethod (code behind) for sending and receiving JSON
    // In the following call:
    //  - the "URL" is the "entry point" (i.e. WebMethod) in the .CS file that will be called
    //  - the "data" is the outgoing JSON structure containing the filename to be opened
    //    - because the outgoing data is JSON, the "contentType" must be set accordingly
    //  - the "dataType" is set to JSON, because this JavaScript function expects the return value to be
    //    sent in JSON format as well
    //
    jQueryXMLHttpRequest = $.ajax({
        type: "POST",
        url: "startPage.aspx/OpenFile",
        data: jsonString,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data){
            if (data != null && data.d != null)
            {
                var response;

                //we need to parse it to JSON - this code is used if the file is found and also if the file is not found
                response = $.parseJSON(data.d);

                document.getElementById("statusMessage").innerHTML = "File loading status : <b>" + response.status + "</b>";
                document.getElementById("textFileContentArea").value = response.description;
            }
        },
        fail: function (){
            document.getElementById("statusMessage").innerHTML = "The call to the WebMethod failed!";
        }

    });


}    


