// Intialize the minimum date for the order date on load.
window.onload = function () {
  var datePicker = document.getElementById("pickupDate");

  if (datePicker) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    datePicker.min = today;
  }
};

function processData() {
  const inputName = document.getElementById("fullname").value;
  const inputAddress = document.getElementById("address").value;
  const inputPostal = document.getElementById("postal-code").value;
  const inputTelephone = document.getElementById("telephone").value;
  const inputEmail = document.getElementById("email").value;
  const inputDate = new Date(document.getElementById("pickupDate").value);

  displayData(
    inputName,
    inputAddress,
    inputPostal.toUpperCase(),
    inputTelephone,
    inputEmail,
    formatDate(inputDate),
  );
}

function displayData(name, address, postal, telephone, email, date) {
  var main1 = document.getElementById("main1");
  var main2 = document.getElementById("main2");
  var main3 = document.getElementById("main3");

  main1.style.display = "none";
  main2.style.display = "flex";
  main3.style.display = "none";

  document.getElementById("regName").innerHTML = name;
  document.getElementById("regAddress").innerHTML = address;
  document.getElementById("regPostal").innerHTML = postal;
  document.getElementById("regTelephone").innerHTML = telephone;
  document.getElementById("regEmail").innerHTML = email;
  document.getElementById("regEmail").href = `mailto:${email}`;
  document.getElementById("regDate").innerHTML = date;
}

function displayFinalData() {
  var main1 = document.getElementById("main1");
  var main2 = document.getElementById("main2");
  var main3 = document.getElementById("main3");
  var main4 = document.getElementById("main4");

  main1.style.display = "none";
  main2.style.display = "none";
  main3.style.display = "none";
  main4.style.display = "flex";

  document.getElementById("regName4").innerHTML =
    document.getElementById("regName").innerHTML;
  document.getElementById("regAddress4").innerHTML =
    document.getElementById("regAddress").innerHTML;
  document.getElementById("regPostal4").innerHTML =
    document.getElementById("regPostal").innerHTML;
  document.getElementById("regTelephone4").innerHTML =
    document.getElementById("regTelephone").innerHTML;
  document.getElementById("regEmail4").innerHTML =
    document.getElementById("regEmail").innerHTML;
  document.getElementById("regEmail4").href =
    document.getElementById("regEmail").href;
  document.getElementById("regDate4").innerHTML =
    document.getElementById("regDate").innerHTML;
  document.getElementById("qtyVegetables4").innerHTML =
    document.getElementById("qtyVegetables").value;
  document.getElementById("vegetablelabel4").innerHTML = "Vegetable Hampers";
  document.getElementById("qtyFruit4").innerHTML =
    document.getElementById("qtyFruit").value;
  document.getElementById("fruitlabel4").innerHTML = "Fruit Hampers";
  document.getElementById("qtyChicken4").innerHTML =
    document.getElementById("qtyChicken").value;
  document.getElementById("chickenlabel4").innerHTML = "Chickens";
  document.getElementById("qtyPork4").innerHTML =
    document.getElementById("qtyPork").value;
  document.getElementById("porklabel4").innerHTML = "Pork";
  document.getElementById("totallabel4").innerHTML = "Total order:";
  document.getElementById("totalPurchase4").innerHTML =
    document.getElementById("displaytotalamount").innerHTML;
}

