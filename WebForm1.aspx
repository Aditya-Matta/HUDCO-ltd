<%@ Page Language="C#" AutoEventWireup="true" CodeFile="WebForm1.aspx.cs" Inherits="ComplaintForm" %>

<!DOCTYPE html>
<html lang="en">
<head id="Head1" runat="server">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Complaint Portal</title>
    <link rel="stylesheet" href="output.css" />
</head> 
<body id="body" class="flex justify-center min-h-screen">
    <form id="form1" runat="server" class="p-8 w-full">
        <h2 class="text-center text-4xl mb-6 font-bold">Complaint Form</h2>

        <div class="mb-6">
            <label class="block text-lg font-medium mb-2">EmployeeID</label>
            <asp:TextBox ID="EmployeeID" runat="server" CssClass="border-2 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" Placeholder="Enter your Employee ID"/>
        </div>

        <div class="mb-6">
            <label class="block text-lg font-medium mb-2">Department:</label>
            <asp:DropDownList ID="Department" runat="server" CssClass="p-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <asp:ListItem Text="--Please choose your department--" Value="" />
                <asp:ListItem Text="Finance" Value="Finance" />
                <asp:ListItem Text="Admin" Value="Admin" />
                <asp:ListItem Text="HR" Value="HR" />
                <asp:ListItem Text="IT" Value="IT" />
            </asp:DropDownList>
        </div>

        <div class="mb-6">
            <label class="block text-lg font-medium mb-2">Complaint Details</label>
            <asp:TextBox ID="ComplaintDetails" runat="server" TextMode="MultiLine" Rows="6" Columns="60" CssClass="border-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>

        <asp:Button ID="Submit" runat="server" CssClass="bg-blue-600 text-white text-lg px-10 py-2 rounded-md hover:bg-blue-700 cursor-pointer duration-200 ease-out" Text="Submit" OnClick="btnSubmit_Click" />
    </form>
</body>
</html>
