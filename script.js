
function filterByCity(targetCity, listingCityArray) {
  let cities = [];
  for (let i = 0; i < listingCityArray.length; i++) {
    if (listingCityArray[i].toLowerCase() == targetCity.toLowerCase()){
      cities.push(i);
    }
  }
  return cities;
}
filterByCityTest()

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  let price = [];
  for (let i = 0; i < listingPriceArray.length; i++) {
    if ((listingPriceArray[i] >= minPrice) && (listingPriceArray[i] <= maxPrice)){
      price.push(i);
    }  
  }
  return price;
}

filterByPriceTest()

function filterByTypes(targetTypes, listingTypeArray) {
  let type = [];
  for (let i = 0; i < listingTypeArray.length; i++) {
    if (listingTypeArray[i] == targetTypes){
      type.push(i);
    }
  }
  return type;
}

filterByTypesTest();