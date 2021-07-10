module.exports = function check(str, bracketsConfig) {
    let bracketsList = bracketsConfig.map((item) => 
      item.join(""))
    
    let i = 0;
    let empty = ""
      while (i < bracketsList.length) {
        if (str.includes(bracketsList[i])) {
          while (str.includes(bracketsList[i])) {
            str =  str.replace(bracketsList[i],empty);
      } i = 0;
        } else {
          i ++
        }
        
    } return str.length ===0;
}
