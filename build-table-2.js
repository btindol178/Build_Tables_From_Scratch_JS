let mountains = [
  { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
  { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
  { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
  { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
  { name: "Monte Amiata", height: 1738, place: "Siena" }
];



let table = document.querySelector("table");//grab the table values in the html (table)
let data = Object.keys(mountains[0]);       // grab the mountains column names (name,height and place)
let thead = table.createTHead();            // create a column Thead
let row = thead.insertRow();                // Create row to insert 
for (let key of data) {                     // For each value in the column names 
  let th = document.createElement("th");    // create column header
  let text = document.createTextNode(key);  // pass in the text
  th.appendChild(text);                     // pass in the text for the column ame to th
  row.appendChild(th);                      // add it to the only row
  console.log(th)                           // Make a column from all of the names 
}

// Now add in the table data itself 
for (let element of mountains) {             //For each (array) in the mountains list of arrays
  //console.log(element)
  let row = table.insertRow();               // Insert a row
  for (key in element) {                     // In each array grab each key (name, place,height)
    //console.log(key)
    //console.log(element)
    let cell = row.insertCell();             // Insert a cell in that row
    let text = document.createTextNode(element[key]); // creat a text node for that row that contains that names or heights or places value
    console.log(text.data)
    cell.appendChild(text);                  // then append that value to the cell for that row!!! 

  }
}


