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

  fetch("https://data.calgary.ca/resource/35ra-9556.json")
    .then((response) => response.json())
    .then((data) => {
      jsonData = data;
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}

function activateInputBox(id) {
  document.getElementById("incident_info").disabled = true;
  document.getElementById("description").disabled = true;
  document.getElementById("start_dt").disabled = true;
  document.getElementById("quadrant").disabled = true;
  document.getElementById("count").disabled = true;
  document.getElementById("incident_info").value = "";
  document.getElementById("description").value = "";
  document.getElementById("start_dt").value = "";
  document.getElementById("quadrant").value = "";
  document.getElementById("count").value = "";
  document.getElementById("searchResult1").innerHTML = "";
  document.getElementById(id).disabled = false;
  document.getElementById(id).focus();
}

function searchPattern(pattern, id) {
  const searchResult1 = document.getElementById("searchResult1");
  //clear page of data
  searchResult1.innerHTML = "";
  var i; //iterator

  var recordname;
  var table;
  var x = jsonData;
  if (pattern == "") {
    table = "";
  } else {
    table =
      "<thead><tr><th>Incident Info</th><th>Description</th><th>Date</th><th>Quadrant</th><th>Count</th></tr></thead>";
    for (i = 0; i < x.length; i++) {
      if (id == "incident_info") {
        recordname = x[i][id].slice(1);
      } else {
        recordname = x[i][id];
      }
      if (recordname.toUpperCase().startsWith(pattern)) {
        table +=
          "<tr><td>" +
          x[i].incident_info +
          "</td><td>" +
          x[i].description +
          "</td><td>" +
          x[i].start_dt +
          "</td><td>" +
          x[i].quadrant +
          "</td><td>" +
          x[i].count +
          "</td></tr>";
      }
    }
  }

  searchResult1.innerHTML = table;
}
