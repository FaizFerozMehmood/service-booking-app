import jsondata from "./Services.json";

console.log(jsondata);

export function getDATA() {
  return jsondata;
}

export function getCardData() {
  const data = getDATA();
  console.log(data);
  const mydata = [
    { image: data.image },
    {tiitle :data}

  ];
}
