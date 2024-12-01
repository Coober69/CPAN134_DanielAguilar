//CPAN134 Assignment 2 Question 1
//Daniel Aguilar
function calculateArea(width, height) {
    
    if (width > 0 && height > 0) {
        const area = width * height;
        console.log(`The area of the rectangle is ${area}`);
        return area;
    } else {
        console.log("Invalid Input, Zeros and Negatives are not permitted");
        return null;
    }
}
calculateArea(5, 3);  
calculateArea(10, 7); 