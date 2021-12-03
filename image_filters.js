
var button = "empty";
var buttonActive ; 
var lastClicked;
lastClicked = $("#undo_button");
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

$("#filter1").click(function(){ // image1
    $("#image1").addClass(button);
    if(button == "undo"){
        $("#image1").removeClass();
    }
});

$("#filter2").click(function(){// image2
    $("#image2").addClass(button);
    if(button == "undo"){
        $("#image2").removeClass();
    }
});

$("#filter3").click(function(){// image3
    $("#image3").addClass(button);
    if(button == "undo"){
        $("#image3").removeClass();
    }
});

$("#filter4").click(function(){// image4
    $("#image4").addClass(button);
    if(button == "undo"){
        $("#image4").removeClass();
    }
});

$("#filter5").click(function(){// image5
    $("#image5").addClass(button);
    if(button == "undo"){
        $("#image5").removeClass();
    }
});

$("#filter6").click(function(){// image6
    $("#image6").addClass(button);
    if(button == "undo"){
        $("#image6").removeClass();
    }
});

$("#filter7").click(function(){// image7
    $("#image7").addClass(button);
    if(button == "undo"){
        $("#image7").removeClass();
    }
});

$("#filter8").click(function(){// image8
    $("#image8").addClass(button);
    if(button == "undo"){
        $("#image8").removeClass();
    }

    
});

$("#filter9").click(function(){// image9
    $("#image9").addClass(button);
    if(button == "undo"){
        $("#image9").removeClass();
    }
});

$('#image1').keypress(function(e){
    if(e.which == 13){//Enter key pressed
        $('#filter1').click();//Trigger search button click event
    }
});
$('#image2').keypress(function(e){
    if(e.which == 13){//Enter key pressed
        $('#filter2').click();//Trigger search button click event
    }
});
$('#image3').keypress(function(e){
    if(e.which == 13){//Enter key pressed
        $('#filter3').click();//Trigger search button click event
    }
});
$('#image4').keypress(function(e){
    if(e.which == 13){//Enter key pressed
        $('#filter4').click();//Trigger search button click event
    }
});
$('#image5').keypress(function(e){
    if(e.which == 13){//Enter key pressed
        $('#filter5').click();//Trigger search button click event
    }
});
$('#image6').keypress(function(e){
    if(e.which == 13){//Enter key pressed
        $('#filter6').click();//Trigger search button click event
    }
});

$('#image7').keypress(function(e){
    if(e.which == 13){//Enter key pressed
        $('#filter7').click();//Trigger search button click event
    }
});

$('#image8').keypress(function(e){
    if(e.which == 13){//Enter key pressed
        $('#filter8').click();//Trigger search button click event
    }
});

$('#image9').keypress(function(e){
    if(e.which == 13){//Enter key pressed
        $('#filter9').click();//Trigger search button click event
    }
});

