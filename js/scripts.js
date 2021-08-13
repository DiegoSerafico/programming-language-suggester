function outputPython(name) {
  $("#nameOutput").text(name);
  $("#firstLanguage").text("Python!");
}

function outputApple(name) {
  $("#nameOutput").text(name);
  $("#firstLanguage").text("Swift!");
}

function outputJavaScript(name) {
  $("#nameOutput").text(name);
  $("#firstLanguage").text("JavaScript!");
}

function outputCss(name) {
  $("#nameOutput").text(name);
  $("#firstLanguage").text("CSS!");
}

function outputScratch(name) {
  $("#nameOutput").text(name);
  $("#firstLanguage").text("Scratch!");
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("#output").hide();
    $("#nameOutput").empty();
    $("#firstLanguage").empty();
    const nameInput = $("#nameInput").val();
    const ageInput = parseInt($("#ageInput").val());
    const swallowSpeed = parseInt($("#swallowSpeed").val());
    const platformChoice = $("#platformChoice").val();
    const purposeChoice = $("#purposeChoice").val();

    if (nameInput === "" || isNaN(ageInput) || isNaN(swallowSpeed) || ageInput < 1 || swallowSpeed < 1) {
      alert("One or more of your answers may not be valid. Please check your answers and try again");
    }

    if (swallowSpeed === 24) {
      outputPython(nameInput);
    } else if (ageInput < 12) {
      outputScratch(nameInput);
    } else if (platformChoice === "Windows" && purposeChoice === "Function") {
      outputJavaScript(nameInput);
    } else if (platformChoice === "Windows" && purposeChoice === "Design") {
      outputCss(nameInput);
    } else {
      outputApple(nameInput);
    }

    $("#output").fadeIn();
  });
});