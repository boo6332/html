// function time() {
//     let now = new Date();

//     document.write("현재 시각은 " + now.toLocaleString());
// }
// setInterval(time(), 1000);



// let now = new Date();
// const days = ["일", "월", "화", "수", "목", "금", "토"];
// console.log(days.length);

// document.write("현재 년도는 " + now.getFullYear(), "<br>");
// document.write("현재 월은 " + (now.getMonth() + 1), "<br>");
// document.write("현재 날짜는 " + now.getDate(), "<br>");
// document.write("현재 요일은 " + now.getDay(), "<br>");
// document.write("현재 요일은 " + days[5] + "요일", "<br>");
// document.write("현재 요일은 " + days[now.getDay()] + "요일", "<br>");
// document.write("현재 시간은 " + now.getHours(), "<br>");
// document.write("현재 분은 " + now.getMinutes(), "<br>");
// document.write("현재 초는 " + now.getSeconds(), "<br>");



let nums = [1, 2, 3];
let chars = ["a", "b", "c", "d"];

let numsChars = nums.concat(chars);
console.log(numsChars);

let charsNums = chars.concat(nums);
console.log(charsNums);

console.log(nums.join());
console.log(chars.join("/"));

nums.push(4, 5);
console.log(nums);

nums.unshift(-1, 0);
console.log(nums);

nums.pop();
console.log(nums);

nums.shift();
console.log(nums);

nums.splice(3, 1, 6);
console.log(nums);

let result1 = nums.slice(2, 4);
console.log(result1);
console.log(nums);