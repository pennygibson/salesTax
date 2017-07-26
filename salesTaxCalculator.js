var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var results = {};
  for (var i = 0; i < companySalesData.length; i++ ){

    var company = companySalesData[i];

    if(results[company.name] ){
        results[company.name]["totalSales"] += totalSales(company.sales);
        results[company.name]["totalTaxes"] += totalSales(company.sales) * salesTaxRates[company.province]
    } else {
      results[company.name] = {
        totalSales: totalSales(company.sales),
        totalTaxes: totalSales(company.sales) * salesTaxRates[company.province]
      }
    }

  }
  return results;
}

function totalSales(salesArray) {
  var total = 0;
  for (var j = 0; j < salesArray.length; j++){
    total += salesArray[j];
  }
  return total;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/