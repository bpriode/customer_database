let container = document.getElementsByClassName('container')[0];

for (var i = 0; i < customers.results.length; i++) {

let template =

`
  <div>
    <img src=${customers.results[i].picture.large}>
    <p>${customers.results[i].name.first+ " " + customers.results[i].name.last}
    <p>${customers.results[i].email}</p>
    <p>${customers.results[i].location.street}</p>
    <p>${customers.results[i].location.city + ", " + customers.results[i].location.state + "  " + customers.results[i].location.postcode}</p>
    <p>${customers.results[i].phone}</p>
    <p>${customers.results[i].id.value}</p>
    </div>
`;



container.innerHTML += template;

}
