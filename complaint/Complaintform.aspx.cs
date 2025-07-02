using System;

public partial class ComplaintForm : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        // Optional: Logic on page load
    }

    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        // You can handle the form submission here, like saving to a database
        Response.Write("<h1 class='flex justify-center text-lg'>Your complaint has been registered!</h1>");
    }
}
