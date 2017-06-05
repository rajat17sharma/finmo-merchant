function success()
{
	var mob=document.getElementById("mob_no");
	var business_name=document.getElementById("firm_name");
	var add1=document.getElementById("add1");
	var add1=document.getElementById("add2");
	var pin=document.getElementById("pincode")
	if(mob.checkValidity() == true && business_name.checkValidity() == true && add1.checkValidity() == true && add2.checkValidity() == true && pincode.checkValidity()==true)
	{	
	 alert("THANK YOU FOR GIVING US THE DETAILS. OUR TEAM WILL GET IN TOUCH WITH YOU SHORTLY.");
	}
}

