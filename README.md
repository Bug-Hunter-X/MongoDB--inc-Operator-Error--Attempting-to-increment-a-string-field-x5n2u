# MongoDB $inc Operator Error: Attempting to increment a string field

This repository demonstrates a common error when using the `$inc` operator in MongoDB: attempting to increment a string field instead of a number field.  The `$inc` operator is designed to increment numeric fields; applying it to a string field will result in an error or unexpected results.

The `bug.js` file shows the erroneous code, and `bugSolution.js` provides the corrected version.

## How to Reproduce

1.  Ensure you have a MongoDB instance running.
2.  Create a collection (e.g., `myCollection`).
3.  Insert a document with a string field (e.g., `{ _id: 1, field: '1' }`).
4.  Run the code in `bug.js`.
5.  Observe the error or unexpected behavior.
6.  Run the code in `bugSolution.js` to see the correct implementation.

## Solution

The solution involves ensuring that the field being incremented is of numeric type (integer or double).  The correct usage is demonstrated in `bugSolution.js`.