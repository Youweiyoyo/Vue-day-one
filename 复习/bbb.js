// 按需导入
import { one } from "./aaa.js";
console.log(one);
// 默认导入
import m, { Three as s1 } from "./aaa.js";
console.log(m);
console.log(s1);
