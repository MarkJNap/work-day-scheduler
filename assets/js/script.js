
$(function () {
  // Display the current date and time in the header of the page.
  let today = dayjs();
  $('#currentDay').text(today.format('dddd, DD MMMM, YYYY h:mm A'));

  function currentTime() {
    // Gets the current hour in 24h time
    let currentHour = dayjs().hour()
    // To test when outside of the listed hours
    // let currentHour = 14
    console.log(currentHour);
    let timeBlockEl = $(".time-block")
    $(timeBlockEl).each(function() {
      // For each timeblock it gets the id and removes hour- leaving only the time
      let eachBlockTime = Number($(this).attr("id").split("hour-")[1])
      console.log(eachBlockTime);
      // Adds classes for past, future and present depending on the current time
      if (eachBlockTime < currentHour) {
        $(this).addClass("past")
      } else if (eachBlockTime === currentHour) {
        $(this).addClass("present")
      } else {
        $(this).addClass("future")
      }})
  }
  currentTime()

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
