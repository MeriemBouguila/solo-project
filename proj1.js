



$(".button1").click(function(){
$("#first").hide("slow");
 $("#one").show();
});



$("#b1").click(function(){
$("#ferrari").hide("slow");
 $("#italy").show();
});

$("#b2").click(function(){
$("#ferrari").hide("slow");
 $("#italy").show();
});


$("#bt1").click(function(){
$("#italy").hide("slow");
 $("#enzo").show();
});

$("#bt2").click(function(){
$("#italy").hide("slow");
 $("#enzo").show();
});


$("#btn1").click(function(){
$("#enzo").hide("slow");
 $("#year1").show();
});

$("#btn2").click(function(){
$("#enzo").hide("slow");
 $("#year1").show();
});





$("#bttn1").click(function(){
$("#year1").hide("slow");
$("#fer").hide("slow");
 $(".lam").show();
});

$("#bttn2").click(function(){
$("#year1").hide("slow");
$("#fer").hide("slow");
 $(".lam").show();
});


$("#motors").click(function(){
$("#name").hide("slow");
 $("#country").show();
});

$("#Lambo").click(function(){
$("#name").hide("slow");
 $("#country").show();
});


$("#albania").click(function(){
$("#country").hide("slow");
 $("#ferruccio").show();
});

$("#italy1").click(function(){
$("#country").hide("slow");
 $("#ferruccio").show();
});

$("#ferL").click(function(){
$("#ferruccio").hide("slow");
 $("#year2").show();
});

$("#dw").click(function(){
$("#ferruccio").hide("slow");
 $("#year2").show();
});

$("#y1").click(function(){
	$("#lamba").hide()
$("#year2").hide("slow");
 $(".por").show();
});

$("#y2").click(function(){
$("#lamba").hide()
$("#year2").hide("slow");
 $(".por").show();
});


$("#p").click(function(){
$("#cn").hide("slow");
 $("#country3").show();
});

$("#p2").click(function(){
$("#cn").hide("slow");
 $("#country3").show();
});

$("#fr").click(function(){
$("#country3").hide("slow");
 $("#fp").show();
});

$("#gr").click(function(){
$("#country3").hide("slow");
 $("#fp").show();
});


$("#geo").click(function(){
$("#fp").hide("slow");
 $("#year3").show();
});

$("#ferd").click(function(){
$("#fp").hide("slow");
 $("#year3").show();
});

$("#yy1").click(function(){
$(".por").hide("slow");
$("#year3").hide("slow");
 $(".ko").show();
});

$("#yy2").click(function(){
$(".por").hide("slow");
$("#year3").hide("slow");
 $("#ko").show();
});

$("#pa").click(function(){
$("#cn2").hide("slow");
 $("#country4").show();
});

$("#koe").click(function(){
$("#cn2").hide("slow");
 $("#country4").show();
});

$("#sw").click(function(){
$("#country4").hide("slow");
 $("#year4").show();
});

$("#sk").click(function(){
$("#country4").hide("slow");
 $("#year4").show();
});

$("#ck").click(function(){
$("#year4").hide("slow");
 $("#year5").show();
});

$("#lb").click(function(){
$("#year4").hide("slow");
 $("#year5").show();
});

$("#f1").click(function(){
$("#koeni").hide("slow");
$("#year5").hide("slow");
 $("#score").show();
});

$("#f2").click(function(){
$("#koeni").hide("slow");
$("#year5").hide("slow");
$('#score').val(counter)
 $("#score").show();
 $("#score").append(countScore())
});

var counter=0;
var countScore=function(){
	
	counter++
}

	$("#b2").click(function(){
		countScore()
		console.log(counter)
	})
		$("#bt1").click(function(){
		countScore()
		console.log(counter)

	})
		$("#btn2").click(function(){
		countScore()
		console.log(counter)
	})
		$("#bttn1").click(function(){
		countScore()
		console.log(counter)
	})
		$("#lambo").click(function(){
		countScore()
		console.log(counter)
	})
		$("#italy1").click(function(){
		countScore()
		console.log(counter)
	})
		$("#ferL").click(function(){
		countScore()
		console.log(counter)
	})
			$("#y1").click(function(){
		countScore()
		console.log(counter)
	})
		$("#p").click(function(){
		countScore()
		console.log(counter)
	})
		$("#gr").click(function(){
		countScore()
		console.log(counter)
	})
			$("#ferd").click(function(){
		countScore()
		console.log(counter)
	})
		$("#yy1").click(function(){
		countScore()
		console.log(counter)
	})
		$("#koe").click(function(){
		countScore()
		console.log(counter)
	})
			$("#ck").click(function(){
		countScore()
		console.log(counter)
	})
		$("#f1").click(function(){
		countScore()
		$("#score").text('your score is : ' + '\n ' +counter)
		console.log(counter)
	})
		
	



