

// first part
// Create function which receives 2 params, compares them and sends alert
// with text ‘a > b’, ‘a<b’, ‘a==b’’ or ‘a===b’.
function first_part() {
    let a = prompt("Input first var for compare");
    let b = prompt("Input second var for compare");
    function result(a, b) {
        if ((typeof (+a) == "number") && (typeof (+b) == "number") && !isNaN(a) && !isNaN(b)) {
            a = +a;
            b = +b;
            if (a > b) {
                alert("a > b");
            } else if (a < b) {
                alert("a < b");
            } else {
                alert("a == b")
            }
        } else if (a === b) {
            alert("a === b");
        } else if (a == b) {
            alert("a == b");
        } else {
            alert("shit happens (in the life)");
        }
    }
    result(a, b);
}

// second part
// Create function which reads a string from prompt and prints to console
// ‘TRUE’ if it is a number and contains ‘0’ in the end.
// Try to call it from the button onclick event.

function second_part(){
    let testString = prompt("Input random string, if it will be a number and last character will be zero, you may see 'true' in the console");
    const lastSymbol = testString.slice(-1);
    if ((typeof +testString == "number")
        & (!isNaN(+testString))
        && (+lastSymbol === 0)){
        console.log("TRUE");
    }
}


//third part
// Create a button, which shows alert with message n+1 with each click.
// First click should show 1, the second 2, then 3, etc...

let thirdIterator = 0;
function third_part(){
    thirdIterator++;
    alert(thirdIterator);
}

// fourth part
// Change the 3rd task and read initial value form prompt
// (1 is default if typed not number).

let initialValue;
// console.log(typeof initialValue);
function fourth_part(){
    if ((typeof initialValue) == "undefined"){
        let a = prompt("input initial value");
        a = +a;
        if (!isNaN(a)){
            initialValue =  a;
        }
        else {
            initialValue = 1;
        }
    }
    initialValue++;
    console.log(initialValue);
}