
var button;

document.querySelector("#sepia_button").addEventListener("click", function(){
    button = "sepia";
});

document.querySelector("#blur_button").addEventListener("click", function() {
    button = "blur";
});
document.querySelector("#gray_button").addEventListener("click", function() {
    button = "gray";
});
document.querySelector("#saturate_button").addEventListener("click", function() {
    button = "saturate";
});


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