var searchBoxEl = document.querySelector("#search-input");
var formEl = document.querySelector("#format-input");
var submitButton = document.querySelector("#save-btn");

var formSubmitHandler = function (event) {
  event.preventDefault();

  var searchText = searchBoxEl.value.trim();
  var formType = formEl.value;
  console.log(formType);
  console.log(searchText);

  if (searchText) {
    searchLibrary(searchText, formType);
  } else {
    alert("Please enter a search Parameter");
  }
};

var searchLibrary = function (searchText, formType) {
  var apiUrl = "https://www.loc.gov/" + formType + "/?q=" + searchText;

  console.log(apiUrl);

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displaySearch(data, formType, searchText);
      });
    } else {
      alert("Error: " + reponse.statusText);
    }
  });
};

submitButton.addEventListener("click", formSubmitHandler);
