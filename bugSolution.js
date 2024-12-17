```javascript
// Correct usage of $inc operator
db.collection.updateOne({ _id: 1 }, { $inc: { field: 1 } });
//Alternatively, if you want to start with a string, you must first convert it to a number using the $toInt operator before incrementing
db.collection.updateOne({ _id: 1 }, { $inc: { field: { $toInt: '$field'} } });
```