const dns = require('dns');

dns.lookup('www.baidu.com', (err, address, family) => {
  if (err) {
    console.log('DNS解析出错:', err);
    return;
  }
  console.log(`address: ${address}, family: ${family}`);
});