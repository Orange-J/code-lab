const axios = require('axios');

axios({
  method: 'get',
  url: 'http://www.baidu.com',
  // data: {

  // },
  // headers: {

  // },
}).then(res => {
  console.log(res.data);
}).catch(e => {
  console.error(e);
});