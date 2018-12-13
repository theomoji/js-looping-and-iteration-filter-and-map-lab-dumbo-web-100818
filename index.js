function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(driver => driver.revenue > revenue )
}

// function driverNamesWithRevenueOver(drivers, revenue){
   
//     return drivers.filter(function (driver){
//         return driver.revenue > revenue
//     }).map(driver => {
//         return driver.name
//     })
// }

function driverNamesWithRevenueOver(drivers, revenue){
   return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch (drivers, matcher) {
    return drivers.filter(function (driver) {
      let attribute = false;
  
      for (const key in matcher) {
        attribute = driver[key] === matcher[key];
      }
  
      return attribute;
    });
  }

  function exactMatchToList (drivers, attribute) {
    return exactMatch(drivers, attribute)
      .map(function (driver) {
        return driver.name;
      });
  }


