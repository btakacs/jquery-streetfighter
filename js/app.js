$(document).ready(function() {

/*======== MOUSE EVENTS ===========*/

    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-throwing').hide();
        $('.ryu-cool').hide();
        $('.ryu-ready').show();
      })

      .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
        $('.ryu-cool').hide();
        $('.ryu-still').show();
      })

      .mousedown(function() {
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-still').hide();
        $('.ryu-cool').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show()
        .animate(
          {'left': '300px'},
          500,
          function() {
            $(this).hide();
            $(this).css('left', '-212px');
          }
        );
      })

      .mouseup(function() {
        $('.ryu-throwing').hide();
        $('.ryu-still').hide();
        $('.ryu-cool').hide();
        $('.ryu-ready').show();
      })


      /*======== KEYBOARD EVENTS ===========*/


      $(document).keydown(function(e) {
        if (e.keyCode == 88) {
          $('.ryu-still').hide();
          $('.ryu-ready').hide();
          $('.ryu-throwing').hide();
          $('.ryu-cool').show();
        }   
      }).keyup(function(e) {
        if (e.keyCode == 88) {
          $('.ryu-ready').hide();
          $('.ryu-throwing').hide();
          $('.ryu-cool').hide();
          $('.ryu-still').show();
        }
      });


      /*======== AUDIO EVENTS ===========*/
      
      function playHadouken () {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
      }
});