/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = 99999999
    let ans = 0
    for(let i=0 ; i<prices.length; i++) {
        if(prices[i]<min) {
            min = prices[i]
        }
        
        const result = prices[i] - min
        if(ans < result) {
            ans =result
        }
    }
    return ans
};