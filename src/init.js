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
    window.dancers.push(dancer);
  });

  

  
  $(".align").on('click', function(event){
    // console.log($('.align-dancer'));
    // $('.dancer').appendTo('.align-dancer');
     var x = 0;
     var z = 100;
    for( var i = 0; i < window.dancers.length; i+=2) {
      window.dancers[i].setPosition(650, x);
      x += 150;
    }

    for( var i = 1; i < window.dancers.length; i+=2) {
      window.dancers[i].setPosition(550, z);
      z += 150;
    }
    
  });

  // $('.dancer').on('click', function(event) {
  //   $(this).animate({
  //     top: 100;
  //   })
  // });
  // $(button).on('click', function(){
  //   $(".align-dancers").appendTo('.dancer');
  // })
});

