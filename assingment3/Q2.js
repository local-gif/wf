const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "college";

async function insertStudents() {
    let client;

    try {
      
        client = new MongoClient(url);
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(dbName);
        const collection = db.collection("student");

        const students = [
            { name: "Amit", age: 21, course: "Computer Science" },
            { name: "Riya", age: 20, course: "Information Technology" },
            { name: "Rahul", age: 22, course: "Electronics" },
            { name: "Neha", age: 21, course: "Mechanical" },
            { name: "Karan", age: 23, course: "Civil" }
        ];

        const result = await collection.insertMany(students);

        console.log("Students inserted successfully");
        console.log(result);

    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        if (client) {
            await client.close();
        }
    }
}

insertStudents();
