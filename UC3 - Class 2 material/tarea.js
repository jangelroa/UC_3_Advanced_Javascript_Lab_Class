// var persona = {
//   name: 'Leonor',
//   city: 'San Francisco',
//   FavoriteNumber: 8,
//   color: undefined,
//   meditationHours: function() {
//     return 0.5*5*4*12
//   }
// };


// console.log('');
// console.log(persona.name);
// console.log('');
// console.log(persona['FavoriteNumber']);
// console.log('');
// console.log(persona.meditationHours());



// function calculateMeditationTime(numberOfYears) {
//   return numberOfYears * 120;
// }


// console.log(calculateMeditationTime(3));

var postXhr = new XMLHttpRequest();
postXhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      console.log('this.responseText');
      console.log(this.responseText);
      console.log(typeof this.responseText);

      var response = JSON.parse(this.responseText);

      var div = document.createElement('DIV');
      div.innerHTML = 'Post title: ' + response.title;
      document.body.append(div);
    }
};
postXhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
postXhr.send();

