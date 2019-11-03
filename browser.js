/*
 * @description:
 * @author: 814120507@qq.com
 * @since: 2019-11-01 17:42:29
 */
export default function Sensor(url, callback) {
  if (typeof callback !== 'function') {
    throw new Error('callback must be function type');
  }
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 3) {
      if (xhr.status >= 200 && xhr.status < 400) {
        callback(true);
      } else {
        callback(false);
      }
      xhr.abort();
    }
  };
  xhr.send();
}
