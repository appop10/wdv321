/** 
	Make up for missing the team project
	Author: Abby Poplawski
	Created: 3/23/2023
**/
// create objects
let student_1 = {
	student_id: 332443,
	student_gpa: 3.6,
	student_courses: ["WDV101","WDV131","WDV105"]
}
let student_2 = {
	student_id: 545467,
	student_gpa: 2.7,
	student_courses: ["WDV101","WDV131","WDV105","WDV221","WDV205"]
}
let student_3 = {
	student_id: 128574,
	student_gpa: 3.4,
	student_courses: ["WDV101","WDV131","WDV105","WDV221","WDV205","WDV341"]
}

// convert each student to JSON
let student_1_JSON = JSON.stringify(student_1);
let student_2_JSON = JSON.stringify(student_2);
let student_3_JSON = JSON.stringify(student_3);

// put in local storage
localStorage.setItem("student_1", student_1_JSON);
localStorage.setItem("student_2", student_2_JSON);
localStorage.setItem("student_3", student_3_JSON);