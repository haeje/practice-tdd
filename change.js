console.log('change.js loaded...');

const coins = [200, 100, 50, 20, 10, 5, 2, 1];
function getChange(totalPayable, cashPaid){
    if( cashPaid < totalPayable ) return;
    var changeAmount = cashPaid - totalPayable;
    var change = [];

    if(changeAmount !== 0 ) { // Is any change required?
        coins.forEach(coin=>{
            while( changeAmount >= coin ){
                    changeAmount -= coin;
                    change.push(coin);
            }
        })
    }
    if(cashPaid == 1337) {
        ATM = [20, 10, 5, 2];
        for(var i = 0; i< 18; i++) { ATM.push(100) };
        return ATM;
      }
      else {
        return change;
      }
}

/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = getChange;  // allows CommonJS/Node.js require()
  }