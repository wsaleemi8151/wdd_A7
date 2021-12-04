<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="startPage.aspx.cs" Inherits="A07.startPage" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>WDD A07 Text Editor</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="Assets/jquery-text-editor.js"></script>
    <link href="Assets/style.css" rel="stylesheet" />
</head>
<body>
    <form runat="server">
        <div>
            <div class="title-div">
                <h1 class="page-title">WDD A07 Text Editor</h1>
            </div>

            <div class="User_div">
                <table class="details-table">
                    <tr>
                        <td>
                            <select id="ddlMyFiles" aria-haspopup="False" aria-hidden="False" aria-sort="ascending" name="D1">
                            </select>
                        </td>
                    </tr>
                </table>

            </div>


            <div class="controls-div" id="File_Lable">
                <textarea id="textFileContentArea" class="textbox" onclick="clearSaveAsError()"></textarea>
                <br />
                <br />


            </div>

            <div class="User_div">
                <table class="details-table">
                    <tr>
                        <td>
                            <input type="text" name="txtFileName" id="txtFileName" value="" />
                        </td>
                        <td>
                            <input class="saveFile" id="SaveBtn" type="button" value="Save" disabled="disabled" title="Save the current selected file with updated data." />
                        </td>
                        <td>
                            <input class="saveFile" id="SaveAsBtn" type="button" value="Save As" disabled="disabled" title="Save as a new file with updated data." />
                        </td>
                        <td></td>
                    </tr>

                </table>
            </div>


            <div class="statusBar">
                <p id="statusMessage" class="statusBarText"></p>
            </div>
        </div>
    </form>
</body>
</html>
