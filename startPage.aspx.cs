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


        // METHOD            :   OpenFile
        // DESCRIPTION       :   Opens the file specified by the parameter and then sends
        //                      the data back as a key pair containing the status and the
        //                      data itself.
        //
        // PARAMETERS        :
        // string fileToLoad :   contains the filename to open
        //                       - remember that since the "parameter" is being passed to this method using AJAX/JSON
        //                         then the parameter name in this method *must* be the same that the "key" value used
        //                         in the $.ajax() (jQuery) call in JavaScript
        //
        // RETURNS           :
        //  string           :   JSON structure holding the (1) file open status and (2) file contents
        //
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
    }
}