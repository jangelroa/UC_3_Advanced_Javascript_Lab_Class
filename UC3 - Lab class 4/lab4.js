// Part 0: Make our xhr requests have a random delay between 0-5 seconds to make the race more interesting. '5 min'

function makeXhrRequestWithPromise(url) {
  const myPromise = new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        setTimeout(function() {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        }, Math.random() * 5000);
      }
      if (this.readyState == 4 && this.status !== 200) {
          const response = JSON.parse(xhr.responseText);
          reject(xhr);
      }
    };
    xhr.open('GET', url, true);
    xhr.send();
  });
  return myPromise;
}

// Part 1: Request all 10 users one by one. '5 min'

var user1Promise = makeXhrRequestWithPromise('https://jsonplaceholder.typicode.com/users/1');
var user2Promise = makeXhrRequestWithPromise('https://jsonplaceholder.typicode.com/users/2');
var user3Promise = makeXhrRequestWithPromise('https://jsonplaceholder.typicode.com/users/3');
var user4Promise = makeXhrRequestWithPromise('https://jsonplaceholder.typicode.com/users/4');
var user5Promise = makeXhrRequestWithPromise('https://jsonplaceholder.typicode.com/users/5');
var user6Promise = makeXhrRequestWithPromise('https://jsonplaceholder.typicode.com/users/6');
var user7Promise = makeXhrRequestWithPromise('https://jsonplaceholder.typicode.com/users/7');
var user8Promise = makeXhrRequestWithPromise('https://jsonplaceholder.typicode.com/users/8');
var user9Promise = makeXhrRequestWithPromise('https://jsonplaceholder.typicode.com/users/9');
var user10Promise = makeXhrRequestWithPromise('https://jsonplaceholder.typicode.com/users/10');


// Part 2: Use Promise.race to announce the winner. '10 min'

var winnerPromise = Promise.race([
  user1Promise,
  user2Promise,
  user3Promise,
  user4Promise,
  user5Promise,
  user6Promise,
  user7Promise,
  user8Promise,
  user9Promise,
  user10Promise
])
  .then(function(user) {
    var div = document.createElement('DIV');
    div.innerHTML = 'And the winner is: ' + user.name + ' - ' + user.company.catchPhrase;
    document.body.append(div);
   
    var br = document.createElement('BR');
    document.body.append(br);
    return user;
  });

// Part 3: Set up all the .then handlers for showing the contestants as they arrive.
// You will need some kind of global variable to keep track of the places. Do not forget that the first one is already shown,
// do not repeat him/her. '15 min'

var placement = 1;

function showUser(user) {
  if (placement > 1) {
    var div = document.createElement('DIV');
    div.innerHTML = placement + '. ' + user.name;
    document.body.append(div);
  }
  placement++;
}




user1Promise.then(showUser);
user2Promise.then(showUser);
user3Promise.then(showUser);
user4Promise.then(showUser);
user5Promise.then(showUser);
user6Promise.then(showUser);
user7Promise.then(showUser);
user8Promise.then(showUser);
user9Promise.then(showUser);
user10Promise.then(showUser);




// Part 4: Use Promise.all to announce the end of the race. '10 min'

var overPromise = Promise.all([
  user1Promise,
  user2Promise,
  user3Promise,
  user4Promise,
  user5Promise,
  user6Promise,
  user7Promise,
  user8Promise,
  user9Promise,
  user10Promise
])
  .then(function(users) {
    var br = document.createElement('BR');
    document.body.append(br);

    var div = document.createElement('DIV');
    div.innerHTML = 'The race is over.';
    document.body.append(div);

    document.body.append(br);
  });

// Part 5: Get all the todos belonging to the winner once we know who it is,
// from "https://jsonplaceholder.typicode.com/users/:winnerId/todos"

var todosPromise = winnerPromise.then(function(user) {
  return makeXhrRequestWithPromise('https://jsonplaceholder.typicode.com/users/' + user.id + '/todos');
});

Promise.all([
  winnerPromise,
  todosPromise,
  overPromise
]).then(function(responses) {
  var winner = responses[0];
  var todos = responses[1];
  var uncompletedTodos = todos.filter(function(todo) {
    return !todo.completed;
  });

  if (uncompletedTodos.length > 0) {
    var div = document.createElement('DIV');
    div.innerHTML = 'Unfortunately ' + winner.name + ' has to leave to take care of the following: ';
    document.body.append(div);

    uncompletedTodos.forEach(todo => {
      var div = document.createElement('DIV');
      div.innerHTML = '- ' + todo.title;
      document.body.append(div);
    });
  }
});
