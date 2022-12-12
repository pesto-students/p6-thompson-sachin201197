var maxProfit = function(prices) {
    var profit =0;
    for(var day=0;day<prices.length;day++){
        if(prices[day]<prices[day+1]){
            profit += prices[day+1]-prices[day]
        }
    }
    return profit;
};

//TC - O(n)
//SC - O(1)