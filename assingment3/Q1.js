const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "testdb";

console.log("Program started");

async function run() {
    try {
        const client = new MongoClient(url, {
            serverSelectionTimeoutMS: 5000 // IMPORTANT
        });

        await client.connect();
        console.log("MongoDB Connected");

        const db = client.db(dbName);
        const customers = db.collection("customers");

        const data = [
            { name: "Amit", age: 22 },
            { name: "Priya", age: 21 },
            { name: "Rahul", age: 23 },
            { name: "Neha", age: 20 },
            { name: "Karan", age: 24 }
        ];

        await customers.insertMany(data);
        console.log("5 records inserted");

        const result = await customers.find({}).toArray();
        console.log("Customer Records:");
        console.log(result);

        await client.close();
    } catch (err) {
        console.error("ERROR:", err.message);
    }
}

run();
