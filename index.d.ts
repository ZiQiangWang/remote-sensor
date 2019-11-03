/*
 * @description:
 * @author: wangziqiang.carl@bytedance.com
 * @since: 2019-10-28 22:54:22
 */

export type remoteSensor = (
  url: string,
  callback: (valid: boolean) => void
) => void;
