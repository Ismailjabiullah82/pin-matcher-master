function getPin() {
    let pin = generatePin();
    let pinString = pin + "";
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log(pin);
        return getPin();
    };
};

function generatePin() {
    let random = Math.round(Math.random() * 10000);
    return random;
};
document.getElementById('generate-pin').addEventListener('click', function () {
    let pin = getPin();
    // console.log(pin);

    let displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});
document.getElementById('calculator').addEventListener('click', function (event) {
    let number = event.target.innerText;
    let typedNumberField = document.getElementById('typed-numbers');
    let previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if(number === '<'){
            let digits = previousTypedNumber.split('');
            digits.pop();
            let remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        let newTypeNumber = previousTypedNumber + number;
        typedNumberField.value = newTypeNumber;
    }
});

document.getElementById('verify-pin').addEventListener('click', function () {
    // console.log('verify pin clicked');
    let displayPinField = document.getElementById('display-pin');
    let currentPin = displayPinField.value;

    let typedNumberField = document.getElementById('typed-numbers');
    let typeNumber = typedNumberField.value;

    let pinSuccessMessage = document.getElementById('pin-success');
    let pinUnsuccessMessage = document.getElementById('pin-unsuccess');

    if (typeNumber === currentPin) {
        pinSuccessMessage.style.display = 'block'
        pinUnsuccessMessage.style.display = 'none'

    }
    else {
        // console.log('incorrect pin')
        pinUnsuccessMessage.style.display = 'block'
        pinSuccessMessage.style.display = 'none'

    }
})