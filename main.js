
 ///////////////////////// how to change text value 
var mame = $("#name").val()
//////////////////////////
 $("h2").text( "Hello"+ mame ) ;

console.log( $("#test").val())

console.log($("#gamer").text())



////////////////////////////////////how to start 

/*when you press the block it will give it an id and save it 
if block alredy have id thats mean dont fill it again 
else fill it with X or O value*/

//first step the player will chose to use x or o  

//we will have tow player functions one for player 
// the other one is for random computer 

// final step check for block in row 
//if the id fill in three blocks in row the player wins


// its all about sunctions 


// lets start how to giv an id for td block once its clicked
var n = 0
	
	$("#X").click(function(){
	$("td").click(function(n){
	$(this).html("X")
	$(this).attr("id", "n++")

	})
   }); // if player pchose X computer will chose o with random blocks 

 

$("#O").click(function(){
	$("td").click(function(n){
	$(this).html("O")
	$(this).attr("id", "n++")
	})
 });// if player pchose X computer will chose o with random blocks 

var arrayId =["#1","#2","#3","#4","#5","#6","#7","#8","#9"]//indexes 8
$("#X").click(function(){
	for(var i = 0; i< array.length; i++){
		var random = Math.floor(Math.random*9)
		function td(event){
		var $ arrayId [$(random)]= $ event(target)
		return $ arrayId [$(random)].html("O")	
		}
		

	}


}


// this function to detect if the td clicked or not 
 //function td(event){
	//var element = event.target
	//return (element.html("O"))
//});