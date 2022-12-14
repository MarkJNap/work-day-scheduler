
$(function () {
  // Display the current date and time in the header of the page.
  let today = dayjs();
  $('#currentDay').text(today.format('dddd, DD MMMM, YYYY h:mm A'));

  function currentTime() {
    // Gets the current hour in 24h time
    let currentHour = dayjs().hour()
    // Just used to test when outside of the 9-5 hours
    // --- let currentHour = 14 ---
    // console.log(currentHour);
    let timeBlockEl = $(".time-block")
    $(timeBlockEl).each(function() {
      // For each timeblock it gets the id and removes hour- leaving only the time
      let eachBlockTime = Number($(this).attr("id").split("hour-")[1])
      // console.log(eachBlockTime);
      // Adds classes for past, future and present depending on the current time
      if (eachBlockTime < currentHour) {
        $(this).addClass("past")
      } else if (eachBlockTime === currentHour) {
        $(this).addClass("present")
      } else {
        $(this).addClass("future")
      }})
  }

  // When the save button is clicked, it gets the time and text of the box it is connected with and saves to local storage
  $(".saveBtn").on("click", function() {
    let timeId = $(this).parent().attr("id");
    let textEl = $(this).siblings(".description").val();
    console.log(timeId);
    console.log(textEl);
    localStorage.setItem(timeId, textEl);
    // console.log(localStorage);
  })

  currentTime()

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
