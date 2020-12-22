$(document).ready(function () {
  //var start = $('.btn .start');
  var start = $('#start-btn');
  var playAgain = $('#again-btn');
  var answer = $('#answer');
  var restart = $('#restart-btn');
  var equation = $('#equation');

  var tf = true;
  var seconds;


  //start.prop('disabled', true);
  restart.prop('disabled', true);


  var timer = function (){
    seconds = 10;
    tf = false;

    var countdown = setInterval(function(){
      if(seconds <= 0){
        clearInterval(countdown);
        //start.prop('disabled', false);
        /*$('.row').append('<div class="col-6 text-center mt-5">' +
          '<button class="btn btn-block restart" id="restart-btn" type="button">Restart</button>' +
        '</div>');*/
        restart.prop('disabled', false);
        answer.prop('disabled', true);
        answer.val('');
      }
      $('.seconds').text(seconds + ' Seconds');
      seconds--;
    }, 1000);
  }

  answer.on('input', function (){
    if (tf === true){
      timer();
    }
  });


  var getRandomEquation = function() {
    var rand1 = Math.floor(Math.random() * 10) + 1;
    var rand2 = Math.floor(Math.random() * 10) + 1;
    var total = rand1 + rand2;
    equation.text(rand1 + ' + ' + rand2);

    return total;
  }

  var randEquation = getRandomEquation();
  var score = 0;

  var guessAnswer = function (num){
    if (num === randEquation){
      $('#right-wrong').text('Correct');
      if ($('#right-wrong').hasClass('green') === false){
        $('#right-wrong').addClass('green');
        $('#right-wrong').removeClass('red');
      }
      seconds++;
      score++;
      $('#score').text(score);
      randEquation = getRandomEquation();
      return true;
    }

    else {
      $('#right-wrong').text('Incorrect');
      if ($('#right-wrong').hasClass('red') === false){
        $('#right-wrong').addClass('red');
        $('#right-wrong').removeClass('green');
      }
      return false;
    }
    console.log(randEquation);
  }

  answer.on('keyup', function(event) {
    if (event.key === 'Enter'){
      guessAnswer(parseInt(answer.val()));
      console.log(answer.val());
      answer.val('');
      console.log(seconds);
    }
  });

  restart.on('click', function () {
    //timer();
    seconds = 10;
    score = 0;
    answer.prop('disabled', false);
    console.log(seconds);

    $('#right-wrong').text('');
    $('#score').text(score);
    restart.prop('disabled', true);
    $('.seconds').text('10 Seconds');
    tf = true;
    randEquation = getRandomEquation();
  });
});
