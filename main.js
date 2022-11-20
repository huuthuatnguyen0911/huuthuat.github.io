// function test(arr, brr){
//     let arrTemp = [];

//     brr.forEach((n) => {
//         let index = arr.indexOf(n);
//         if(index > -1){
//             arr.splice(index, 1);
//         } else {
//             arrTemp.push(n);
//         }
//     });

//     return arrTemp;
// }

// console.log(test([1,2,3,4], [1,4,6,2,5,3]));

// const isOldEnough = (user) => {
//     return user?.age > 30 ?? 0;
// };
// console.log(isOldEnough({age:20}));

// var Ten, Tuoi;
// Ten = prompt("Nhap ten","");
// Tuoi = prompt("Nhap tuoi:",20);
// document.write("Chao ban: <B> " + Ten + "</B>");
// document.write("</BR>");
// document.write("Tuoi cua ban la:"+ Tuoi );


// let person = prompt("Mời bạn nhập tên của mình", "Harry Potter");
// let text;
// if (person == null || person == "") {
//   text = "Buồn quá, bạn không muốn nhập tên!";
// } else {
//   text = "Xin chào " + person + "!";
// }
// console.log(text);

// document.write("Tao Button va Text bang Script<BR>");
// document.write("<BR>");
// document.write("<input type=button name=welcome value = 'Welcome' ");
// document.write("onclick = 'alert('Welcome to JavaScript');' > ");
// document.write("<input type=text name=msg value='Welcome to'>");

// ((msg) => {
//     console.log("Message:", msg)
// })("Nguyen Huu Thuat")


// let i = 0;

// (function myArr() {
//     i++;
//     console.log(i);

//     if (i<10) {
//         myArr()
//     }
// })()


// const app = (function () {
//     //Private
//     const cars = [];

//     return {
//         get(index) {
//             return cars[index];
//         },
//         add(car){
//             cars.push(car)
//         },
//         edit(index, car) {
//             cars[index] = car
//         },
//         delete(index){
//             cars.splice(index, 1)
//         }
        
//     }
// })()

// function createLogger(namespace) {
//     function logger(message){
//         console.log(`[${namespace}] ${message}`)
//     }
//     return logger
// }

// const infoLogger = createLogger('Info')

// infoLogger("Bắt đàu gửi mail")  

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, Css',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    }
];
// Duyet qua phan tu mang
// courses.forEach(function(course, index) {
//     console.log(index, course)
// });

// Every: kiem tra tat ca cac phan tu co cung thoa man 1 dk ko, gia tri tra ve dang boolean
// var isFree = courses.every(function(course, index) {
//         return course.coin === 0;
//     });

//  console.log(isFree);
 
 
 /*Some: kiem tra chi can 1 phan tu dung thi se tra ve true */
//  var isFree = courses.some(function(course, index) {
//     return course.coin === 0;
// });

// console.log(isFree)

/**
 * Find: tìm và trả về chỉ 1 phần tử  trong mảng, nếu có sẽ trả về giá trị đó
 * nếu ko thì sẽ trả về undefined
 */

//  var course = courses.find(function(course, index) {
//     return course.name === 'Ruby1';
// });

// console.log(course);

/**
 * Filter: tìm kiếm theo danh sách, trả về 1 danh sách các giá trị thoả mãn
 * nếu ko có sẽ trả về undefined
 */
//  var listCourse = courses.filter(function(course, index) {
//     return course.name === 'Ruby';
// });

// console.log(listCourse);

// =====================================================================================

/**
 * Map: khi muốn thay đổi các element của 1 array
 */
// var newCourses = courses.map(function(course, index) {
//     //  console.log(course);
//     return `<h2>Khoá học: ${course.name}</h2>`

// });

// console.log(newCourses.join(' '));


// var totalCoin = 0;
// for (course of courses){
//     totalCoin += course.coin;
// }
// console.log(totalCoin);

// =================================
// var a = 2;
// {
//     let a =3;
//     console.log(a);
//     // let a =5;
// }
// console.log(a);


// 
// const addition = (a,b) => console.log(a+b);

// addition(9,54)
// console.log(addition(5,7));


// ======================
// const arr = [1,2,3,4,5];

// const number = arr.map((count) => 
//     {
//         return count + 's'
//     }
// );
// console.log(number);

// ===============================
// const test = (price, text = 0.7) => price + price * text;
// console.log(test(500))


// ======================================
const makeToast = (breadType, topping1, topping2) => {
    return `I had ${breadType} toast with ${topping1} and ${topping2}`
}

const tesst1 = ["thuat","huyen","quynh"];
console.log(makeToast(...tesst1));


const defaults = { avatar: "placeholder.jpg", active: false };
const userData = { username: "foo", avatar: "bar.jpg" };

console.log({ created: "2017-12-31", ...defaults, ...userData });
// {created: "2017-12-31", avatar: "bar.jpg", active: false, username: "foo"}



// =========================


function logger({q,b,...rest}){
    console.log(q);
    console.log(b);
    console.log(rest);
}

logger({
    name: "Nguyen Huu Thuat",
    class: "20SE3",
    lover: "Pham My Huyen"
})

// ==========================================
function logger1([a,b,c, ...rest]){
    console.log(a);
    console.log(b);
    console.log(rest);
}

logger1([1,2,3,4,5,6,7]);

// ==============================================
var arr = ["JS", "RJ","CSS","HTML"]

function thuat(...rest) {
    for (var i = 0; i< rest.length;i++){
        console.log(rest[i]);
    }
}

thuat(...arr)



// ========================================
class Course11{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    getName(){
        return this.name;
    }
}

const hi = new Course11("JS", 12000);

console.log(hi.getName());