//นักเรียน/คน
//นักเรียน/ชั่วโมง
//คำนวณค่าเรียนในแต่ละรอบ คนละเท่าไร
//รวมเท่าไร
//แต่ล่ะคนจ่ายมาเท่าไร
//ทอนเท่าไร
//สรุปว่ามีรายรับต่อวัน
//มีนักเรียนมาเรียนกี่คนต่อวัน


let data_student = [
    {
        student_pay:[300,1000,1500,2000],
        hour:1,
    },
    {
        student_pay:[500,3000,4000,1000],
        hour:3,
    },
]

//นักเรียนแต่ละคนจ่ายมาเท่าไหร่
function calc_payment (student_amount,hour) {
    // คำนนวณค่าเรียนที่ต้องจ่ายต่อคน
    return calc_hour_price(student_amount) * hour;
}


//ค่าเรียนแต่ละ ชม / คน
function calc_hour_price(student_amount) {
    if(student_amount == 1) {
        return 500;
    } else if (student_amount == 2) {
        return 450;
    } else if (student_amount == 3) {
        return 400;
    } else if (student_amount == 4) {
        return 350;
    } else {
        return 300;
    }
}

const day = {
    all_income: 0,
    all_student:0,
    all_round : [],
};

function main(data_student) {
    const student_amount = data_student.student_pay.length;
    const hour = data_student.hour;
    const course_price = calc_payment(student_amount,hour); //คำนวณค่าเรียนแต่ละคนต่อ ชม
    const sum_price_student = course_price * student_amount;
    const student_cost = data_student.student_pay;
    let changed = [];
    for(let i = 0; i < student_cost.length; i++) {
        changed.push(student_cost[i] - course_price);
    }

    const round_today = {
        คนล่ะเท่าไหร่ : course_price,
        จ่ายมาเท่าไหร่ : student_cost,
        ทอนเท่าไหร่ : changed,
    }

    day.all_round.push(round_today);
    day.all_income += sum_price_student;
    day.all_student += student_amount;
    for (let j = 0; j < day.all_round.length; j++) {
        console.log(day.all_round[j])
        
    }
}

main(data_student[1]);
main(data_student[0]);
console.log(day)