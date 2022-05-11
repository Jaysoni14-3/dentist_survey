const takeTestBtn = document.querySelector(".test_btn");
takeTestBtn?.addEventListener("click", () => {
  location.href = "./test.html";
});

function validateAnswers() {
  // ALL THE RADIO BUTTONS
  var radios = document.querySelectorAll("input[type=radio]");
  var values = []; // creating a values array

  // if the user selects an option(ie. radio button) value will be added in the values array
  radios.forEach((radio) => {
    if (radio.checked) {
      values.push(radio.value); // pushed from here
    }
  });

  // CHECKBOX VALIDATION(THIRD QUESTION)
  var checkBox = document.querySelectorAll("input[type=checkbox]");
  var checkBoxValue;
  for (var x = 0; x < checkBox.length; x++) {
    if (checkBox[x].checked) {
      checkBoxValue = checkBox[x].value;
    }
  }

  // we have 5 radio buttons so if the user selects only 4 of the options from our 5 radio buttons validation will not be completed
  // for completing validation user must select one value from each 5 radio options

  // if the checkbox value is undefined the validation will again be failed
  // for completing validation user has to select atleast one option from the check box

  if (values.length > 4 && checkBoxValue !== undefined) {
    console.log("Validation COMPLETE");
    modal.classList.add("show__modal");
    window.scrollTo(0, 0);
  } else
    alert("Validation FAILED \n \n Please provide the answer to each question");
}

var submitBtn = document.querySelector(".submit");
submitBtn?.addEventListener("click", () => validateAnswers());

const modal = document.querySelector(".modal");
var modalBtn = document.querySelector(".modal__btn");
modalBtn?.addEventListener("click", () => {
  modal.classList.remove("show__modal");
  location.href = "./index.html";
});
