# BIT3360 – ADVANCED DATABASES

## NoSQL Database Group Assignment

### Project Title: Campus Student Records

### Group Members

The following students contributed to the development of the Campus Student Records NoSQL prototype.

| No. | Full Name | Student Number |
|---|---|---|
| 1 | Sarafina Nyimbiri | 2410116 |
| 2 | Faides Sakala | 2410042 |
| 3 | Wana Chiwaya | 2421052 |
| 4 | Monde Lubasi | 2421056 |

### 1. Project Overview

Campus Student Records is a simple student-record management prototype developed using MongoDB. The system stores and manages student information in a structured collection of documents.

The prototype demonstrates how a NoSQL database can be used to organise, retrieve, add, update and delete student records.

### 2. Problem Statement

Managing student information manually can be time-consuming and may lead to misplaced records, duplicated information and difficulties when searching for student details.

This prototype addresses these challenges by providing a central database where student records can be stored and accessed efficiently.

### 3. Tools and Technologies Used

- MongoDB – NoSQL database management system
- MongoDB Compass – graphical interface for managing the database
- MongoDB Shell – used to execute database commands
- JSON – format used to store and export sample student data

### 4. Database Structure

The database is named `University_Student_Records`.

It contains a collection named `Students`.

Each student is represented by a document containing the following fields:

- `studentNumber` – unique student identifier
- `firstName` – student's first name
- `lastName` – student's surname
- `language` – student's recorded language
- `programme` – academic programme
- `studyYear` – current year of study
- `email` – student's email address
- `phoneNumber` – student's contact number

The prototype uses fictional sample student records for demonstration purposes.

### 5. Operations Demonstrated

The prototype demonstrates the following database operations:

- Create – adding new student records
- Read – retrieving student information
- Update – modifying existing student details
- Delete – removing student records

Additional operations include searching, sorting, projection, counting records and creating a unique index to prevent duplicate student numbers.

### 6. Files Included

- `mongodb_commands.js` – contains the MongoDB commands used in the practical demonstration
- `students.json` – contains the exported sample student records
- `README.md` – provides an overview and instructions for the prototype
- `Screenshots folder` – contains screenshots showing the database and successful operations

### 7. How to Use the Prototype

1. Install MongoDB and MongoDB Compass.
2. Open MongoDB Compass and connect to the local MongoDB server.
3. Import the sample data from `students.json` into the `Students` collection in the `University_Student_Records` database.
4. Open the MongoDB Shell.
5. Refer to `mongodb_commands.js` to execute the database operations.
6. Use the commands to add, retrieve, update, delete and search student records.

The sample-data insertion section should only be executed when setting up a fresh database.

### 8. Conclusion

The Campus Student Records prototype demonstrates the practical use of MongoDB for managing student information. It shows how a document-based NoSQL database can provide flexible data storage and support common database operations.

The project provides a simple example of how NoSQL technology can be applied to a student-record management system.