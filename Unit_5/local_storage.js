/* 
    JavaScript document for Assignment 6-1 Demonstrate Local Storage
    Author: Abby Poplawski
    Created: 2/18/2023
*/
let javaObject = {
    name: "",
    purpose: "",
    id: ""
}

// other functions
function promptUser() {
    javaObject.name = prompt("Please enter a name for the Obejct:");
    javaObject.purpose = prompt("Please enter a purpose for the Object:");
    javaObject.id = prompt("Please enter an id for the Object:");
}

// on load functions for each page
function hpLoad() {
    document.querySelector("#createStorageObject").onclick = function() {
        promptUser();

        let javaObejctJSON = JSON.stringify(javaObject);

        localStorage.setItem("obejctToStorage", javaObejctJSON);
        
        document.querySelector("#sentMessage").innerHTML = "Obejct created and sent!";
    }
}

function abLoad() {
    document.querySelector("#displayLSObject").onclick = function() {
        let foundObject = localStorage.getItem("obejctToStorage");
        
        document.querySelector("#localStorageInfo").innerHTML = foundObject;
    }

    document.querySelector("#changeObjectInfo").onclick = function() {
        promptUser();

        let javaObejctJSON = JSON.stringify(javaObject);

        localStorage.setItem("obejctToStorage", javaObejctJSON);
        
        document.querySelector("#confirmMessage").innerHTML = "Changes have been applied!";
    }
}