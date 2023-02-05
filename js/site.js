//pString == user input string
//results == where string results will go


// Entry Point
function getValues() {
    // Get values from the page
    let inputString = document.getElementById('pString').value;

    // Call logic function to test if palindrome
    let palResults = checkForPalindrome(inputString);
    // Call display function to report to user.
    displayResults(palResults, inputString);
}


// Logic Function
// Determine if string was a palindrome or not.
function checkForPalindrome(inputString) {
    // Take string, remove punctuation
    let stringRegEx = /[a-z]/ig;

    inputString = inputString.match(stringRegEx);
    let revInputString = [];

    // Reverse string, store it
    for (i = inputString.length - 1; i >= 0; i--) {
        revInputString.push(inputString[i]);
    }
    // Compare

    if (revInputString.toString().toLowerCase() === inputString.toString().toLowerCase()) {
        return true;
    } else {
        return false;
    }

    // Return true or false. 


}

// Display function
// Insert into the page html
function displayResults(palResults, inputString) {

    if (palResults == true) {
        let stringRegEx = /[a-z]/ig;
        inputString = inputString.match(stringRegEx);
        inputString = inputString.toString().replaceAll(',', "").toLowerCase();
        document.getElementById('results').textContent = `"Wahoo! ${inputString} is a palindrome!"`;

    } else {
        document.getElementById('results').textContent = "It is NOT a palindrome!";
    }

}
