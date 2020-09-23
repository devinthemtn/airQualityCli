const axios = require("axios").default;

async function getData() {
  return axios.get(
    "http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=59865&distance=50&API_KEY=2C4804CE-3667-4B35-8D78-A175206A29DA"
  );
}

(async () => {
  let data = await getData();
  console.log("Air Quality: ", data.data[0].AQI);
  console.log(
    `Category: ${data.data[0].Category.Number} ${data.data[0].Category.Name}`
  );
})();
