function outputPython(name) {
  $("#nameOutput").text(name);
  $("#firstLanguage").text("Python!");
}

function outputApple(name) {
  $("#nameOutput").text(name);
  $("#fistLanguage").text("Apple!");
}

function outputJavaScript(name) {
  $("#nameOutput").text(name);
  $("#fistLanguage").text("JavaScript!");
}

function outputCss(name) {
  $("#nameOutput").text(name);
  $("#fistLanguage").text("CSS!");
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("#output").hide();
    const nameInput = $("#nameInput").val();
    const ageInput = $("#ageInput").val();
    const swallowSpeed = parseInt($("#swallowSpeed").val());
    const platformChoice = $("#platformChoice").val();
    const purposeChoice = $("#purposeChoice").val();

    if (swallowSpeed === 24) {
      outputPython(nameInput);
    } else if (platformChoice === "Apple") {
      outputApple(nameInput);
    } else if (platformChoice === "Windows" && purposeChoice === "Function") {
      outputJavaScript(nameInput);
    } else if (platformChoice === "Windows" && purposeChoice === "Design") {
      outputCss(nameInput);
    }

    $("#output").show();
  });
});