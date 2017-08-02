console.log(customers);

let container = document.getElementsByClassName ('container');

let template =

`
<body>
  <div class="images">
    <img src=${customers.results[5].picture.medium}>
  </div>
  <div>
    <p>${customers.results[0].email}></p>
    <p>${customers.results[2].location.street}<>/p>
    <p>${customers.results[2].location.city}<>/p>
    <p>${customers.results[2].location.state}<>/p>
    <p>${customers.results[2].location.postcode}<>/p>
    <p>${customers.results[4].phone}<>/p>
    <p>${customers.results[1].id.value}<>/p>
</body>


`;

container.innerHMTL = template;
console.log(template);
