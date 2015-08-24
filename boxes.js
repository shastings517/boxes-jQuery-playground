console.log("hello world");

$(function(){
	console.log("ready for DOM manipulation");
	// $("#secretBox").css("background-color", "white");
	// $("#secretBox").append("<h1>Secret Box</h1>");
	// $("div", "#row1").addClass("boxType3");
	// $("div").eq(20).remove();
	// $("#row2 div").slice(0,2).removeClass();
	// $(".box").not("#secretBox").css("width", "2px");

	// $(".boxType1").append("<a href='http://www.galvanize.com/'>WHY</a>").click(function(e){
	// 	alert("you can never leave");
	// 	$(".boxType1 a").removeAttr("href");
	// });
	// $("div.box").click(function(e){
 //  		$(this).append("<img src='http://puppydogweb.com/gallery/puppies/labradorretriever2.jpg'>");
 //  			$("div.box").click(function(e){
 //  				$(this).remove();
 //  			});
	// });

	// $('.box').click(function() {
 //    	currentBg = $(this).css('background-image');
 //    	$(this).css('background-image', currentBg === 'none' ? 'url(http://puppydogweb.com/gallery/puppies/labradorretriever2.jpg)' : 'none');
 //  });
	$('#container').click(function(e) {
	    var tgt = e.target;
	    if (tgt.classList.contains('box')) {
	      this.style.backgroundColor = 'black';
	      tgt.style.backgroundColor = 'white';
	    } else {
	      this.style.backgroundColor = 'limegreen';
	    }
  });


});

