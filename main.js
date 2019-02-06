//newDiv.appendChild(table);
var table = document.createElement('table');
//var people = [50]
for (i=0;i<50;i++){
  var person = {
    last: faker.fake("{{name.lastName}}"),
    first: faker.fake("{{name.firstName}}"),
  //age: randRange(18,100),
    job: faker.fake("{{name.jobTitle}}"),
    tel: faker.fake("{{phone.phoneNumber}}"),
    address: faker.fake("{{address.streetAddress}}")
  }
  console.log(person)
}

//var line = document.createElement
//for (person)

//<"td">

   // cell.innerHTML= valeur de la prop en question
