# Unexpected Type Coercion in JavaScript Addition

This repository demonstrates a potential bug in JavaScript related to type coercion during addition.  The function `foo` aims to add two numbers but does not handle all cases properly.  Specifically, it uses loose equality (`===`) which might lead to unexpected behavior when dealing with values that can be coerced to numbers (e.g. strings). 

The `bug.js` file showcases the problematic code. The `bugSolution.js` file offers a corrected implementation that explicitly checks types and avoids potential unexpected type coercion.  See below for a description of the issue and the solution.

## Issue

The issue arises from relying on loose equality (`===`) and implicit type coercion in JavaScript's addition operator.  If either `a` or `b` is a non-null value that can be coerced to a number (e.g., a string representing a number), it will be coerced before the addition, potentially yielding incorrect results if this coercion is not what was intended.

## Solution

The solution involves more robust type checking.  The corrected code in `bugSolution.js` explicitly checks if the inputs are numbers and throws an error if they are not.  This prevents unexpected type coercion and ensures correct results or indicates an invalid input appropriately.
