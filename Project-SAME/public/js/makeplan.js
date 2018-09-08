// Get references to page elements
var $submitBtn = $("#submit");

var $muscle1 = $("#muscle1");
var $muscle2 = $("#muscle2");
var $muscle3 = $("#muscle3");
var $weekday = $("#weekday");
var $planname = $("planname");

var handleFormSubmit = function (event) {
    event.preventDefault();
    console.log("success!");
    var userInput = {
        muscle1: $muscle1.val().trim(),
        muscle2: $muscle2.val().trim(),
        muscle3: $muscle3.val().trim(),
        weekday: $weekday.val().trim(),
        planname: $planname.val().trim();
    };

    if (!(userInput.muscle1 || userInput.weekday || userInput.planname)) {
        alert("You must enter a Plan Name, Number of Days and at least 1 muscle!");
        return;
    }

    console.log(userInput.muscle1);

    $muscle1.val("");
  $exampleDescription.val("");
}

$submitBtn.on("click", handleFormSubmit);
