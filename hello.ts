/* 接口 */
interface Person{
  name:string,
  age?:number
}
let liMing:Person={
  name:'liming'
}

/* 函数
 */
function sum(a:number,b?:number) :number{
  return a+b
}

console.log(sum(2))

/* 剩余参数 */
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}
console.log(reverse('hello'))

// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//   if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''));
//   } else if (typeof x === 'string') {
//     return x.split('').reverse().join('');
//   }
// }
// console.log(reverse(false))
