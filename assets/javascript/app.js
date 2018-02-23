$(document).ready(function() {
  var index = 0;
  var countDown = {
    time: 30,
    reset: function() {
      this.time = 30;
      $(".timer").html("<h3>" + this.time + " seconds remaining</h3>");
    },
    start: function() {
      counter = setInterval(countDown.count, 1000);
    },
    stop: function() {
      clearInterval(counter);
    },
    count: function() {
      countDown.time--;
      console.log(countDown.time);
      if (countDown.time >= 0) {
        $(".timer").html("<h3>" + countDown.time + " seconds remaining</h3>");
      } else {
        index++;
        answerWrong();
        countDown.reset();
        if (index < questionArray.length) {
          loadQuestion(index);
        } else {
          $(".answer-choice").hide();
          showScore();
        }
      }
    }
  };

  var correct = 0;
  var wrong = 0;
  var q1 = {
    question: "What is the capital of Albania?",
    possibleAnswers: ["A. Moscow", "B. Buenos Aires", "C. Tirana", "D. Kabul"],
    flags: [false, false, true, false],
    answer: "C. Tirana"
  };
  var q2 = {
    question: "What is the capital of Russia?",
    possibleAnswers: ["A. Yerevan", "B. Moscow", "C. Vodka", "D. Yemen"],
    flags: [false, true, false, false],
    answer: "B. Moscow"
  };
  var q3 = {
    question: "What is the capital of Georgia?",
    possibleAnswers: ["A. Vienna", "B. Tbilisi", "C. Minsk", "D. Luanda"],
    flags: [false, true, false, false],
    answer: "B. Tbilisi"
  };
  var q4 = {
    question: "What is the capital of Chile?",
    possibleAnswers: [
      "A. Santiago",
      "B. Havana",
      "C. Buenos Aires",
      "D. Bogota"
    ],
    flags: [true, false, false, false],
    answer: "A. Santiago"
  };
  var q5 = {
    question: "What is the capital of Samoa?",
    possibleAnswers: ["A. Dakar", "B. Apia", "C. Castries", "D. Riyadh"],
    flags: [false, true, false, false],
    answer: "B. Apia"
  };
  var q6 = {
    question: "What is the capital of Italy?",
    possibleAnswers: ["A. Rome", "B. Milan", "C. Maran", "D. Seoul"],
    flags: [true, false, false, false],
    answer: "A. Rome"
  };
  var q7 = {
    question: "What is the capital of Kosovo?",
    possibleAnswers: ["A. Cairo", "B. Quito", "C. Pristina", "D. Tehran"],
    flags: [false, false, true, false],
    answer: "C. Pristina"
  };
  var q8 = {
    question: "What is the capital of Finland?",
    possibleAnswers: [
      "A. Canberra",
      "B. Helsinki",
      "C. Abuja",
      "D. Porto-Novo"
    ],
    flags: [false, true, false, false],
    answer: "B. Helsinki"
  };
  var q9 = {
    question: "What is the capital of Lithuania?",
    possibleAnswers: ["A. Chisinau", "B. Vaduz", "C. Male", "D. Vilnius"],
    flags: [false, false, false, true],
    answer: "D. Vilnius"
  };
  var q10 = {
    question: "What is the capital of Nepal?",
    possibleAnswers: [
      "A. Wellington",
      "B. Kathmandu",
      "C. Oslo",
      "D. Windhoek"
    ],
    flags: [false, true, false, false],
    answer: "B. Kathmandu"
  };

  var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

  function loadQuestion(questionSelection) {
    console.log(questionSelection);
    countDown.reset();
    $(".question").html(
      "<h3>" + questionArray[questionSelection].question + "</h3>"
    );
    $("#buttonA")
      .text(questionArray[questionSelection].possibleAnswers[0])
      .show();
    $("#buttonB")
      .text(questionArray[questionSelection].possibleAnswers[1])
      .show();
    $("#buttonC")
      .text(questionArray[questionSelection].possibleAnswers[2])
      .show();
    $("#buttonD")
      .text(questionArray[questionSelection].possibleAnswers[3])
      .show();
  }

  function setup() {
    index = 0;
    $(".question").append('<button id="startButton">Start</button>');
    $("#startButton").on("click", function() {
      $(this).hide();
      countDown.start();
      loadQuestion(index);
    });
  }

  function getAnswer() {
    //  nextQuestion();
    $(".answer-choice").on("click", function() {
      console.log("alert", index);
      index++;
      console.log("click", index);
      $(".question").text("");
      $("#buttonA").text("");
      $("#buttonB").text("");
      $("#buttonC").text("");
      $("#buttonD").text("");
      loadQuestion();
    });
  }
  function answerCorrect() {
    correct++;
    alert("Correct!");
    console.log("correct");
  }

  function answerWrong() {
    wrong++;
		alert("Incorrect!");
		// how do I make the correct answer show???
		alert(this.answer);
    console.log("wrong");
  }

  function showScore() {
    $(".question").empty();
    $(".question").append("<h2><p>" + correct + " correct</p></h2>");
    $(".question").append("<h2><p>" + wrong + " incorrect</p></h2>");
    countDown.stop();
    $(".timer").empty();
  }
  setup();
  $(".answer-choice").on("click", function() {
    console.log($(this));
    if (this.id == "buttonA") {
      var answerChosen = "A";
    } else if (this.id == "buttonB") {
      answerChosen = "B";
    } else if (this.id == "buttonC") {
      answerChosen = "C";
    } else if (this.id == "buttonD") {
      answerChosen = "D";
    }
    if (answerChosen == "A" && questionArray[index].flags[0] == true) {
      answerCorrect();
    } else if (answerChosen == "A") {
      answerWrong();
    }
    if (answerChosen == "B" && questionArray[index].flags[1] == true) {
      answerCorrect();
    } else if (answerChosen == "B") {
      answerWrong();
    }
    if (answerChosen == "C" && questionArray[index].flags[2] == true) {
      answerCorrect();
    } else if (answerChosen == "C") {
      answerWrong();
    }
    if (answerChosen == "D" && questionArray[index].flags[3] == true) {
      answerCorrect();
    } else if (answerChosen == "D") {
      answerWrong();
    }

    $(".question").text("");
    $("#buttonA").text("");
    $("#buttonB").text("");
    $("#buttonC").text("");
    $("#buttonD").text("");
    index++;
    if (index < questionArray.length) {
      loadQuestion(index);
    } else {
      $(".answer-choice").hide();
      showScore();
    }
  });
});
