const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "testdb";       
const collectionName = "customers";

async function run() {
    const client = new MongoClient(url);

    try {

        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);


        const customers = await collection.find({}).toArray();
        console.log("\nAll Customers:");
        console.log(customers);

        const deleteResult = await collection.deleteOne({ name: "Amit" });

        if (deleteResult.deletedCount === 1) {
            console.log("\nCustomer deleted successfully");
        } else {
            console.log("\nNo matching customer found to delete");
        }

        const updatedCustomers = await collection.find({}).toArray();
        console.log("\nCustomers after deletion:");
        console.log(updatedCustomers);

    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        await client.close();
        console.log("\nConnection closed");
    }
}

run();
