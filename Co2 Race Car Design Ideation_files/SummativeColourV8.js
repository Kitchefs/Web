var y = document.getElementById('grade-summary-content');   //look for the gradepage id
var z = document.getElementsByClassName("title");			//find the title cells
 
if (y !== null)										//check we are on the grade page
{
    for (i = 0; i < z.length; i++) {					//for every title cell
                             thisGroup = z[i].innerHTML.toLowerCase();    //convert the text to lowercase
                             containsSummative = thisGroup.includes("summative");  //check if it has "summative"
                             if(containsSummative){
                                        z[i].style.backgroundColor = "LightSteelBlue";	//make it light blue
										//z[i].style.fontWeight = "bold";
                             }
              }
}
