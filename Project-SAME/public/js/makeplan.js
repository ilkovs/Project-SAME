// Get references to page elements
var $submitBtn = $("#submit");

var handleFormSubmit = function (event) {
    event.preventDefault();
    console.log("success!");
    var $muscle1 = $("#muscle1").val();
    var $muscle2 = $("#muscle2").val();
    var $muscle3 = $("#muscle3").val();
    var $weekday = $("#weekday").val();
    var $planname = $("#planname").val();
    var userInput = {
        muscle1: $muscle1[0].trim(),
        muscle2: $muscle2[0].trim(),
        muscle3: $muscle3[0].trim(),
        weekday: $weekday[0].trim(),
        planname: $planname.trim()
    };

    if (!(userInput.muscle1 && userInput.weekday && userInput.planname)) {
        alert("You must enter a Plan Name, Number of Days and at least 1 muscle!");
        return;
    }

    console.log(userInput);

    $("#muscle1").val("");
    $("#muscle2").val("");
    $("#muscle3").val("");
    $("#weekday").val("");
    $("#planname").val("");
}

$submitBtn.on("click", handleFormSubmit);
