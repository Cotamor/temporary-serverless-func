require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_APIKEY })
  .base("appmUJQZUIyppcl30")
  .table("products");
console.log(airtable.log, airtable.config);

exports.handler = async (event, context, cb) => {
  console.log(event);
  const { id } = event.queryStringParameters;

  if (id) {
    try {
      const product = await airtable.retrieve(id);
      console.log("id: ", product);
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id: ${id}`,
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: `Server Error`,
      };
    }
  }
  return {
    statusCode: 400,
    body: "Please provide product id.",
  };
};
