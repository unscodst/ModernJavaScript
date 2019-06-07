 let val;

 //  Number to string
 val = 5;
 val = String(4+4);
 
 // Bool to string
  val = String(true);

  // Date to string
  val = String(new Date());

  // Array to string
  val = String([1,2,3,4])

  // toString()
  val = (5).toString();
  val = (true).toString();

  // String to number
  val = Number('5');
  val = Number(true);
  val = Number(false);
  val = Number(null);
  val = Number('hello');
  val = number([1,2,3,4]);

  // Parse Int
  val = parseInt('100');
  val = parseInt('100.30');
  val = parseFloat('100.30');

 //Output
 console.log("Number: ",val);
 console.log("Type: ", typeof val);
 console.log("length: ", val.length);

 // Type Coercion 
 const val1 = String(5);
 const val2 = 6;
 const sum = val1 + val2;

 console.log(sum);
 console.log(typeof sum)


