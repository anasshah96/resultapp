
let studentsdata = [
    {

        name: "Ali",
        FatherName: "Waseem",
        age: 18,
        class: 9,
        contact: "03123456701",
        obtMarks: 283,
    },
    {

        name: "Ahsan",
        FatherName: "Hamza",
        age: 19,
        class: 9,
        contact: "03123456701",
        obtMarks: 267
    },
    {

        name: "Umer",
        FatherName: "Amir",
        age: 20,
        class: 9,
        contact: "03123456702",
        obtMarks: 251
    },
    {

        name: "Imran",
        FatherName: "Bilal",
        age: 25,
        class: 9,
        contact: "03123456703",
        obtMarks: 249
    },
    {

        name: "Qasim",
        FatherName: "Iqbal",
        age: 18,
        class: 9,
        contact: "03123456704",
        obtMarks: 233
    },
    {

        name: "Usama",
        FatherName: "Ikram",
        age: 18,
        class: 9,
        contact: "03123456705",
        obtMarks: 227
    },
    {

        name: "Usman",
        FatherName: "Faris",
        age: 18,
        class: 9,
        contact: "03123456706",
        obtMarks: 219
    },
    {

        name: "Waqas",
        FatherName: "Faizan",
        age: 18,
        class: 9,
        contact: "03123456707",
        obtMarks: 209
    },
    {

        name: "Jameel",
        FatherName: "Sadiq",
        age: 18,
        class: 9,
        contact: "03123456709",
        obtMarks: 140
    },
    {

        name: "Farhan",
        FatherName: "Akram",
        age: 18,
        class: 9,
        contact: "03123456710",
        obtMarks: 124
    }
]

// add Roll Number, Percentage, and Grade
for (i = 0; i < studentsdata.length; i++) {
    studentsdata[i].rollNum = "65820" + i;
    studentsdata[i].percentage = (100 / 300 * studentsdata[i].obtMarks).toFixed(2);
    if (studentsdata[i].percentage <= 100 && studentsdata[i].percentage >= 90) {
        let a = studentsdata[i].grade = "A+";
    }
    else if (studentsdata[i].percentage < 90 && studentsdata[i].percentage >= 80) {
        studentsdata[i].grade = "A";
    }
    else if (studentsdata[i].percentage < 80 && studentsdata[i].percentage >= 70) {
        studentsdata[i].grade = "B";
    }
    else if (studentsdata[i].percentage < 70 && studentsdata[i].percentage >= 60) {
        studentsdata[i].grade = "C";
    }
    else if (studentsdata[i].percentage < 60 && studentsdata[i].percentage >= 50) {
        studentsdata[i].grade = "D";
    }
    else {
        studentsdata[i].grade = "F";
    }

}

// To check and add Student status Whether Pass or Fail
for (j = 0; j < studentsdata.length; j++) {
    if (studentsdata[j].percentage >= 50) {
        studentsdata[j].status = "Pass"
    }
    else {
        studentsdata[j].status = "Fail"
    }
}




let userInp = document.getElementById("userInp");
let rollNUm = document.getElementById("rollNUm");


// Student Bio Data 
let name = document.getElementById("name");
let fName = document.getElementById("fName");
let age = document.getElementById("age");
let sClass = document.getElementById("sClass");
let contactNum = document.getElementById("contactNum");


// Student Result
let resultTxt = document.getElementById("resultTxt");
let totalMarks = document.getElementById("totalMarks");
let obtMarks = document.getElementById("obtMarks");
let percentage = document.getElementById("percentage");
let grade = document.getElementById("grade");
let status = document.getElementById("status");






function check() {
    for (k = 0; k < studentsdata.length; k++) {
        if (userInp.value === studentsdata[k].rollNum) {
            rollNUm.innerHTML = studentsdata[k].rollNum;
            name.innerHTML = studentsdata[k].name;
            fName.innerHTML = studentsdata[k].FatherName;
            age.innerHTML = studentsdata[k].age;
            sClass.innerHTML = studentsdata[k].class;
            contactNum.innerHTML = studentsdata[k].contact;

            resultTxt.innerHTML = studentsdata[k].name + "'s Score Card";
            totalMarks.innerHTML = 300;
            obtMarks.innerHTML = studentsdata[k].obtMarks;
            percentage.innerHTML = studentsdata[k].percentage + "%";
            grade.innerHTML = studentsdata[k].grade;
            status.innerHTML = studentsdata[k].status;



            let bioData = document.getElementById("bioData")
            bioData.classList.remove("emptyHidden")

            let resultDiv = document.getElementById("resultDiv")
            resultDiv.classList.remove("emptyHidden")

            let rollNumDiv = document.getElementById("rollNumDiv")
            rollNumDiv.classList.remove("emptyHidden")

        }



    }
    return k
}

function previous() {
    let n = rollNUm.innerHTML


    if (n >= 658201) {
        rollNUm.innerHTML = n - 1
        for (x = 0; x < studentsdata.length; x++) {
            if (rollNUm.innerHTML === studentsdata[x].rollNum) {

                name.innerHTML = studentsdata[x].name;
                fName.innerHTML = studentsdata[x].FatherName;
                age.innerHTML = studentsdata[x].age;
                sClass.innerHTML = studentsdata[x].class;
                contactNum.innerHTML = studentsdata[x].contact;
                resultTxt.innerHTML = studentsdata[x].name + "'s Score Card";

                totalMarks.innerHTML = 300;
                obtMarks.innerHTML = studentsdata[x].obtMarks;
                percentage.innerHTML = studentsdata[x].percentage + "%";
                grade.innerHTML = studentsdata[x].grade;
                status.innerHTML = studentsdata[x].status;

            }

        }
    }

    return rollNUm.innerHTML

}

function next() {
    let l = rollNUm.innerHTML
    let m = parseInt(l)

    if ( m < 658209) {

        rollNUm.innerHTML = m + 1
        for (y = 0; y < studentsdata.length; y++) {
            if (rollNUm.innerHTML === studentsdata[y].rollNum) {

                name.innerHTML = studentsdata[y].name;
                fName.innerHTML = studentsdata[y].FatherName;
                age.innerHTML = studentsdata[y].age;
                sClass.innerHTML = studentsdata[y].class;
                contactNum.innerHTML = studentsdata[y].contact;
                resultTxt.innerHTML = studentsdata[y].name + "'s Score Card";

                totalMarks.innerHTML = 300;
                obtMarks.innerHTML = studentsdata[y].obtMarks;
                percentage.innerHTML = studentsdata[y].percentage + "%";
                grade.innerHTML = studentsdata[y].grade;
                status.innerHTML = studentsdata[y].status;

            }

        }
    }

    return rollNUm.innerHTML
}

