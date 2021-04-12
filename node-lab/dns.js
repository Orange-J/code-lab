const dns = require('dns');

dns.lookup('www.baidu.com', {
  all: true,
}, (err, addressList) => {
  if (err) {
    console.log('DNS解析出错:', err);
    return;
  }

  for (const { address, family } of addressList) {
    console.log(`addr: ${address}, family: ${family}`);
  }
});