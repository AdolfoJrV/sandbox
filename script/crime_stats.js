var jsonData; // Reference to parsed JSON data
window.onload = loadJSON;

function loadJSON() {
  var id;

  const radioButtons = document.querySelectorAll(
    'input[type="radio"][name="searchParameter"]',
  );

  // change this to just click event for the input boxes.
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", handleRadioButtonChange);
  });

  function handleRadioButtonChange(event) {
    id = event.target.value;
    activateInputBox(id);
    document.getElementById(id).addEventListener(
      "keyup",
      function () {
        searchPattern(this.value.toUpperCase(), id);
      },
      false,
    );
  }

  fetch("https://data.calgary.ca/resource/848s-4m4z.json")
    .then((response) => response.json())
    .then((data) => {
      jsonData = data;
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}

function activateInputBox(id) {
  document.getElementById("community_name").disabled = true;
  document.getElementById("category").disabled = true;
  document.getElementById("count").disabled = true;
  document.getElementById("year").disabled = true;
  document.getElementById("month").disabled = true;
  document.getElementById("community_name").value = "";
  document.getElementById("category").value = "";
  document.getElementById("count").value = "";
  document.getElementById("year").value = "";
  document.getElementById("month").value = "";
  document.getElementById("searchResult3").innerHTML = "";
  document.getElementById(id).disabled = false;
  document.getElementById(id).focus();
}

function searchPattern(pattern, id) {
  const searchResult3 = document.getElementById("searchResult3");
  //clear page of data
  searchResult3.innerHTML = "";
  var i; //iterator

  var recordname;
  var table;
  var x = jsonData;
  if (pattern == "") {
    table = "";
  } else {
    table =
      "<thead><tr><th>Community Name</th><th>Category</th><th>Count</th><th>Year</th><th>Month</th></tr></thead>";
    for (i = 0; i < x.length; i++) {
      recordname = x[i][id];
      if (recordname.toUpperCase().startsWith(pattern)) {
        table +=
          "<tr><td>" +
          x[i].community_name +
          "</td><td>" +
          x[i].category +
          "</td><td>" +
          x[i].count +
          "</td><td>" +
          x[i].year +
          "</td><td>" +
          x[i].month +
          "</td></tr>";
      }
    }
  }

  searchResult3.innerHTML = table;
}
