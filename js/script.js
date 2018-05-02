// Document ready prepares the dom, i.e loading js after the dom/html has loaded
$(document).ready(function(){

    icon();// Call the function in order for it to work.
    text();

  function icon () {

    $('#icon').click(function(){ //Click on icon
      console.log('working');//Check if the element is working within the console.log

      //Clicking on icon will fade in and out the content within body
      $('.body').fadeOut().fadeIn(function(){

        //body, name and icon will change colours on toggle
        $('.body').toggleClass('backgroundColor');
        $('.name').toggleClass('whiteColor');
        $('.icon').toggleClass('whiteColor');
      });
    });//click icon ends here

  } //js function delcaration ends here

  function text () {
    $('.name').hover(function(){
      $('.paragraph').text('Cat Calgue is a student at Yoobee School of Design studying Web and UX Design.');
    });
  }

}); //Document ready ends here
