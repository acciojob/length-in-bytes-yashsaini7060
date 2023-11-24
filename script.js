const byteSize = (str) => {
  // write your code here
 const blob = new Blob([str]);

  // Retrieve the size property of the Blob object
  const sizeInBytes = blob.size;

  // Return the size in bytes
  return sizeInBytes;

};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
