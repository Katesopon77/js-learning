// const x = 0;
// var y = 0;
// let z = 0;

// //กรุ๊ปประเภทที่ 1 number string boolean
// var a;
// a = 1;
// a = "boy";
// a = true;
// let b;
// b = a;
// b = false;

// //--------------------------------------//

// //กรุ๊ปประเภทที่ 2 object, function
// var c;
// c = [];
// c = function() {

// };

// c = {}; // เฉพาะ  json ชนิดเดียวที่จะทำให้ไม่ copy
// var d;
// d = c;

// //--------------------------------------// จบการประกาศตัวแปร ประเภทตัวแปรและ assign

// // if else
// //operator == ให้ใช้ 2 ตัวเสมอเพื่อเจอ bug ได้ง่ายเพื่อแก้ไขได้ทัน
// var a = 10;
// var b = 20;
// if(a == b) {
//     console.log(1)
// } else if (b >= a){
//     console.log(2)
// } else {
//     console.log(3)
// }

// //if else แบบใหม่
// a == b ? console.log(1) : b == a ? console.log(2) : '';

// // loop
// for (var d = 0; d < 10; d++) {
//     console.log(d)
// }

// // function() {

// // }
// function sum (a,b) {
//     if (typeof(a) !== "number" || typeof(b) !== "number") {
//         console.log("กรุณาใส่ค่าเป็นตัวเลข")
//         return "กรุณาใส่ค่าเป็นตัวเลข"
//     }
//     let total_sum = Number(a) + Number(b);
//     return total_sum;
// }
// let m = sum(20,'dadasda');
// console.log(m)

// //recursive ปกติ
// function tofifty (x) {
//     if (typeof(x) !== "number") {
//         return x;
//     }
//     if (x > 50 ) {
//         tofifty(x-1)
//     } else if (x < 50){
//         tofifty(x+1)
//     } else {
//         return x;
//     }
// }
// console.log(tofifty(500))

// // recursive callback
// function tofifty (x, callback) {
//     if (typeof(x) !== "number") {
//         callback(x);
//     }

//     if (x > 50 ) {
//         tofifty(x-1,callback);
//     } else if (x < 50) {
//         tofifty(x+1,callback);
//     } else {
//         callback(x);
//     }
// }

// function value(this_x) {
//     console.log(this_x)
// }
// tofifty(500,value)

//-ห้ามใช้ JSON
//-โจทย์ ทำ Function Clean Data โดยการนำ ARRAY เริ่มต้นมาทำการการทำ Clean ให้ได้ผลลัพท์ตามด้านล่าง
//-** ทุกๆการกระทำให้ใช้ Function
//- ให้เลือกใช้ ระหว่าง Loop (ทำทีละตัว) หรือ forEach (ทำพร้อมๆกัน)(Array เท่านั้น)
//- โดยการ Clean Data จะต้องทำการแยก กลุ่ม (ARRAY) ว่าเป็น text(ตัวอักษรเท่านั้น) หรือ number(ตัวเลขเท่านั้น) แล้วทำการเพิ่มเข้าสู่ ARRAY ที่กำหนดไว้ให้
//- บาง element ใน data array นั้น มีตัวแปร ที่มีทั้ง "ตัวเลข และ ตัวอักษร" ในนั้น ให้ทำการ แยกมันออกมาด้วย

//- ระบบการ Clean Data สามารถทำได้สูงสุด 2 รายการต่อ 2 วินาที หากเกินให้ console.log("กำลังรออยู่...") (Recursive Only)
//- ในการ Clean Data แต่ละครั้ง มีโอกาส สำเร็จเพียง 50% ถ้าไม่สำเร็จให้ข้าม แล้วรอทำใหม่..
//- เมื่อจบทั้งหมด และ การันตรี ได้ว่าสำเร็จทั้งหมด ให้ console.log ข้อมูลตามด้านล่างออกมา
//- ** พยายามใช้ทุกเทคนิคให้ครบ ใช้ตัวแปรที่ชื่อซ้ำกันให้ชิน (ชื่อตัวแปรที่บังคับต้องมี data ,item ,count)
//- *** โจทย์นี้เน้นเรื่อง function และการ looping , callback , recursive
//- **** ตัวแปร/function ของโจทย์ห้ามถูกเปลี่ยนแปลง

