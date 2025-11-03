// COMP 484 JavaScript Coding Exercises
// Filename suggestion: hw9-yourInitials.js

// ------------------------------
// Set 1: Advanced Syntax, Types, and Quirks
// ------------------------------

// Exercise 1: Complex Arithmetic and Standard Rules
var finalResult = 3 + 5 * (10 / 2) - (8 - 4);
console.log("Exercise 1:", finalResult);

// Exercise 2: Case Sensitivity Test
var projectIdentifier = "COMP484";
// ProjectIdentifier = "JS_Advanced"; // This fails because JavaScript is case-sensitive; 'ProjectIdentifier' != 'projectIdentifier'.
projectIdentifier = "JS_Advanced";
console.log("Exercise 2:", projectIdentifier);

// Exercise 3: String Quoting Challenge
// Use double quotes for the string; single quotes inside around 'scripting' so no escaping needed there.
// The word "interactive" uses double quotes inside a double-quoted string, so we escape those.
var courseDescription = "The course is \"interactive\" and involves 'scripting' logic.";
console.log("Exercise 3:", courseDescription);

// Exercise 4: Escaping and Console Output
// Use single quotes for the string and explicitly escape the inner double quotes as requested.
var errorMessage = 'An internal server error occurred: \"Access Denied\"';
console.log("Exercise 4:", errorMessage);

// Exercise 5: Type Coercion with Non-Plus Operators
var valueA = 10;
var valueB = "4";
var resultSubtraction = valueA - valueB;     // "4" coerced to 4
var resultMultiplication = valueA * valueB;  // "4" coerced to 4
console.log("Exercise 5 (subtraction):", resultSubtraction);
console.log("Exercise 5 (multiplication):", resultMultiplication);
console.log("Exercise 5 typeof subtraction:", typeof resultSubtraction);
console.log("Exercise 5 typeof multiplication:", typeof resultMultiplication);

// ------------------------------
// Set 2: Operators and Type Theory
// ------------------------------

// Exercise 6: Understanding `null` and `undefined` Types
var unassignedVar;
var explicitNull = null;
console.log("Exercise 6 typeof unassignedVar:", typeof unassignedVar); // "undefined"
console.log("Exercise 6 typeof explicitNull:", typeof explicitNull);   // "object"
/*
  In JavaScript, `typeof null` returns "object" due to a historical quirk in the
  original implementation where values were tagged with type bits. The tag used
  for `null` matched the object tag. For legacy compatibility, this behavior was
  never changed, so `typeof null === "object"`.
*/

// Exercise 7: Boolean Assignment and Type Identification
var isBlocking = true;
console.log("Exercise 7 typeof after boolean:", typeof isBlocking); // "boolean"
isBlocking = "true";
console.log("Exercise 7 typeof after string:", typeof isBlocking);  // "string"

// Exercise 8: Invalid Variable Naming
// var 2cool = 1;        // Invalid: variable names cannot start with a number.
// var user name = "A";  // Invalid: spaces are not allowed in identifiers.
// var @handle = "x";    // Invalid: '@' is not a permitted starting character for identifiers.

// Exercise 9: Chained Shorthand Arithmetic
var counterValue = 50;
counterValue /= 5;
counterValue -= 3;
console.log("Exercise 9:", counterValue);

// Exercise 10: Prefix vs. Postfix Unary Operators
var x = 10;
var y_post = x++; // Postfix: y_post gets 10, then x becomes 11
console.log("Exercise 10 (postfix) y_post:", y_post, "x:", x);

x = 10;
var z_pre = ++x; // Prefix: x increments to 11 first, then z_pre gets 11
console.log("Exercise 10 (prefix) z_pre:", z_pre, "x:", x);
// Postfix applies the side effect after the expression is evaluated; prefix applies before.

// ------------------------------
// Set 3: Advanced Logic and Comparisons
// ------------------------------

// Exercise 11: Loose Equality and Coercion
var testNumber = 0;     // number
var testBoolean = false; // boolean
if (testNumber == testBoolean) {
  console.log("Exercise 11: 0 == false is loosely equal.");
}
// Explanation: With `==`, JavaScript coerces `false` to 0, so 0 == 0 is true.

