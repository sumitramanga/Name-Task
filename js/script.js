$(document).ready(function(){
  $('#icon').click(function(){ //Click on icon
    console.log('working');

    //Clicking on icon will fade in and out the content within body
    $('.body').fadeOut().fadeIn(function(){

      //body, name and icon will change colours on toggle
      $('.body').toggleClass('backgroundColor');
      $('.name').toggleClass('whiteColor');
      $('.icon').toggleClass('whiteColor');
    });
  });//icon ends here
}); //Document ready ends here
