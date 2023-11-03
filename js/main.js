"use strict"
// navbar background
let homeTextoffset= $(".hometext").offset().top,
    aboutOffset=$("#about").offset().top,
    windowScroll=""
     
$(window).scroll(function(){
    windowScroll=$(window).scrollTop();

if( windowScroll>homeTextoffset){
    $(".navbar").css("backgroundColor","#ffff")
    $(".nav-link").css("color","#000")
   $("#logo").attr("src", "./images/logo-dark.png");
   
}
else{
    $(".navbar").css("backgroundColor","transparent")
    $(".nav-link").css("color","#ffff")
    $("#logo").attr("src", "./images/logo.png");

}
})

// animation
var typed = new Typed('#element', {
  strings: ['kerri deo.', 'A photographer.', 'A Graphic Designer.'],
  typeSpeed: 100,
  backSpeed:100,
  backDelay: 2000,
  loop:true,
});

//go to about
$(".go-down").click(function(){
    $("html,body").animate({scrollTop:aboutOffset},100)

})


// color setter
let colorBoxes = $(".colors li");
   colorBoxes.eq(0).css("backgroundColor","#e65f78")
   colorBoxes.eq(1).css("backgroundColor","#37b8df")
   colorBoxes.eq(2).css("backgroundColor","#4fa05b")
   colorBoxes.eq(3).css("backgroundColor","#ecca58")
   colorBoxes.eq(4).css("backgroundColor","#17f")
   colorBoxes.eq(5).css("backgroundColor","#b172e8")

$(".setting").click(function () { 
    let colorSettingWidth =$(".color-menu").innerWidth()
    if ($(".color-setting").css("left") == "0px"){
        $(".color-setting").animate({left:-colorSettingWidth},500);
    }
    else{
        $(".color-setting").animate({left:"0px"},500)
    }
})
colorBoxes.click(function(){
    let chosenColor = $(this).css("backgroundColor")
    $("body").css("--main-color",chosenColor)
})


//go to top
$(window).scroll(function(){

    if (windowScroll >= aboutOffset){
        $(".go-top").fadeIn(300);
    }
    else{
        $(".go-top").fadeOut(300);
    }

})

$(".go-top").click(function(){
    $("html,body").animate({scrollTop:"0"},500)

})


//our works
var mixer = mixitup(".works");