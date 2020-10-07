
 ///////////////////////// its all about how change text idk how 
var page = $("#name").val()
console.log(page)
//////////////////////////
 $("#gamer").html( "Hello"+ page ) ;

console.log( $("#test").val())

console.log($("#gamer").text())


//$("#X").click(function(){
	
	//console.log($("#X").val())
//})

//$("#O").click(function(){
    
	//console.log($("#O").val())
//})

//var O = $("#O").val()
//var X = $("#X").val()

//var array=[1,2,3,4]
// this function will detect wich td you clicked and give it a value of X or O 
// still need to know how to know the id of td you clicked i found it already but cant use it 
// use this 
$(document).ready(function(){
	$("td").click(function(){
	$(this).html(text());
   });
});