function formatDate(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function newRegForm() {
  document.getElementById("myForm1").reset();
  const checkOut = document.getElementById("checkOut");
  const qtyVegetables = document.getElementById("qtyVegetables");
  const qtyFruit = document.getElementById("qtyFruit");
  const qtyChicken = document.getElementById("qtyChicken");
  const qtyPork = document.getElementById("qtyPork");
  checkOut.disabled = true;
  qtyVegetables.disabled = true;
  qtyFruit.disabled = true;
  qtyChicken.disabled = true;
  qtyPork.disabled = true;
  checkOut.disabled = true;

  var main1 = document.getElementById("main1");
  var main2 = document.getElementById("main2");
  var main3 = document.getElementById("main3");
  var main4 = document.getElementById("main4");

  main1.style.display = "flex";
  main2.style.display = "none";
  main3.style.display = "none";
  main4.style.display = "none";

  const totaltext = document.getElementById("totaltext");
  const displaytotalamount = document.getElementById("displaytotalamount");
  totaltext.innerHTML = "";
  displaytotalamount.innerHTML = "";
}

function shopItems() {
  document.getElementById("shoppingList").reset();
  var main1 = document.getElementById("main1");
  var main2 = document.getElementById("main2");
  var main3 = document.getElementById("main3");
  var main4 = document.getElementById("main4");

  main1.style.display = "none";
  main2.style.display = "none";
  main3.style.display = "flex";
  main4.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const qtyVegetables = document.getElementById("qtyVegetables");
  const vegetableHamper = document.getElementById("vegetableHamper");
  const qtyFruit = document.getElementById("qtyFruit");
  const fruitHamper = document.getElementById("fruitHamper");
  const qtyChicken = document.getElementById("qtyChicken");
  const chickenHamper = document.getElementById("chickenHamper");
  const qtyPork = document.getElementById("qtyPork");
  const porkHamper = document.getElementById("porkHamper");
  const checkOut = document.getElementById("checkOut");
  checkOut.disabled = true;
  qtyVegetables.disabled = true;
  qtyFruit.disabled = true;
  qtyChicken.disabled = true;
  qtyPork.disabled = true;

  // Toggles the quantity for the vegetable hamper.
  vegetableHamper.addEventListener("change", function () {
    if (this.checked) {
      qtyVegetables.disabled = false;
      checkOut.disabled = true;
    } else {
      qtyVegetables.value = "";
      qtyVegetables.disabled = true;
      checkOut.disabled = true;
    }
  });

  // Toggles the quantity for the fruit hamper.
  fruitHamper.addEventListener("change", function () {
    if (this.checked) {
      qtyFruit.disabled = false;
      checkOut.disabled = true;
    } else {
      qtyFruit.value = "";
      qtyFruit.disabled = true;
      checkOut.disabled = true;
    }
  });

  // Toggles the quantity for the chicken hamper.
  chickenHamper.addEventListener("change", function () {
    if (this.checked) {
      qtyChicken.disabled = false;
      checkOut.disabled = true;
    } else {
      qtyChicken.value = "";
      qtyChicken.disabled = true;
      checkOut.disabled = true;
    }
  });

  // Toggles the quantity for the pork hamper.
  porkHamper.addEventListener("change", function () {
    if (this.checked) {
      qtyPork.disabled = false;
      checkOut.disabled = true;
    } else {
      qtyPork.value = "";
      qtyPork.disabled = true;
      checkOut.disabled = true;
    }
  });
});

function purchase() {
  console.log("Hello from Purchase");
  var main1 = document.getElementById("main1");
  var main2 = document.getElementById("main2");
  var main3 = document.getElementById("main3");
  var main4 = document.getElementById("main4");
  const checkOut = document.getElementById("checkOut");
  checkOut.disabled = false;
  main1.style.display = "none";
  main2.style.display = "none";
  main3.style.display = "flex";
  main4.style.display = "none";

  const priceOfVegetables = 30.0;
  const priceOfFruit = 20.0;
  const priceOfChicken = 7.0;
  const priceOfPork = 5.0;

  qtyVegetables = checkIfNan(
    parseFloat(document.getElementById("qtyVegetables").value),
  );
  qtyFruit = checkIfNan(parseFloat(document.getElementById("qtyFruit").value));
  qtyChicken = checkIfNan(
    parseFloat(document.getElementById("qtyChicken").value),
  );
  qtyPork = checkIfNan(parseFloat(document.getElementById("qtyPork").value));

  console.log(qtyVegetables);
  var totalAmount =
    priceOfVegetables * qtyVegetables +
    priceOfFruit * qtyFruit +
    priceOfChicken * qtyChicken +
    priceOfPork * qtyPork;

  const totaltext = document.getElementById("totaltext");
  const displaytotalamount = document.getElementById("displaytotalamount");

  if (totalAmount !== 0) {
    totaltext.innerHTML = "Total Price";
    displaytotalamount.innerHTML = "$" + totalAmount.toFixed(2);
    checkOut.disabled = false;
  } else {
    totaltext.innerHTML = "";
    displaytotalamount.innerHTML = "";
    checkOut.disabled = true;
  }
}

function checkIfNan(number) {
  let myNumber = number;
  myNumber = isNaN(myNumber) ? 0 : myNumber;
  return myNumber;
}
