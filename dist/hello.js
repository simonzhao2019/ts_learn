var liMing = {
    name: 'liming'
};
/* 函数
 */
function sum(a, b) {
    return a + b;
}
console.log(sum(2));
/* 剩余参数 */
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse('hello'));
