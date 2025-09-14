using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using MySql.Data.MySqlClient;

public partial class ComplaintForm : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        DateTime today = DateTime.Today;
        int EmpID;
        if (!int.TryParse(Request.Form["EmpID"], out EmpID))
        {
            Response.Write("❌ Error: Invalid Employee ID. Please enter a number.");
        }
        else
        {
            Response.Write("✔ Employee ID: " + EmpID);
        }
        string Dept = Request.Form["Dept"];
        string CompDetails = Request.Form["CompDetails"];
        try
        {
            string connStr = ConfigurationManager.ConnectionStrings["MySqlConnection"].ConnectionString;
            using (MySqlConnection conn = new MySqlConnection(connStr))
            {
                conn.Open();
                var cmd = new MySqlCommand("SELECT CURRENT_USER();", conn);
                var user = cmd.ExecuteScalar();
                Response.Write("✅ Connected as: " + user.ToString());
            }
        }
        catch (MySqlException ex)
        {
            Response.Write("❌ MySQL Error: " + ex.Message);
        }


        
        /*string connStr = ConfigurationManager.ConnectionStrings["MySqlConnection"].ConnectionString;

        using (MySqlConnection conn = new MySqlConnection(connStr))
        {
            conn.Open();
            string query = "INSERT INTO complaint (UserID, Department, ComplaintDetails, SubmitDate) VALUES (@EmpID, @Dept, @CompDetails, @submitDate)";
            MySqlCommand cmd = new MySqlCommand(query, conn);
            cmd.Parameters.AddWithValue("@EmpID", EmpID);
            cmd.Parameters.AddWithValue("@Dept", Dept);
            cmd.Parameters.AddWithValue("@CompDetails", CompDetails);
            cmd.Parameters.AddWithValue("@submitDate", today.Date);

            cmd.ExecuteNonQuery();

            Response.Write("✔️ Your complaint has been recorded.");
        }*/
    }

    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        // You can handle the form submission here, like saving to a database
        Response.Clear();
        Response.Write("<h1 class='flex justify-center text-lg'>Your complaint has been registered!</h1>");
        Response.End();
    }
    
}
