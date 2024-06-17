// var heading = document.querySelector('#heading');
// heading.onclick = function() {
//     heading.style.color = "red";
//     // alert("안녕하세요");
//     // confirm("정말 삭제하시겠습니까?")
//     // var reply = confirm("정말 삭제하시겠습니까?")
//     var reply = prompt("이름을 입력하세요");

//     // console.log(reply);
//     // document.write(reply)
//     document.write("<h1>저의 이름은 " + reply + " 만나서 반갑습니다.</h1>");
// };



// const date = new Date();
// const currentYear = date.getFullYear();
// // console.log(currentYear);

// // var currentYear = 2021;
// var birthYear;
// var age;

// birthYear = prompt ("태어난 연도를 입력하세요. (YYYY)", "");
// age = currentYear - birthYear + 1;
// document.write(currentYear + "년 현재<br>");
// document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "세입니다.");



// var userNumber = prompt("숫자를 입력하세요")

// if(userNumber === null) {
//     alert("입력이 취소되었습니다.");
// } else if(userNumber === "") {
//     alert("숫자를 입력해주세요.");
// } else if(userNumber % 3 === 0) {
//     document.write(userNumber + "는 3의 배수입니다.");
// } else {
//     document.write(userNumber + "는 3의 배수가 아닙니다.");
// }



// var userNumber = prompt("숫자를 입력하세요")

// if(userNumber === null) {
//     alert("입력이 취소되었습니다.");
// } else if(userNumber === "") {
//     alert("숫자를 입력해주세요.");
// } else {
//     (userNumber % 3 === 0) ? document.write(userNumber + "는 3의 배수입니다.") : document.write(userNumber + "는 3의 배수가 아닙니다.");
// }



// var session = prompt("관심 세션의 숫자를 적어주세요. 1-마케팅, 2-개발, 3-디자인");

// switch(session) {
//     case "1":
//         document.write("<h1>마케팅 세션은 201호에서 오픈합니다.</h1>");
//         break;
//     case "2":
//         document.write("<h1>개발 세션은 202호에서 오픈합니다.</h1>");
//         break;
//     case "3":
//         document.write("<h1>다지안 세션은 203호에서 오픈합니다.</h1>");
//         break;
//     default:
//         alert("잘못 입력하셨습니다 \n 숫자를 입력해주세요.")
// }



// var memNum = prompt("입장객은 몇 명인가요?");
// var colNum = prompt("한 줄에 몇 명씩 앉습니까?");

// if(memNum % colNum === 0)
//     rowNum = parseInt(memNum / colNum);
// else
//     rowNum = parseInt(memNum / colNum) + 1;

// document.write("모두 " + rowNum + "개의 줄이 필요합니다.");



// let sum = 0;
// let num = prompt("숫자 입력");
// for (let i = 0; i <= num; i++) {
//     sum += i;
// }
// document.write("1에서 " + num + "까지 더한 결과값은 : " + sum);



// for (let i = 2; i <= 9; i++) {
//     document.write("<div class='dan'>");
//     document.write("<h2>" + i + "단</h2>");

//     for (let j = 2; j <= 9; j++) {
//         document.write(i  + " X " + j + " = " + i * j + "<br>");
//     }
//     document.write("</div>");
// }



// const memNum = prompt("몇명이 참가하나요?");
// const colNum = prompt("한 줄에 몇개를 ...");
// const rowNum = memNum / colNum;

// for(let r = 0; r < rowNum; r++) {
//     for(let c = 1; c <= colNum; c++) {
//         let seatNo = r * colNum + c;
//         if(seatNo > memNum) break;
//         document.write("좌석" + seatNo + " ");
//     }
//     document.write("<br>");
// }



// const memNum = prompt("몇명이 참가하나요?");
// const colNum = prompt("한 줄에 몇개를 ...");
// const rowNum = memNum / colNum;

// document.write("<div class='table'><h2>좌석배정표</h2><ul>")
// for(let r = 0; r < rowNum; r++) {
//     for(let c = 1; c <= colNum; c++) {
//         let seatNo = r * colNum + c;
//         if(seatNo > memNum) break;
//         document.write("<li>좌석" + seatNo + "</li>");
//     }
// }
// document.write("</ul></div>")



// const memNum = prompt("몇명이 참가하나요?", "16");
// const colNum = prompt("한 줄에 몇개를 ...", "6");
// const rowNum = memNum / colNum;
// const user = ["김유미", "김가영", "추호연", "박민수", "이다은", "서민경","하소영", "전보람", "옥찬미", "양연수", "배채정", "박주연", "김은솔", "전현정", "정다겸", "류강민", "", "",];

// document.write("<div class='table'><h2>좌석배정표</h2><table>");
// for(let r = 0; r < rowNum; r++) {
//     document.write("<tr>");
//     for(let c = 1; c <= colNum; c++) {
//         let seatNo = r * colNum + c - 1;

//         document.write("<td>" + user[seatNo] + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</th></table>")



const memNum = prompt("몇명이 참가하나요?", "16");
const colNum = prompt("한 줄에 몇개를 ...", "6");
const rowNum = memNum / colNum;
const user = ["김유미", "김가영", "추호연", "박민수", "이다은", "서민경","하소영", "전보람", "옥찬미", "양연수", "배채정", "박주연", "김은솔", "전현정", "정다겸", "류강민", "", "",];

document.write("<div class='table'><h2>좌석배정표</h2><table>");
for(let r = 0; r < rowNum; r++) {
    document.write("<tr>");
    for(let c = 1; c <= colNum; c++) {
        let seatNo = Math.floor(Math.random() * 17);

        document.write("<td>" + user[seatNo] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table></div>")

function 함수명(매개변수) {
    실행문;
}

함수명() / 함수명(매개변수);
