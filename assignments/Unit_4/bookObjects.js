/*
    JavaScript book Object file for Unit 4
    Author: Abby Poplawski
    Created: 2/11/2023
*/

// first book object
let jsJavaBook = {
    isbn: "0-596-00016-2",
    title: "Java and XML",
    price: 39.95,
    publisher: "O'Reilly & Associates",
    author: {
        firstName: "Brett",
        lastName: "McLaughlin",
        price: 22.00
    },
    copyright: 2000,
    comments: "Update required"
}

// second book object
let jsVBBook = {
    isbn: "1-861003-32-3",
    title: "Professional Visual Basic 6 XML",
    price: 49.99,
    publisher: "Wrox Press",
    authors: [
        {
            firstName: "James",
            lastName: "Britt"
        },
        {
            firstName: "Tuen",
            lastName: "Duynstee"
        }
    ],
    copyright: 2000,
    comments: "Outdated text. Switch to C#"
}

// array of book objects
let jsTextbooks = [jsJavaBook, jsVBBook];