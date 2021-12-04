﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="startPage.aspx.cs" Inherits="A07.startPage" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>WDD A07 Text Editor</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <%--<script src="jQueryExamples.js"></script>--%>
    <script src="Assets/jquery-text-editor.js"></script>
    <link href="Assets/style.css" rel="stylesheet" />
</head>
<body>
    <form runat="server">
        <div>
            <div class="title-div">
                <h1 class="page-title">WDD A07 Text Editor</h1>
            </div>

            <div class="controls-div">
                <textarea id="textFileContentArea" class="textbox" onclick="clearSaveAsError()"></textarea>
                <br />
                <br />

                Files: <select id="myFiles" /> <br />
            </div>

            <div class="statusBar">
                <p id="statusMessage" class="statusBarText"></p>
            </div>
        </div>
    </form>
</body>
</html>
