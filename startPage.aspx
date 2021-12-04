<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="startPage.aspx.cs" Inherits="A07.startPage" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>WDD A07 Text Editor</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="jQueryExamples.js"></script>
    <script src="Assets/jquery-text-editor.js"></script>
    <link href="Assets/style.css" rel="stylesheet" />
    <style type="text/css">
        #SaveBtn {
            height: 20px;
            width: 48px;
        }
        #SaveAsBtn {
            height: 20px;
            width: 83px;
        }
    </style>
</head>
<body>
    <form runat="server">
        <div>
            <div class="title-div">
                <h1 class="page-title">WDD A07 Text Editor</h1>
            </div>

             <div class="User_div">
                 <table style="width: 286px; margin-left: 163px">
                     <tr>
                       
                    <td>
                        <input id="SaveBtn" type="button" value="Save" />
                        </td>
                          <td>
                        <input id="SaveAsBtn" type="button" value="Save As" />
                        </td>
                         <td>
                             <select id="myFiles" aria-haspopup="False" aria-hidden="False" aria-sort="ascending" name="D1">
                              
                                 <option value="none" selected="selected" disabled="disabled"  hidden="hidden">Select an File</option>
                                 <option value="free">Free</option>
                                 <option value="starter">Starter </option>
                                 <option value="professional">Professional</option>
                                 <option value="corporate">Corporate</option>
                             </select></td>
                     </tr>
                     
                 </table>
            </div>


            <div class="controls-div" id="File_Lable">
                <textarea id="textFileContentArea" class="textbox" onclick="clearSaveAsError()"></textarea>
                <br />
                <br />

                
            </div>

            <div class="statusBar">
                <p id="statusMessage" class="statusBarText"></p>
            </div>
        </div>
    </form>
</body>
</html>
