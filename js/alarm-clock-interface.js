$(document).ready(function(){
  let alarm_time = 0;
  console.log(alarm_time);

  var async = function() {
    $('#time1').text(moment().format('h:mm:ss a'));
    $('#time2').text(moment().format('MMMM Do YYYY'));
    let current_time = "0".concat(moment().format('h:mm:ss'));
    console.log(current_time.toString())
    console.log(alarm_time.toString())
    if(current_time == alarm_time) {
      alarm();
    }
  }

  setInterval(async , 1000);

  var alarm = function() {
    $('.bell').show();
    console.log("Wake Up!");
  }


  $("#timer").submit(function(event){
    event.preventDefault();
      let milliseconds_var = 1000*parseInt($("#seconds").val());
      window.setTimeout(alarm, milliseconds_var);
  });

  $("#alarm").submit(function(event){
    event.preventDefault();
      alarm_time = $("#settime").val().concat(":00");
      console.log(alarm_time);
  });

  $("#reset").click(function(){
    $('.bell').hide();
    window.setTimeout(alarm, 5000);
  });

  $("#off").click(function(){
    $('.bell').hide();
  });
});
