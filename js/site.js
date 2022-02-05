// Get values from the page
// controller function
function getValues(){
    let firstValue = document.getElementById("firstValue").value;
    let secondValue = document.getElementById("secondValue").value;

    // attempt to parse into integers
    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);

    if (Number.isInteger(firstValue) && Number.isInteger(secondValue)) {
        // call generateNumbers
        let numbers = fizzBuzzC(firstValue, secondValue);
        // call displayNumbers
        displayNumbers(numbers);
    } else {
        
        alert("You must enter integers");
        }
}

// generate numbers from 1 to 100
// logic functions
function fizzBuzz(firstValue, secondValue){

    let numbers = [];

    // get all numbers from start to end
    // compare them to first value and second value
    for (let i = 1; i <= 100; i++) {

        if (i % firstValue == 0 && i % secondValue == 0) {

            numbers.push("FIZZBUZZ")
            
        } else if (i % firstValue == 0){
            
            numbers.push("FIZZ")

        } else if (i % secondValue == 0){

            numbers.push("BUZZ")
        } else{

            numbers.push(i);
        }
        
        
    }

    return numbers;
}

function fizzBuzzB(firstValue, secondValue){

    let returnArray = []
    let Fizz = false;
    let Buzz = false;

    for (let i=1; i <= 100; i++){
        Fizz = i % firstValue == 0;
        Buzz = i % secondValue == 0;

        switch (true){
            case Fizz && Buzz: {
                returnArray.push("FIZZBUZZ");
                break;
            }
            case Fizz: {
                returnArray.push("FIZZ");
                break;
            }
            case Buzz: {
                returnArray.push("BUZZ");
                break;
            }
            default: {
                returnArray.push(i);
                break;
            }
        }
    }
    return returnArray;
}

function fizzBuzzC(firstValue, secondValue){

    let returnArray = []

    for (let i=1; i <= 100; i++){
        let value = ((i % firstValue == 0 ? 'FIZZ' : '') + (i % secondValue == 0 ? 'BUZZ': '') || i);
        returnArray.push(value);

    }

    return returnArray;
}


// display or view functions
function displayNumbers(numbers){

    // get the table body element from the page
    let tableBody = document.getElementById("results");

    // get the template
    let templateRows = document.getElementById("fbTemplate");

    // clear the table
    tableBody.innerHTML = "";


    for (let index = 0; index < numbers.length; index += 5) {

        let tableRow = document.importNode(templateRows.content, true);

        // grab just the tds to put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(numbers[index]);
        rowCols[0].textContent = numbers[index];

        rowCols[1].classList.add(numbers[index + 1]);
        rowCols[1].textContent = numbers[index + 1];

        rowCols[2].classList.add(numbers[index + 2]);
        rowCols[2].textContent = numbers[index + 2];

        rowCols[3].classList.add(numbers[index + 3]);
        rowCols[3].textContent = numbers[index + 3];

        rowCols[4].classList.add(numbers[index + 4]);
        rowCols[4].textContent = numbers[index + 4];

        tableBody.appendChild(tableRow);

    }

}