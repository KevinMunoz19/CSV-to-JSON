const fs = require("fs");
const path = require("path");
const csv = require("csvtojson");
const csvFilePath = path.join(__dirname, "customer-data.csv");

async function convertCsvToJson() {
  try {
    const jsonArray = await csv().fromFile(csvFilePath);
    fs.writeFileSync(
      path.join(__dirname, "customer-data.json"),
      JSON.stringify(jsonArray)
    );
  } catch (error) {
    console.log("error ", error);
  }
}

convertCsvToJson();
