/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     if(!s) return true;

    var stack = [];

    var left = ['(','[','{'];
    var right = [')',']','}'];
    var match = {
        ')':'(',
        ']':'[',
        '}':'{'
    }

    for(var i in s){
        if(left.indexOf(s[i]) > -1){
            stack.push(s[i]);  
        } 

        if(right.indexOf(s[i]) > -1){
            var stackStr = stack.pop();  
            if(match[s[i]] != stackStr) {
                return false;
            }
        } 
    }

    return stack.length == 0;
};