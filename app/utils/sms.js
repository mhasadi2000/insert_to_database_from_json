const fetch = (...args) => 
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const axios = require('axios').default;

const username = 'user1';
const password = 'z9Dc6zKtMxFIC5OvWM952GOQ';


module.exports = {
  async sendSmsAsanak(receptor, template) {

    const response = await axios.post('https://sms.samt.scaland.net/api/sms/send', {receiver: receptor,message:template }, { auth: {
      username: username,
      password: password
    }})

    console.log(response);
    return { response };
  },
};
