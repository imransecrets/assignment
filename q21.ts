// They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.

let stundentsData : {nameStudent:string; rollNo : number;  age : Number; examPass? : boolean; }[]=[

    {
    nameStudent:"Asif Imran",
    rollNo : 2525, 
    age : 45,
    examPass : true,
     },
     {
        nameStudent:"Noor",
        rollNo : 2526, 
        age : 18,
        examPass : true,
    },
    {
        nameStudent:"Shan",
        rollNo : 2527, 
        age : 23,
        examPass : false,
    },
]
// let loop to call each object and use if else for exampass object
for (let student of stundentsData){
    console.log (`Student Name: ${student.nameStudent}`);
    console.log (`Student Roll No: ${student.rollNo}`);
    console.log (`Student Age: ${student.age}`);
        if (student.examPass == true) 
             {console.log ("Student Exam Passed: Pass")} else
             {console.log ("Student Exam Passed: Fail")}
}