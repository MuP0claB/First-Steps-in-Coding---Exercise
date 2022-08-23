function suppliesForSchool (input) {
 const penPackages = Number (input[0]);
 const markerPackages = Number (input[1]);
 const detergentLiter = Number (input[2]);
 const discountPercent = Number (input[3]);

const penPrice = 5.80 
const markerPrice = 7.20
const detergentPrice = 1.20

const totalPrice = penPackages * penPrice +
 markerPackages * markerPrice + detergentLiter * detergentPrice;
const totalPriceDiscount = totalPrice * discountPercent / 100;
const neededMoney = totalPrice - totalPriceDiscount;
console.log(neededMoney);
}

suppliesForSchool(["2","3","4","25"]);
