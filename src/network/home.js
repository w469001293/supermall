import {request} from './request';

// 首页多个请求的封装, 耦合度会非常高
// 可对单独一个请求进行修改, 不影响其他请求
export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
  });
}

// 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['why', 'aaa']
// }
//
// test()
//
// 再调用, 再创建, 结束再释放
// test()