var data = [
  0,
  "0",
  "ADsadA",
  4,
  234,
  "daad",
  "bdf4kg",
  "asdk3",
  "432",
  "234",
  "fsdkfTTfkb",
  4266,
  2,
  4,
  1,
  "ads3f",
  "Sfhkv",
  "dhyj3",
  "s5",
  "allg",
];
var item = data[5];
var count = 4141;
let arrNum = [];
let arrStr = [];

function isSuccess() {
  let random_boolean = Math.random() < 0.5;
  return random_boolean;
}

function checkType(item) {
  if (Number(item) || Number(item) == 0) {
    return "number";
  } else {
    return "text";
  }
}

function pushArr(item, arr) {
  arr.push(item);
}

function includeNum(item) {
  /// ฟังค์ชั่นใที่โยนมามีตัวเลขไหม ?
  // เริ่มไล่นับทีละตัวจากซ้ายไปขวาให้ให้เช็คว่าเป็นตัวเลขไหม โดยการแปลงค่า item เป็นตัวเลข
  // ถ้าเป็นตัวเลขให้บอกว่า 'มีตัวเลข' true
  // ถ้าไม่มีให้บอกว่า 'ไม่มี' false
  if (Number(item)) {
    return true;
  } else {
    return false;
  }
}

/// ฟังค์ชั่นเช็คจำนวนตัวเลขทั้งหมด
// นำของข้างใน arrNum มาเช็คจำนวนทั้งหมดของตัวเลข
// ให้ตัวเลขที่งหมด

///ฟั่งค์ชั่นเช็คตัวเลขที่ซ้ำกัน
// ใน item มีตัวเลขที่ซ้ำกันไหม?
// เริ่มไล่นับที่ล่ะตัวจากซ้ายไปขวาของ arrNum ให้เช็คว่าตัวเลข 0-9 มีตัวเลขที่ซ้ำกันไหม ?
// ถ้ามีตัวเลขที่ซ้ำกันให้คืนค่าจำนวนของตัวเลขแต่ล่ะตัวที่ซ้ำกัน

//ฟั่งค์ชั่นเช็คตัวอักษรที่ซ้ำกัน
// ใน item มีตัวอักษรที่ซ้ำกันไหม ?
// เริ่มไล่นนับที่ล่ะตัวจากซ้ายไปขวาของ arrStr ให้เช็คว่า A-Z มีตัวอักษรที่ซ้ำกันไหม ?
// ถ้ามีตัวอักษรที่ซ้ำกันให้คืนค่าจำนวนของตัวอักษรแต่ล่ะตัวที่ซ้ำกัน

/// ฟังค์ชั่น sumNum ผลรวมตัวเลข
// นำของข้างใน arrNum แต่ล่ะตัวมาบวกกัน
// ให้ผลรวมทั้งหมด

/// ฟังค์ชั่นเช็คตัวอักษรทั้งหมด
// นำของข้างใน arrStr มาเช็คจำนวนทั้งหมดของตัวอักษร

/// ฟังค์ชั่น ตัวอักษรต่อกัน
// นำของข้างใน arrStr ออกมาปริ้นเรียงกัน

function main(skgokdohktgsjfnkfkdorr) {
  let data = skgokdohktgsjfnkfkdorr;
  data.forEach(function (item) {
    includeNum(item);
    if (checkType(item) == "number") {
      pushArr(Number(item), arrNum);
    } else if (checkType(item) == "text") {
      for (let i = 0; i < item.length; i++) {
        if (includeNum(item[i]) == true) {
          pushArr(Number(item[i]), arrNum);
        }
      }
      pushArr(item, arrStr);
    }
  });
  console.log(arrNum)
  console.log(arrStr)
}

main(data);
//- ตัวอย่างผลลัพท์
//- ตัวเลขทั้งหมด : 146 ตัวเลข
//- ตัวเลขซ้ำกัน : 1 (14 ครั้ง) 2 (24 ครั้ง)
//- ผลรวมเป็น : 234324234
//- ตัวอักษรทั้งหมด : 4324234 ตัวอักษร
//- ตัวอักษรที่ซ้ำกันมี : A (14 ครั้ง) B (24 ครั้ง)
//- ประโยครวม : AA BBC CD E DAFDSF AASC QWDSC ASDWSDC เอาตัวอักษรมาต่อกัน
//- ["ADASD","asdasWd","dads","asdaa","asdas"]
//- [1,3213,33,212,3,23,2,123]
//- count(เริ่มต้น) = 4141
//- item(เริ่มต้น) = asdk3
