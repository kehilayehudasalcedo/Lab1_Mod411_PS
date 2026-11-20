console.log("------ Task1 -----")
function formatFullName(firstName, lastName) {

if (firstName.length === 0 || lastName.length === 0)
{
    return "Invalid name input.";
}
else 
{
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() 
    + ", " + 
    lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()
} //
}
P_formatFullName = formatFullName ("KEHILA","SALCEDO")

console.log(P_formatFullName)



console.log("------ Task2 -----")
// Mathematical Operations with Multiple Parameters. Write a function called calculateTotalCost that takes three parameters: price, quantity, and taxRate. The function should calculate the total cost of items, including tax. Use the formula: totalCost = (price * quantity) * (1 + taxRate).bEnsure that price, quantity, and taxRate are all valid numbers. If any are invalid, return a string: “Invalid input.” 

function Ktotal(price,quantity,taxRate)
{
    if (typeof price !== "number" || typeof quantity !== "number" || typeof taxRate !== "number") 
    {
        return "Invalid input.";
    }
    // valor numerico roto
    if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) 
    {
        return "Invalid input.";
    }
    else
    {
    let Gtotal = (price*quantity)*(1+taxRate)
    return Gtotal
    }
}

P1_Ktotal = Ktotal(1,2,3)
P2_Ktotal = Ktotal("a",2,3)
P3_Ktotal = Ktotal(10 / "cat",2,3)

console.log(`Case1: All numbers Total = : ${P1_Ktotal}`)
console.log(`Case2: "a" string: ${P2_Ktotal}`)
console.log(`Case3: isNaN 10 / "cat": ${P3_Ktotal}`)

console.log("------ Task3 -----")

// . 3. Write a function called checkEligibility that takes two parameters: age and isEmployed. The function should check if a person is eligible for a program based on the following rules. If the person is over 18 and employed, they are eligible.//If the person is over 18 but unemployed, they are conditionally eligible.If the person is 18 or younger, they are not eligible.Return an appropriate string message for each scenario."

function checkEligibility(age, isEmployed) {
    if (age > 18 && isEmployed === true) {
        return "You are eligible for the program";
    } else if (age > 18 && isEmployed === false) {
        return "You are CONDITIONALLY eligible for the program";
    } else {
        return "You are NOT eligible for the program";
    }
}

P_checkEligibility = checkEligibility(3,true);

console.log(P_checkEligibility)


// . 4. Task 4: Refactoring for Reusability. Refactor the calculateTotalCost function from Task 2 to include an optional discount parameter. If the discount is provided, the function should, subtract the discount from the total cost before applying tax.
console.log("------ Task4 -----")
function Ktotal(p,q,tr,d=0)
{
    if (typeof d !== "number" || typeof p !== "number" || typeof q !== "number" || typeof tr !== "number") 
    {
        return "Invalid input.";
    }
    // valor numerico roto
    if (isNaN(d) || isNaN(p) || isNaN(q) || isNaN(tr)) 
    {
        return "Invalid input.";
    }
    else
    {
    let Vtotal = ((p*q)-d)*(1+tr)
    return Vtotal
    }
}

P1_Ktotal = Ktotal(100,2,3,0)
P2_Ktotal = Ktotal("a",2,3,0)
P3_Ktotal = Ktotal(10 / "cat",2,3,0)
P4_Ktotal = Ktotal(100,2,3)

console.log(`Case1: All 4 arguments given (100,2,3,0). Total = 🔴$ ${P1_Ktotal}`)
console.log(`Case2: "a" string ("a",2,3,0): ${P2_Ktotal}`)
console.log(`Case3: isNaN (10 / "cat",2,3,0): ${P3_Ktotal}`)

console.log(`Case4: missing 4th argument (100,2,3): ${P4_Ktotal}`)
