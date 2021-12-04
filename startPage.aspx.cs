using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace A07
{
    public partial class startPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }


        [WebMethod]
        //#pragma warning disable CS0108 // Member hides inherited member; missing new keyword
        public static new string GetFilesList()
        {
            string returnData;  // final JSON return value
            string status;
            string folderPath;
            string[] myFiles;

            try
            {
                folderPath = HttpContext.Current.Server.MapPath("MyFiles");

                status = "Success";
                myFiles = Directory.GetFiles(folderPath);

            }
            catch (Exception e)
            {
                // I need to return something in the JSON value to indicate the exception/hold some
                // useful information for the user ...
                status = "Exception";
                myFiles = null;
            }

            returnData = JsonConvert.SerializeObject(new { status = status, myFiles = myFiles });
            return returnData;
        }

        [WebMethod]
        //#pragma warning disable CS0108 // Member hides inherited member; missing new keyword
        public static new string OpenFile(string fileToLoad)
        //#pragma warning restore CS0108 // Member hides inherited member; missing new keyword
        {
            string returnData;  // final JSON return value
            string fileStatus;
            string fileContents;
            string filepath;

            try
            {
                filepath = HttpContext.Current.Server.MapPath("MyFiles");
                filepath = filepath + @"\" + fileToLoad;


                if (File.Exists(filepath))
                {
                    fileStatus = "Success";
                    fileContents = File.ReadAllText(filepath);
                }
                else
                {
                    fileStatus = "Failure";
                    fileContents = "File doesn't exist";
                }
            }
            catch (Exception e)
            {
                // I need to return something in the JSON value to indicate the exception/hold some
                // useful information for the user ...
                fileStatus = "Exception";
                fileContents = "Something bad happened : " + e.ToString();
            }

            returnData = JsonConvert.SerializeObject(new { status = fileStatus, description = fileContents });
            return returnData;
        }

        protected void FileList_SelectedIndexChanged(object sender, EventArgs e)
        {

        }
    }
}