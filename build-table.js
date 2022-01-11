let mountains = [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" }
  ];

//How you can call different 
console.log(Object.keys(mountains[0]))
console.log(Object.values(mountains[0]))


// console.log data 
for (var i = 0; i < mountains.length; ++i) {
    console.log(mountains[i].name + ", " + mountains[i].height);
}

// generate the table head
function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

// loop through table data and put it in table 
function generateTable(table, data) {
    for (let element of data) {
    let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
}
  
let table = document.querySelector("table");
let data = Object.keys(mountains[0]);
generateTableHead(table, data);
generateTable(table, mountains);