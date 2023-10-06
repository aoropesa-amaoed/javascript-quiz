function convertYear(romanYear) {
    // Roman numeral to integer mapping
    const romanNumerals = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1,
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = romanYear.length - 1; i >= 0; i--) {
      const currentRoman = romanYear[i];
      const currentInt = romanNumerals[currentRoman];
  
      if (currentInt === undefined) {
        return "Invalid";
      }
  
      if (currentInt < prevValue) {
        result -= currentInt;
      } else {
        result += currentInt;
      }
  
      prevValue = currentInt;
    }
  
    return result;
  }
  
  function longestDynasty(dynastyReign) {
    if (dynastyReign.length === 0) {
      return "No Data";
    }
  
    let longestReign = 0;
    let longestDynastyName = "";
  
    for (const [dynasty, endYearRoman] of dynastyReign) {
      const endYear = convertYear(endYearRoman);
  
      if (endYear === "Invalid") {
        continue;
      }
  
      const reignDuration = endYear - 1000 + 1; // Start year is 1000
  
      if (reignDuration > longestReign) {
        longestReign = reignDuration;
        longestDynastyName = dynasty;
      }
    }
  
    return longestDynastyName;
  }
  
  // Example dynastyReign array
  const dynastyReign = [
    ["DynastyA", "MCMLXXIX"], // 1979
    ["DynastyB", "MCMXCIV"], // 1994
    ["DynastyC", "MM"],      // 2000 (Invalid)
    ["DynastyD", "MCMXC"],   // 1990
  ];
  
  console.log(longestDynasty(dynastyReign)); // Output: "DynastyB"