// Exercise 12: Strict Inequality Test
var versionA = 10.0;   // number
var versionB = "10.0"; // string
if (versionA !== versionB) {
  console.log("Exercise 12: versionA and versionB are NOT strictly equal.");
} else {
  console.log("Exercise 12: versionA and versionB are strictly equal.");
}

// Exercise 13: Logical OR and AND Combination
var isLoggedIn = true;
var isSubscriber = false;
var isTrialExpired = false;
// Access if (logged in AND subscriber) OR (logged in AND NOT trialExpired)
if ((isLoggedIn && isSubscriber) || (isLoggedIn && !isTrialExpired)) {
  console.log("Exercise 13: Access granted.");
} else {
  console.log("Exercise 13: Access denied.");
}

// Exercise 14: Simulating XOR using Nested Conditionals
var conditionA = true;
var conditionB = false;
if ((conditionA && !conditionB) || (!conditionA && conditionB)) {
  console.log("Exercise 14: XOR Success");
} else {
  console.log("Exercise 14: XOR Fail");
}

// Exercise 15: Converting IF/ELSE to Ternary Operator
var scriptLoadType = "deferred";
var loadStatus;
if (scriptLoadType === "deferred") {
  loadStatus = "Non-blocking";
} else {
  loadStatus = "Potentially Blocking";
}
console.log("Exercise 15 (if/else):", loadStatus);

// Ternary version
var loadStatusTernary = (scriptLoadType === "deferred") ? "Non-blocking" : "Potentially Blocking";
console.log("Exercise 15 (ternary):", loadStatusTernary);

// ------------------------------
// Set 4: Integration and Application
// ------------------------------

// Exercise 16: Commenting and Code Structure
/*
  calculateRenderTime()
  Purpose: Calculate an estimated time for rendering a page by accounting for
  parsing HTML, downloading resources, and executing JavaScript. This function
  would aggregate timings and return a total render duration in milliseconds.
*/
function calculateRenderTime() {
  // Implementation would go here (e.g., sum parse, download, and execute timings).
}

// Exercise 17: Date Object Formatting Challenge (MM/DD/YYYY)
var now = new Date();
var mm = now.getMonth() + 1; // Months are zero-indexed
var dd = now.getDate();
var yyyy = now.getFullYear();
// Zero-pad month/day to two digits
var mmStr = (mm < 10) ? "0" + mm : "" + mm;
var ddStr = (dd < 10) ? "0" + dd : "" + dd;
var formatted = "Today is " + mmStr + "/" + ddStr + "/" + yyyy;
console.log("Exercise 17:", formatted);

// Exercise 18: Mixed Type Arithmetic Explanation
var val1 = 20;
var val2 = "5";
var sumResult = val1 + val2; // "205"
var diffResult = val1 - val2; // 15
console.log("Exercise 18 (sumResult):", sumResult);
console.log("Exercise 18 (diffResult):", diffResult);
/*
  The `+` operator performs string concatenation if either operand is a string.
  Here, 20 + "5" converts 20 to "20" and produces "205".
  Other arithmetic operators like `-`, `*`, `/` first coerce strings to numbers.
  So 20 - "5" converts "5" to 5 and yields the numeric result 15.
*/

// Exercise 19: Conditional based on Type Check
var dataInput = 484;
if (typeof dataInput === "number") {
  console.log("Exercise 19: Input is numeric.");
} else {
  dataInput = true;
  console.log("Exercise 19: New type is", typeof dataInput);
}

// Exercise 20: Simulating DOM Manipulation Timing Failure (Conceptual)
/*
  If the following DOM-manipulation code runs in the <head> without `defer` or `async`,
  it may execute before the HTML parser has created the <body> (or before the target
  node exists). Attempting to access or set properties on a non-existent element can
  yield errors like: "Cannot set property 'innerHTML' of null" because the reference
  you tried to use (e.g., document.body or a result of getElementById) is `null`.
  Placing the script at the end of <body> or using `defer` ensures the DOM is ready.
*/
// Standard sequence to inject an <h1> into the document body:
var heading = document.createElement("h1");
heading.innerHTML = "Interactive Layer Loaded";
document.body.appendChild(heading);
