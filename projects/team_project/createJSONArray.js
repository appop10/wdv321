// JavaScript Document
// create objects
let student_4 = {
	student_id: 332443,
	student_gpa: 3.6,
	student_courses: ["WDV101","WDV131","WDV105"]
}
let student_5 = {
	student_id: 545467,
	student_gpa: 2.7,
	student_courses: ["WDV101","WDV131","WDV105","WDV221","WDV205"]
}
let student_6 = {
	student_id: 128574,
	student_gpa: 3.4,
	student_courses: ["WDV101","WDV131","WDV105","WDV221","WDV205","WDV341"]
}

// put student objects in an array
let student_objects = [student_4, student_5, student_6];
// convert to JSON
let student_objects_JSON = JSON.stringify(student_objects);
// put in local storage
localStorage.setItem("student_information", student_objects_JSON);