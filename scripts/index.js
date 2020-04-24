function calculateTip() {
  // box total amount
  var total = $("#purchase-total").val();
  // box tip percentage
  var percentage = $("#tip-percent").val();
  // input validation
  if (total == "" && percentage == "") {
    alert("Oh no! You forgot to input some values! Do that, and we'll get you your answer in a jiffy!");
  } else if (total == "") {
    alert("Don't forget to input your purchase total!");
  } else if (total < 0 || total > 10000) {
    alert("I know it's possible, but we only take values between 0 and 10000!");
  } else if (percentage == "") {
    alert("Don't forget to include the tip percentage!");
  } else if (percentage < 0 || percentage > 100) {
    alert("I know it's possible, but we only take values between 0 and 100!");
  } else {
    // calculate tip
    var tipAmount = total * (percentage / 100);
    // show tip amount
      // solo
      // group
    if (partyOfOne == true) {
      $(".tip-text").html("<strong>$" + tipAmount.toFixed(2) + "</strong>");
    } else {
      groupSize = $("#group-size").val();
      var tipAmountPerPerson = tipAmount / groupSize;
      $(".tip-text").html("<strong>$" + tipAmountPerPerson.toFixed(2) + "</strong>");
    }
  }


}

var partyOfOne = true;

// click event listener on calculate div
$(".calculate").click(function() {
  calculateTip();
});

// enter keydown event listener on body
$("body").keydown(function(event) {
  if (event.keyCode == 13) {
    calculateTip();
  }
})

// toggle solo/group buttons
$(".group").click(function() {
  if ($(".group").hasClass("unclicked")) {
    // change partyOfOne boolean for conditional output formatting
    partyOfOne = false;
    // add clicked to group class
    $(".group").removeClass("unclicked");
    $(".group").addClass("clicked");
    // remove clicked class to single
    $(".solo").removeClass("clicked");
    $(".solo").addClass("unclicked");
    // show group size text input
    $(".group-size-container").css("display", "flex");
    // change tip text title
    $(".tip-amount-title").html("<strong>Tip Amount Per Person</strong>");
  }
});

$(".solo").click(function() {
  if ($(".solo").hasClass("unclicked")) {
    // change partyOfOne boolean for conditional output formatting
    partyOfOne = true;
    // add clicked to group class
    $(".solo").removeClass("unclicked");
    $(".solo").addClass("clicked");
    // remove clicked class to single
    $(".group").removeClass("clicked");
    $(".group").addClass("unclicked");
    // show group size text input
    $(".group-size-container").css("display", "none");
    // change tip text title
    $(".tip-amount-title").html("<strong>Tip Amount<strong>");
  }
})
