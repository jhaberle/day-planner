let timeNow = moment().format('dddd, MMMM Do YYYY');
let hourNow = moment().format('h');
let hourNow24= parseInt(moment().format('HH'));
let hourNowInt = parseInt(hourNow);
let Timer;

const hour1 = $('#time1').text();
const hour2 = $('#time2').text();
const hour3 = $('#time3').text();
const hour4 = $('#time4').text();
const hour5 = $('#time5').text();
const hour6 = $('#time6').text();
const hour7 = $('#time7').text();
const hour8 = $('#time8').text();
const hour9 = $('#time9').text();

const hour1Int = parseInt(hour1);
const hour2Int = parseInt(hour2);
const hour3Int = parseInt(hour3);
const hour4Int = parseInt(hour4);
const hour5Int = parseInt(hour5);
const hour6Int = parseInt(hour6);
const hour7Int = parseInt(hour7);
const hour8Int = parseInt(hour8);
const hour9Int = parseInt(hour9);

// Store user input in local Storage

$('#btn1').click(function() {
    if($('#text1').val()) {
      localStorage.removeItem('text1');
    }
  
    const hour1String = JSON.stringify(hour1);
    
    localStorage.setItem(hour1, $('#text1').val());
  });
  
  $('#btn2').click(function() {
    if($('#text2').val()) {
      localStorage.removeItem('text2');
    }
  
    const hour2String = JSON.stringify(hour2);
  
    localStorage.setItem(hour2, $('#text2').val());
  });
  
  $('#btn3').click(function() {
    if($('#text3').val()) {
      localStorage.removeItem('text3');
    }
  
    const hour3String = JSON.stringify(hour3);
  
    localStorage.setItem(hour3, $('#text3').val());
  });
  
  $('#btn4').click(function() {
    if($('#text4').val()) {
      localStorage.removeItem('text4');
    }
  
    const hour4String = JSON.stringify(hour4);
  
    localStorage.setItem(hour4, $('#text4').val());
  });