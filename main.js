// program to remove all the extra spaces from a paragraph/string
document.getElementById('inputSubmit').addEventListener('click', function(e){
    e.preventDefault();
    const printNewString = removeExtraSpace();
    document.getElementById("removedString").innerHTML = printNewString;

});

function removeExtraSpace(){
    const newString = document.getElementById('userInput').value.replace(/\s+/g,' ').trim();
    return newString;
}

// question 2 
document.getElementById('numberSubmit').addEventListener('click', function(event){
    event.preventDefault();
    const printNumber = numberCompareController();
    document.getElementById("numberedTitle").innerHTML = printNumber;
});

function numberCompareController(){
    const newNumber = document.getElementById('numberInput').value;

    if(newNumber % 3 == 0 &&  newNumber % 7 == 0){
        return 'World ABC';
    }else if(newNumber % 7 === 0){
        return 'World';
    }else if(newNumber % 3 === 0){
        return 'ABC';
    }else{
        return 'Number not divisible by 7 or 3'
    }
}
