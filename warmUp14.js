/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

//implement a way to link days with stock peices (Done)

var maxProfit = function(ArrOfprices) {

var BuyingStock;
var sellingStock;
var profit ;
var copyOfArrOfprices  = ArrOfprices;

 return {
	BuyingStock: BuyingStock ,
	SellingStock :sellingStock,
 	buy: buy,
 	sell: sell,
 	profit: profit
 		};
}
var sell = function(day) {
	sellingStock = copyOfArrOfprices[day]
		if(BuyingStock < day){
			return 'you are losing money';
		}
this.profit =  	this.BuyingStock - sellingStock;
return 'Your tottal profit is ' + this.profit;
}

var buy = function 	(day) {
	BuyingStock = copyOfArrOfprices[day];
	this.BuyingStock = BuyingStock;
	copyOfArrOfprices= copyOfArrOfprices.slice(day)
}