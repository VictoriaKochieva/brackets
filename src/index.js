module.exports = function check(str, bracketsConfig) {

let myStack = [];

for (let i= 0; i<str.length; i++){
   let eachEl = str[i];

    if( bracketsConfig.includes(eachEl)){
     myStack.push(eachEl);
    } else {
        if (myStack.length === 0){
            return false
        }


        let top = myStack[myStack.length-1];

        if (bracketsConfig[eachEl] === top) {
            myStack.pop();
        } else  {
            return false
        }
    }
}

return myStack.length === 0
}
