// circle.js

function validateRadius(radius) {
    if (typeof radius !== "number" || isNaN(radius)) {
        throw new Error("Radius must be a numeric value");
    }
    if (radius < 0) {
        throw new Error("Radius cannot be negative");
    }
}

function area(radius) {
    validateRadius(radius);
    return Math.PI * radius * radius;
}

function circumference(radius) {
    validateRadius(radius);
    return 2 * Math.PI * radius;
}

module.exports = {
    area,
    circumference
};
