var jsonData; // Reference to parsed JSON data
window.onload = loadJSON;

function loadJSON() {
  var id;

  const radioButtons = document.querySelectorAll(
    'input[type="radio"][name="searchParameter"]',
  );

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", handleRadioButtonChange);
  });

  function handleRadioButtonChange(event) {
    id = event.target.value;
    activateInputBox(id);
    document.getElementById(id).addEventListener(
      "keyup",
      function () {
        console.log(id);
        searchPattern(this.value.toUpperCase(), id);
      },
      false,
    );
  }

  fetch("https://data.calgary.ca/resource/k7p9-kppz.json")
    .then((response) => response.json())
    .then((data) => {
      jsonData = data;
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}

function activateInputBox(id) {
  document.getElementById("description").disabled = true;
  document.getElementById("quadrant").disabled = true;
  document.getElementById("camera_location").disabled = true;
  document.getElementById("description").value = "";
  document.getElementById("quadrant").value = "";
  document.getElementById("camera_location").value = "";
  document.getElementById("searchResult2").innerHTML = "";
  document.getElementById(id).disabled = false;
  document.getElementById(id).focus();
}

function searchPattern(pattern, id) {
  const searchResult2 = document.getElementById("searchResult2");
  //clear page of data
  searchResult2.innerHTML = "";
  var i; //iterator

  var recordname;
  var table;
  var x = jsonData;
  if (pattern == "") {
    table = "";
  } else {
    table =
      "<thead><tr><th>Camera ID</th><th>URL</th><th>Quadrant</th><th>Camera Location</th></tr></thead>";
    for (i = 0; i < x.length; i++) {
      if (id == "description") {
        recordname = x[i].camera_url.description;
      } else {
        recordname = x[i][id];
      }
      if (recordname.toUpperCase().startsWith(pattern)) {
        table +=
          "<tr><td>" +
          x[i].camera_url.description +
          "</td><td>" +
          "<a href='" +
          x[i].camera_url.url +
          "' target='_blank'>" +
          x[i].camera_url.url +
          "</a>" +
          "</td><td>" +
          x[i].quadrant +
          "</td><td>" +
          x[i].camera_location +
          "</td></tr>";
      }
    }
  }
  searchResult2.innerHTML = table;
}
