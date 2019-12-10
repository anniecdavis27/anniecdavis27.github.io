$(function () {
  $('#stopButton').click(() => {
    //console.log('clicked stop light')
    clearLights()
    $('#stopLight').css('backgroundColor', 'red')
  })
  $('#slowButton').click(() => {
    //console.log('clicked stop light')
    clearLights()
    $('#slowLight').css('backgroundColor', 'yellow')
  })
  $('#goButton').click(() => {
    //console.log('clicked stop light')
    clearLights()
    $('#goLight').css('backgroundColor', 'green')
  })
  function clearLights() {
    $('.bulb').css('backgroundColor', 'black')
  }
})
