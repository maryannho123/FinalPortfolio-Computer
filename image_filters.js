
var button;
var buttonActive ; 
var lastClicked;
lastClicked = $("#undo_button");;
var somethingClicked = 0; 
$('#sepia_button').bind('click', function() {
   buttonActive= $("#sepia_button");
   buttonActive.toggleClass("active");
   button = "sepia";
   if(lastClicked != buttonActive){
    lastClicked.removeClass("active");
   }

   lastClicked = buttonActive;
//    console.log("Last Clicked" + lastClicked);
//    console.log("Clicked" + buttonActive);
});
$('#blur_button').bind('click', function() {
   buttonActive= $('#blur_button');
   buttonActive.toggleClass("active");
   button = "blur";
  if(lastClicked != buttonActive){
    lastClicked.removeClass("active");
   }

   lastClicked = buttonActive;
});
$('#gray_button').bind('click', function() {
   buttonActive= $('#gray_button');
   buttonActive.toggleClass("active");
   button = "gray";
   if(lastClicked != buttonActive){
    lastClicked.removeClass("active");
   }

   lastClicked = buttonActive;
});
$('#saturate_button').bind('click', function() {
   buttonActive= $('#saturate_button');
   buttonActive.toggleClass("active");
   button = "saturate";
    if(lastClicked != buttonActive){
    lastClicked.removeClass("active");
   }

   lastClicked = buttonActive;
});

$('#undo_button').bind('click', function() {
   buttonActive= $('#undo_button');
   buttonActive.toggleClass("active");
   button = "undo";
    if(lastClicked != buttonActive){
    lastClicked.removeClass("active");
   }

   lastClicked = buttonActive;
});

$('.button').bind('click', function() {
  if(lastClicked != buttonActive){
    lastClicked.removeClass("active");
  }
 
});


// document.querySelector("#blur_button").addEventListener("click", function() {
//     button = "blur";
// });
// document.querySelector("#gray_button").addEventListener("click", function() {
//     button = "gray";
// });
// document.querySelector("#saturate_button").addEventListener("click", function() {
//     button = "saturate";
// });


$("#filter1").click(function(){ // image1
    $(".image1").addClass(button);
});

$("#filter2").click(function(){// image2
    $(".image2").addClass(button);
});

$("#filter3").click(function(){// image3
    $(".image3").addClass(button);
});

$("#filter4").click(function(){// image4
    $(".image4").addClass(button);
});

$("#filter5").click(function(){// image5
    $(".image5").addClass(button);
});

$("#filter6").click(function(){// image6
    $(".image6").addClass(button);
});

$("#filter7").click(function(){// image7
    $(".image7").addClass(button);
});

$("#filter8").click(function(){// image8
	console.log("Pause Video");

    $(".image8").addClass(button);
});

$("#filter9").click(function(){// image9
	console.log("Pause Video");
    $(".image9").addClass(button);
});