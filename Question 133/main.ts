// *Question 133:* Write a JavaScript object and convert it into a JSON string.

// *Explain & TIP:* JSON (JavaScript Object Notation) is a lightweight data-interchange format. It's easy for humans to read and write and for machines to parse and generate. Converting a JavaScript object into a JSON string can be done using JSON.stringify().
 //first of all i create a javascript object.
 const jsobject ={
    Name:'Muhammad saleem',
    Fathername:'Mehmood Hussain',
    Age:'21'
 }
//  now create a jsonstring converter .
 const jsonconverter =JSON.stringify(jsobject)
//  now print 
console.log(jsonconverter)