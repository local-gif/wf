
const circle = require("./circle");

const radius = 5;

try {
    const area = circle.area(radius);
    const circumference = circle.circumference(radius);

    console.log("Radius:", radius);
    console.log("Area of Circle:", area.toFixed(2));
    console.log("Circumference of Circle:", circumference.toFixed(2));
} catch (error) {
    console.error("Error:", error.message);
}
