$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var randomLocation = function(){

    };

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $(".dancefloor").height() * Math.random(),
      $(".dancefloor").width() * Math.random(),
      Math.random() * 1000
    );
    $('.dancefloor').append(dancer.$node);
  });

  // $('.dancer').on('click', function(event) {
  //   $(this).animate({
  //     top: 100;
  //   })
  // });
  // $(button).on('click', function(){
  //   $(".dancer").appendTo('.align-dancers');
  // })
});

