const javascriptDescription = "Since you said you are interested in function, I recommend you try Javascript! Javascript is used to give websites functionality.";
const cssDescription = "Since you are interested in design you should learn css! Css is used to add styling to a webpage. You can use it to update colors, fonts, spacing, and more. While you're at it, check out HTML for creating the elements on the page!";
const scratchDescription = "You said you are younger then 12. Wow, you're a rockstar! I recommend you start with Scratch. Its a fun way to learn coding and build games!";
const swiftDescription = "You said you're an Apple person. I recommend you use swift. Its the language used to build iOS apps!";
const pythonDescription = "Ah, I see you seek the holy grail! Python will help you in your quest!";

function outputPython(name) {
  $("#nameOutput").text(name);
  $("#firstLanguage").text("Python!");
  $("#languageDescription").text(pythonDescription);
}

function outputApple(name) {
  $("#nameOutput").text(name);
  $("#firstLanguage").text("Swift!");
  $("#languageDescription").text(swiftDescription);
}

function outputJavaScript(name) {
  $("#nameOutput").text(name);
  $("#firstLanguage").text("JavaScript!");
  $("#languageDescription").text(javascriptDescription);
}

function outputCss(name) {
  $("#nameOutput").text(name);
  $("#firstLanguage").text("CSS!");
  $("#languageDescription").text(cssDescription);
}

function outputScratch(name) {
  $("#nameOutput").text(name);
  $("#firstLanguage").text("Scratch!");
  $("#languageDescription").text(scratchDescription);
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

    if (isNaN(ageInput) || isNaN(swallowSpeed) || ageInput < 0 || swallowSpeed < 0) {
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

  $("#scratch").hover(function() {
    if($("#resourceImage").attr("src") != "img/scratch.jpg") {
      $("#resourceImage").fadeOut(function() {
        $("#resourceImage").attr("src","img/scratch.jpg");
      })
      .fadeIn();
    }
  });
  $("#swift").hover(function() {
    if($("#resourceImage").attr("src") != "img/swift-og.png") {
      $("#resourceImage").fadeOut(function() {
        $("#resourceImage").attr("src","img/swift-og.png");
      })
      .fadeIn();
    }
  });
  $("#css").hover(function() {
    if($("#resourceImage").attr("src") != "img/css.png") {
      $("#resourceImage").fadeOut(function() {
        $("#resourceImage").attr("src","img/css.png");
      })
      .fadeIn();
    }
  });
  $("#python").hover(function() {
    if($("#resourceImage").attr("src") != "img/python.jpg") {
      $("#resourceImage").fadeOut(function() {
        $("#resourceImage").attr("src","img/python.jpg");
      })
      .fadeIn();
    }
  });
  $("#javascript").hover(function() {
    if($("#resourceImage").attr("src") != "img/javascript.jpg") {
      $("#resourceImage").fadeOut(function() {
        $("#resourceImage").attr("src","img/javascript.jpg");
      })
      .fadeIn();
    }
  });
});