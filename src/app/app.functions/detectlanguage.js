const hubspot = require('@hubspot/api-client');
var axios = require('axios');

exports.main = async (event, callback) => {
  if (event.body && event.body.comment && event.body.contact_id) {
    try {
      // call external API to match text field to most likely language
      var config = {
        method: 'post',
        url: 'https://www.viktor.mobi/_hcms/api/language/match',
        headers: {
          'Content-Type': 'application/json',
        },
        data: { text: event.body.comment }
      };
      var match = await axios(config)

      // update the preferred language field based on the result

      const hubspotClient = new hubspot.Client({
        accessToken: event.secrets["PRIVATE_APP_ACCESS_TOKEN"]
      });
      const ApiResponse = await hubspotClient.crm.contacts.basicApi.update(event.body.contact_id, {
        properties: {
          hs_language: match.data.language
        }
      });
    } catch (err) {
      console.error(err);
      throw err;
    }
    callback({
      statusCode: 200,
      body: JSON.stringify(process.env),
    });
  } else {
    callback({
      statusCode: 400,
      body: 'No comment and/or contact_id provided',
    });
  }
}
