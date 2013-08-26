// $(document).ready(function() {
//   // Handler for .ready() called.
// $('.red').html("<p>michael</p>");
// //$('.red').addClass('blue').removeClass('red');
// $('.yellow').remove();

// $('.red').hover(
// 	function (){
// 		$('.red').toggleClass("selected");
// 	});

// $('img').hover(
// 	function (){
// 		$('img').toggleClass("filled");
// 	});


// //lesson 2 
// var myName = "Richard";
// console.log(myName);

// // or even
// firstName = "Richard";
// console.log(firstName);


// });
//adding things to an array
// function print_numbers(number){
// 	var arr = [];
// 	var counter = 0;
// 	for (counter; counter<=number; counter++){
// 		arr[counter] = counter;
// 	}; 
// 	console.log(arr)
// };



// print_numbers(8);





// function checkform(){
// 	var arr = [0];
// 	var counter = 0;
// 	var form = document.getElementById('form');
// 	if(form.elements.checked){
// 	 counter++;
// 	}
// console.log(counter);
// }

// checkform();

// $(document).ready(function() {
// 	$("#form > div").click(function() {
// 		var arr = $("div").toArray();
// 		console.log(arr.length);
// 	});
// });







// var arr = $("div").map(function () {
//     return $(this).text();
// }).get()


$(document).ready(function(){
	count();
getTimes();


});

function count(){
	$(".count").html(($("form input:checked").length));  //attr("checked", "checked");
}

$("form input:checkbox").click(function(){
		count();
	});

$("p").click(function(){
	turnIntoTextField();
});

$("input").keypress(function(){
	typing();
});

function turnIntoTextField(){
	$(".todoitems").html("<input type= \"text\">");

}

function typing(){
	console.log("a key was pressed");
}

$(".svg").click(function(){
	addNewItem();
});

function addNewItem(){
	$("#form").append(" <form id=\"form\"> <div class=\"newItem\"> <p class=\"todoitems\">new item</p> <input type=\"checkbox\"> </div> </form>");

}


function getTimes(){
	d = new Date();
	var dayOfYear = ((d.getDate().toString()) + "/");
	var month = ((d.getMonth().toString()) + "/");
	var year = (d.getFullYear().toString());
	$(".date").html(dayOfYear + month + year);
}

















