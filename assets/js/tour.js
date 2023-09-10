function changeImage(imagePath) {
    var currentImage = document.getElementById("current-image");
    currentImage.src = imagePath;
  }
  function changeValue(operation) {
    var numberInput = document.getElementById('number_people');
    var value = parseInt(numberInput.value);

    if (operation === '-') {
      if (value > 1) {
        value--;
      }
    } else if (operation === '+') {
      value++;
    }

    numberInput.value = value;
    calculateBill();
  }

  function calculateBill() {
    var priceInput = document.getElementById('price');
    var numberInput = document.getElementById('number_people');
    var billInput = document.getElementById('bill');

    var price = parseInt(priceInput.value);
    var numberPeople = parseInt(numberInput.value);

    var bill = price * numberPeople;
    billInput.value = bill;
  }