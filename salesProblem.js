// calculate the highest sales profit
function topProduct(productProfitArray) {
    return Math.max(...productProfitArray);
  }
  
  // calculate the lowest sales profit
  function bottomProduct(productProfitArray) {
    return Math.min(...productProfitArray);
  }
  
  // calculate the profit nearest to zero
  function zeroProfitProduct(productProfitArray) {
    return productProfitArray.reduce((closest, current) => {
      return Math.abs(current) < Math.abs(closest) ? current : closest;
    });
  }
  
  // declare the sales profit
  const productProfitArray = [-100,-80,-60,-40,-20,0,20,40,60];
  
  // Calculate the results using the functions
  const highestProfit = topProduct(productProfitArray);
  const lowestProfit = bottomProduct(productProfitArray);
  const nearestToZero = zeroProfitProduct(productProfitArray);
  
  // Print the results
  console.log(`Highest Sales Profit: ${highestProfit}`);
  console.log(`Lowest Sales Profit: ${lowestProfit}`);
  console.log(`Profit Nearest to Zero: ${nearestToZero}`);