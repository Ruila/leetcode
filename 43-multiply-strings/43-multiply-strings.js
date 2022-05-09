/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 == "0" || num2 =="0"){
        return "0"
    }
    let result = Array(num1.length + num2.length).fill(0);
    let number1 =num1.split("").reverse();
    let number2 = num2.split("").reverse();
    for(let i=0 ; i<number1.length; i++) {
        for(let j = 0; j<number2.length; j++){
            result[i+j] += number1[i]*number2[j]
        }
    }
    for(let i=0; i<result.length;i++){
        if(result[i]>=10){
            result[i+1] += Math.floor(result[i]/10)
            result[i] = Math.floor(result[i]%10)
        }
    }
    for(let i=result.length-1 ; i>=0; i--){
        if(result[i]==0){
            result.splice(i, 1)
        } else {
            break;
        }
    }
    return result.reverse().join("")
};