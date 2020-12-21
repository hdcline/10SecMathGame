$(document).ready(function () {
  //var start = $('.btn .start');
  var start = $('#start-btn');
  var playAgain = $('#again-btn');
  var answer = $('#answer');
  var restart = $('#restart-btn');

  var tf = true;

  //start.prop('disabled', true);
  restart.prop('disabled', true);

  var timer = function (){

    var seconds = 10;
    tf = false;

    var countdown = setInterval(function(){
      if(seconds <= 0){
        clearInterval(countdown);
        //start.prop('disabled', false);
        /*$('.row').append('<div class="col-6 text-center mt-5">' +
          '<button class="btn btn-block restart" id="restart-btn" type="button">Restart</button>' +
        '</div>');*/
        restart.prop('disabled', false);

      }
      $('.seconds').text(seconds + ' Seconds');
      seconds--;
    }, 1000);
  }

  restart.on('click', function () {
    //timer();
    restart.prop('disabled', true);
    $('.seconds').text('10 Seconds');
    tf = true;
  });

  answer.on('input', function (){
    if (tf === true){
      timer();
    }
  });

});
