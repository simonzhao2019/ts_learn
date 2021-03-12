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

/* 任意值 any*/
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7; 
//eg):编译会报错，定义了类型之后不允许改变


let myFavoriteNumber2: any = 'seven';
myFavoriteNumber2 = 7;
//eg):编译不会报错

//未声明类型的变量，会被识别为任意值类型
 let person
  person='xiaoming'
  person=7
/* 类型推论*/ 
//eg)如果没有进行类型定义，ts会按照初次给变量赋值的类型进行推论

let name1 = 'xiaoming'
name 1

/* 联合类型*/
//eg1)联合类型表示的是取值可以为多种类型中的一种，比如我们下面的定义
let age:String|Number=18

age='19'

//我们在上面中就规定了age可以为String或者是Number

//eg1)当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法： 
function some(something:String|Number):String {
  return something.length
}

/* 类型断言*/

interface Sum{
  name:String,
  run():void
}
interface Plus {
  name: String,
  age:Number,
  swim(): void
}

function getName(animal: Sum | Plus) {
  return animal.name;
}

//参考上面的联合类型，并不会报错，但是如果我们按照下面的方式进行访问就会报错interface Cat {


function isFish(animal: Plus | Sum) {
    if (typeof (<Plus>animal).swim === 'function') {
        return true;
    }
    return false;
}

//这里swim并不是共有的，所以会报错,我们可以使用类型断言
interface Foo {
  bar: number;
  bas: string;
}

const foo = <Foo>{} ;
foo.bar = 123;
foo.bas = 'hello';
foo.age=18


  (<any>window).foo = 1;

