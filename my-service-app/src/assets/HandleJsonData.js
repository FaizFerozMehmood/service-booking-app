import jsondata from "./Services.json";

console.log(jsondata);

export function getDATA() {
  return jsondata;
}

export function getCategories() {
  const data = getDATA();
  const mapedData = [...new Set(data.map(m => m.category))];

  
  return mapedData
}
 const categoryData = getCategories()
 console.log(categoryData)