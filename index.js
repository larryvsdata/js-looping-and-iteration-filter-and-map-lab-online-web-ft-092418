function driversWithRevenueOver(drivers , rev){
  return drivers.filter(function (driver) {return driver.revenue> rev ; }) ;
}

function driverNamesWithRevenueOver(drivers , rev){
  return driversWithRevenueOver(drivers , rev).map(function (driver) {return driver.name ; }); ;
}

function exactMatch(drivers , myDriver){
  return drivers.filter(driver => driver.name === myDriver.name || driver.revenue === myDriver.revenue) ;
}

function exactMatchToList(drivers , myDriver){
  return exactMatch(drivers , myDriver).map(driver => driver.name) ;
}
