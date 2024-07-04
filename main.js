// Let's learn more about callbacks
// This is a simplified version of a callback library
// I'm applying what I'm studying in the PLABC course

// a callback library should keep track of current events 
let callbacks = []

// This is the the interface to our library
// f is a function
function onKeyEvent(f) {
    callbacks.push(f)
}

// if a key is pressed, the function loops over callbacks
// and call each function with the ASCII code of the key
window.onkeydown = function(e) {
    for (let i = 0; i < callbacks.length; i++) {
        let k = e.keyCode
        let f = callbacks[i]
        f(k)
    }
}

// Examples
let timesPressed = 0
onKeyEvent(_ => timesPressed++)

console.log("press A to see how many keys were pressed");
const SPACE_ASCII = 32
const A_ASCII = 65
onKeyEvent(e => {
    if (e == SPACE_ASCII) {
        console.log("Space key was pressed");
    }
})
onKeyEvent(e => {
    if (e == A_ASCII) {
        console.log(`${timesPressed} keys were pressed`);
    }
})

