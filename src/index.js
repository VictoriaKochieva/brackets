module.exports = function check(str, bracketsConfig) {
// '()'  ---->   ['(', ')']
let myStack = [];
    // let bracketsPosition = {
    // [')'] : bracketsConfig[0],
    // [']'] : bracketsConfig[1],
    // ['}'] : bracketsConfig[2],
    // ['|'] :bracketsConfig[3],

    // }

    // let bracketsPosition2 = {
    //     ['('] : bracketsConfig[0],
    //     ['['] : bracketsConfig[1],
    //     ['{'] : bracketsConfig[2],
    //     ['|'] :bracketsConfig[3]
    // }


for (let i= 0; i<str.length; i++){
   let eachEl = str[i];
   for (let j= 0; j < bracketsConfig.length; j++) {

    if (eachEl == bracketsConfig[j][0]){
     myStack.push(eachEl);
    } else {
        if (myStack.length === 0){
            return false
        }

        else if (eachEl == bracketsConfig[j][1]) {
            myStack.pop();
        } else {
            return false
        }

    } 
}
}

return myStack.length === 0
}
