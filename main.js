
 ///////////////////////// how to change text value 
var page = $("#name").val()
console.log(page)
//////////////////////////
 $("#gamer").html( "Hello"+ page ) ;

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
$("#X").click(function(){
	$("td").click(function(){
	$(this).html("X")
	$(this).attr("id", "1")
	var saved = $(this).map(function(){
		return $(this).text()

	})
   }); // if player pchose X computer will chose o with random blocks 

 
});

$("#O").click(function(){
	$("td").click(function(){
	$(this).html("O")
	var saved = $(this).map(function(){
		return $(this).text()

	})	
   });// if player pchose X computer will chose o with random blocks 
});

//$("#X").click(function(){
	//for(var i =0; i<array.length; i++){
		//if()
	//}
//})
