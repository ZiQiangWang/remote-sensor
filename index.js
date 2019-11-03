/*
 * @description:
 * @author: 814120507@qq.com
 * @since: 2019-11-01 17:42:35
 */

const http = require('http');
const https = require('https');

module.exports = function Sensor(url, callback) {
  if (typeof callback !== 'function') {
    throw new Error('callback must be function type');
  }

  const isHttp = url.indexOf('http://') === 0;
  const isHttps = url.indexOf('https://') === 0;

  if (!(isHttp || isHttps)) {
    throw new Error('protocol of url must be specified, http/https');
  }
  const request = isHttp ? http : https;

  const client = request
    .get(url, function(res) {
      const { statusCode } = res;
      if (statusCode >= 200 && statusCode < 400) {
        callback(true);
      } else {
        callback(false);
      }

      res.on('data', function() {
        client.abort();
      });
      res.on('error', function() {
        callback(false);
      });
    })
    .on('error', function() {
      callback(false);
    })
    .on('timeout', function() {
      callback(false);
    });
};
