/* 
    JavaScript document for Assignment 5-1 Cookie Handling
    Author: Abby Poplawski
    Created: 2/15/2023
*/
let cookieDate = new Date();
let todayDate = (cookieDate.getMonth() + 1) + "-" + cookieDate.getDate() + "-" + cookieDate.getFullYear();
let userInfo = {
    userName: "",
    userPassword: "",
    displayExpireDate: function() {
        cookieDate.setTime(cookieDate.getTime() + (7*24*60*60*1000));
        let expireDate = cookieDate.toUTCString();
        return expireDate;
    }
}

// other functions
function gatherInfo() {
    userInfo.userName = prompt("Please enter a User Name:");
    userInfo.userPassword = prompt("Please enter a User Password");
}

// functions that modify cookies
function updateCounter() {
    let counter = getCookie("counter");

    counter++;
    document.cookie = "counter=" + counter + "; path=/";
}

function displayCounter() {
    let counter = getCookie("counter");

    if (counter == "") {
        counter = "";
    }

    return counter.toString();
}

function displayDate() {
    let accessDate = getCookie("accessDate");

    if (accessDate == "") {
        accessDate = ""
    }

    return accessDate;
}

// generic cookie functions
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function checkCookie(inName) {
    let cookieName = getCookie(inName);
    let isCookie = false;

    if (cookieName != "") {
        isCookie = true;
    } 

    return isCookie;
}

function deleteCookie(cname) {
    let today = new Date();
    let yesterday = 24 * 60 * 60 * 1000;
    today.setTime(today.getTime() - yesterday);
    document.cookie = cname + "=''; expires=" + today.toUTCString() + "; path=/";
}

// onload functions for each page
function homePageLoad() {
    // update the PERSISTENT cookie
    updateCounter();

    // create the SESSION and PERSISTENT cookies
    if (!checkCookie("accessDate")) {
        setCookie("accessDate", todayDate, 5);
    }

    if (!checkCookie("counter")) {
        setCookie("counter", 0, 5);
    }

    // create cookie button
    document.querySelector("#createCookie").onclick = function() {
        if (!getCookie("userInfo")) {
            gatherInfo();
            let userInfoJSON = JSON.stringify(userInfo);

            setCookie("userInfo", userInfoJSON, 7);
        } else {
            alert("A user cookie has already been created. You can delete all cookies to start again.")
        }
    }
}

function aboutPageLoad() {
    // display SESSION cookie
    document.querySelector("#accessDate").innerText = displayDate();

    // display the PERSISTENT cookie
    document.querySelector("#visitCount").innerText = displayCounter();

    // destroy cookie button
    document.querySelector("#destroyCookies").onclick = function() {
        deleteCookie("accessDate");
        deleteCookie("counter");
        deleteCookie("userInfo");
         console.log(document.cookie);

        // clear out the displayed information
        document.querySelector("#accessDate").innerText = displayDate();

        document.querySelector("#visitCount").innerText = displayCounter();

        document.querySelector("#cookieExpiration").innerHTML = "";
    }

    // authentication button
    document.querySelector("#authenticateUser").onclick = function() {
        let savedInfo = JSON.parse(getCookie("userInfo"));
        gatherInfo();

        if (savedInfo.userName === userInfo.userName) {
            if (savedInfo.userPassword === userInfo.userPassword) {
                document.querySelector("#cookieExpiration").innerHTML = userInfo.displayExpireDate();
            } else {
                document.querySelector("#cookieExpiration").innerHTML = "Wrong Password"
            }
        } else {
            document.querySelector("#cookieExpiration").innerHTML = "Wrong User Name"
        }
    }
}