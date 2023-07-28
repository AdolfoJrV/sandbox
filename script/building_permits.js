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

  fetch("https://data.calgary.ca/resource/c2es-76ed.json")
    .then((response) => response.json())
    .then((data) => {
      jsonData = data;
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}

function activateInputBox(id) {
  document.getElementById("permitnum").disabled = true;
  document.getElementById("statuscurrent").disabled = true;
  document.getElementById("permitclassmapped").disabled = true;
  document.getElementById("permittype").disabled = true;
  document.getElementById("permitclassgroup").disabled = true;
  document.getElementById("permitnum").value = "";
  document.getElementById("statuscurrent").value = "";
  document.getElementById("permitclassmapped").value = "";
  document.getElementById("permittype").value = "";
  document.getElementById("permitclassgroup").value = "";
  document.getElementById("searchResult4").innerHTML = "";
  document.getElementById(id).disabled = false;
  document.getElementById(id).focus();
}

function searchPattern(pattern, id) {
  const searchResult4 = document.getElementById("searchResult4");
  //clear page of data
  searchResult4.innerHTML = "";
  var i; //iterator

  var recordname;
  var table;
  var x = jsonData;
  if (pattern == "") {
    table = "";
  } else {
    table =
      "<thead><tr><th>Permit Number</th><th>Current Status</th><th>Map Class</th><th>Permit Type</th><th>Class Group</th></tr></thead>";
    for (i = 0; i < x.length; i++) {
      recordname = x[i][id];
      if (recordname.toUpperCase().startsWith(pattern)) {
        table +=
          "<tr><td>" +
          x[i].permitnum +
          "</td><td>" +
          x[i].statuscurrent +
          "</td><td>" +
          x[i].permitclassmapped +
          "</td><td>" +
          x[i].permittype +
          "</td><td>" +
          x[i].permitclassgroup +
          "</td></tr>";
      }
    }
  }

  searchResult4.innerHTML = table;
}
