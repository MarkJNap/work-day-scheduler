
$(function () {
  // Display the updated current date and time in the header of the page immediately.
  currentTime()

  function currentTime() {
    const today = dayjs();
    $("#currentDay").text(today.format("dddd, DD MMMM YYYY, h:mm:ss A"));
  }

  const timeUpdate = setInterval(currentTime, 1000);

  // Clears local storage when button is clicked
  $("#clear-btn").on("click", function() { 
    localStorage.clear();
    location.reload();
  });

  // Runs the main function
  eachBlockStatus()

  function eachBlockStatus() {
    // Gets the current hour in 24h time
    const currentHour = dayjs().hour();
    let timeBlockEl = $(".time-block");
    $(timeBlockEl).each(function() {
      // For each timeblock it gets the id and removes hour- leaving only the timeblock time
      let eachBlockTime = Number($(this).attr("id").split("hour-")[1]);
      // Adds classes for past, future and present comparing the time to the timeblock
      if (eachBlockTime < currentHour) {
        // Sets colour to grey
        $(this).addClass("past");
      } else if (eachBlockTime === currentHour) {
        // Sets colour to red
        $(this).addClass("present");
        // Sets colour to green
      } else {
        $(this).addClass("future");
      }
      // Puts what is already stored in local storage in the text boxes if there is anything.
      let blockTimeId = $(this).attr("id");
      let existingNote = localStorage.getItem(blockTimeId);
      if (existingNote !== null) {
        $(this).children(".description").val(existingNote);
      }
    });
  }

  // When the save button is clicked, it gets the time and text of the box it is connected with and saves to local storage
  $(".saveBtn").on("click", function() {
    let timeId = $(this).parent().attr("id");
    let textEl = $(this).siblings(".description").val();
    localStorage.setItem(timeId, textEl);
  });
});
