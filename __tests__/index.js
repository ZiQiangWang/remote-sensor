/*
 * @description:
 * @author: wangziqiang.carl@bytedance.com
 * @since: 2019-11-01 17:44:13
 */
import sensor from '../index';
test('remote available', done => {
  sensor('https://www.baidu.com', function(res) {
    expect(res).toBe(true);
    done();
  });
});
test('remote inavailable', done => {
  sensor('https://baidu.com1', function(res) {
    expect(res).toBe(false);
    done();
  });
});
