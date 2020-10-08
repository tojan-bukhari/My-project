
 ///////////////////////// how to change text value 

////////////////////////////////////how to start 

// nine blocks 
// Function 1 is to give text & id for the clicked td 
// even clicks is for X and odd for O 
//if we got three blocks in row with the same text the player wins 
// we need to count for x's and o's
// clear game 

var sumX=0
var sumO=0
var clicks=0
$("td").click(function(){
	if($(this).text() === "X" || $(this).text() === "O" ){
		alert("you already fill it")
	}
	if(clicks%2===0){
		clicks++
	   sumX = sumX + 1
	    $(this).html("X")
	}else{
		clicks++
		sumO = sumO + 1
		$(this).html("O")
	}
	

	console.log(sumX,sumO)
		if($("#1").text()==="X" && $("#2").text()==="X" && $("#3").text()==="X"){
		 alert ( "X plyer wins")
	}else if ($("#1").text() === "X" && $("#4").text() === "X" && $("#7").text() ==="X"){
		alert ( "X plyer wins")
	}else if($("#1").text() === "X" && $("#5").text() === "X" && $("#9").text() === "X"){
		alert ( "X plyer wins")
	}else if($("#2").text() === "X" &&  $("#5").text()=== "X" && $("#8").text() === "X"){
		alert ( "X plyer wins")
	}else if($("#3").text() === "X" && $("#5").text() === "X" && $("#7").text() === "X"){
		alert ( "X plyer wins")
	}else if($("#3").text() === "X" && $("#6").text() === "X" && $("#9").text() === "X"){
		alert ( "X plyer wins")
	}else if($("#4").text() === "X" && $("#5").text() === "X" && $("#6").text() === "X" ){
		alert ( "X plyer wins")
	}else if($("#7").text() === "X" && $("#8").text() === "X" && $("#9").text() === "X"){
		alert ( "X plyer wins")
	}else if($("#1").text() === "O" && $("#2").text() === "O" && $("#3").text() === "O"){
		alert ( "O plyer wins")
	}else if ($("#1").text() === "O" && $("#4").text() === "O" && $("#7").text() ==="O"){
		alert ( "O plyer wins")
	}else if($("#1").text() === "O" && $("#5").text() === "O" && $("#9").text() === "O"){
		alert ( "O plyer wins")
	}else if($("#2").text() === "O" &&  $("#5").text()=== "O" && $("#8").text() === "O"){
		alert ( "O plyer wins")
	}else if($("#3").text() === "O" && $("#5").text() === "O" && $("#7").text() === "O"){
		alert ( "O plyer wins")
	}else if($("#3").text() === "O" && $("#6").text() === "O" && $("#9").text() === "O"){
		alert ( "O plyer wins")
	}else if($("#4").text() === "O" && $("#5").text() === "O" && $("#6").text() === "O" ){
		alert ( "O plyer wins")
	}else if($("#7").text() === "O" && $("#8").text() === "O" && $("#9").text() === "O"){
		alert ( "O plyer wins")
	}else if (sumX > 7 || sumO > 7 ){
		alert("nobody wins")}

    $("#h2").html("Multiplayer Game" + " " + sumX + " /"+ sumO)
	
	})
	
	

// 24 line and wondarring why its not working  

$("#reset").click(function(){
	$("td").html(" ")
	sumX=0
	sumO=0
})

