 * BIT3360 – ADVANCED DATABASES
 * NoSQL Database Group Assignment
 *
 * Project Title: Campus Student Records
 * Database: University_Student_Records
 * Collection: Students
 * Database Technology: MongoDB
 *
 * Description:
 * This script demonstrates the implementation and management
 * of a student-record database using MongoDB. It includes
 * sample data insertion, data retrieval, modification,
 * deletion, searching, sorting, projection, record counting,
 * and the enforcement of unique student identifiers.
 *
 * Note:
 * The sample data is fictional and is used for academic
 * demonstration purposes only.


// 1. DATABASE SELECTION

// Select the database used by the student-record system.
// MongoDB creates the database when data is first stored.

use("University_Student_Records");


// 2. SAMPLE DATA INITIALISATION

// Insert six fictional student records into the Students
// collection. This section is intended for initial setup
// and should only be executed once on a fresh database.

db.Students.insertMany([
  {
    studentNumber: "ZUT001",
    firstName: "Chileshe",
    lastName: "Mwila",
    language: "Bemba",
    programme: "Information Technology",
    studyYear: 3,
    email: "chileshemwila@gmail.com",
    phoneNumber: "0970000000"
  },
  {
    studentNumber: "ZUT002",
    firstName: "Kabamba",
    lastName: "Kashikoto",
    language: "Kaonde",
    programme: "Computer Science",
    studyYear: 1,
    email: "kabambakashikoto@gmail.com",
    phoneNumber: "0970000001"
  },
  {
    studentNumber: "ZUT003",
    firstName: "Mutinta",
    lastName: "Kapenda",
    language: "Lunda",
    programme: "Information Technology",
    studyYear: 3,
    email: "mutintakapenda@gmail.com",
    phoneNumber: "0970000002"
  },
  {
    studentNumber: "ZUT004",
    firstName: "Thandiwe",
    lastName: "Banda",
    language: "Nyanja",
    programme: "Business Information Systems",
    studyYear: 2,
    email: "thandiwebanda@gmail.com",
    phoneNumber: "0970000003"
  },
  {
    studentNumber: "ZUT005",
    firstName: "Mwelwa",
    lastName: "Mweemba",
    language: "Tonga",
    programme: "Computer Science",
    studyYear: 1,
    email: "mwelwamweemba@gmail.com",
    phoneNumber: "0970000004"
  },
  {
    studentNumber: "ZUT006",
    firstName: "Nalukui",
    lastName: "Sinyinda",
    language: "Lozi",
    programme: "Information Technology",
    studyYear: 3,
    email: "nalukuisinyinda@gmail.com",
    phoneNumber: "0970000005"
  }
]);


// 3. DATA INTEGRITY: UNIQUE STUDENT IDENTIFIERS

// Create a unique ascending index on studentNumber.
// This prevents multiple records from being assigned
// the same student number.

db.Students.createIndex(
  { studentNumber: 1 },
  { unique: true }
);

// 4. READ OPERATION: RETRIEVING STUDENT INFORMATION

// Retrieve all student records from the collection.

db.Students.find();


// Retrieve an individual student using the student number
// as the search criterion.

db.Students.findOne({
  studentNumber: "ZUT001"
});


// 5. CREATE OPERATION: ADDING A STUDENT RECORD

// Add a temporary student record to demonstrate the
// insertion of new data into the collection.

db.Students.insertOne({
  studentNumber: "ZUT007",
  firstName: "Lubasi",
  lastName: "Mubita",
  language: "Lozi",
  programme: "Information Technology",
  studyYear: 1,
  email: "lubasimubita@gmail.com",
  phoneNumber: "0970000006"
});


// Confirm that the newly inserted record is stored.

db.Students.findOne({
  studentNumber: "ZUT007"
});


// 6. UPDATE OPERATION: MODIFYING EXISTING INFORMATION

// Update the studyYear field for student ZUT001.
// The $set operator modifies the specified field while
// preserving the remaining information in the document.

db.Students.updateOne(
  { studentNumber: "ZUT001" },
  { $set: { studyYear: 3 } }
);


// Retrieve the record to verify the modification.

db.Students.findOne({
  studentNumber: "ZUT001"
});

// 7. DELETE OPERATION: REMOVING A STUDENT RECORD

// Remove the temporary student record used in the
// insertion demonstration.

db.Students.deleteOne({
  studentNumber: "ZUT007"
});


// Verify that the specified record no longer exists.

db.Students.findOne({
  studentNumber: "ZUT007"
});


// 8. QUERY OPERATIONS: FILTERING STUDENT RECORDS

// Retrieve students whose recorded language is Bemba.

db.Students.find({
  language: "Bemba"
});


// Retrieve students enrolled in Information Technology.

db.Students.find({
  programme: "Information Technology"
});


// 9. SORTING: ORGANISING STUDENT RECORDS

// Display student records in ascending order
// according to their student numbers.

db.Students.find().sort({
  studentNumber: 1
});


// 10. PROJECTION: SELECTING SPECIFIC DOCUMENT FIELDS

// Display only the student number, first name, last name,
// and programme. The _id field is excluded from the output.

db.Students.find(
  {},
  {
    _id: 0,
    studentNumber: 1,
    firstName: 1,
    lastName: 1,
    programme: 1
  }
).sort({
  studentNumber: 1
});


// 11. AGGREGATE INFORMATION: COUNTING STUDENT RECORDS

// Return the total number of documents stored
// in the Students collection.

db.Students.countDocuments();
