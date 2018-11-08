// var postXhr = new XMLHttpRequest();
// postXhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var response = JSON.parse(this.responseText);

//       var div = document.createElement('DIV');
//       div.innerHTML = 'Post title: ' + response.title;
//       document.body.append(div);
//     }
// };
// postXhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
// postXhr.send();

const makeXhrRequest = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      callback(response);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

const postCallback = function(response) {
  var div = document.createElement("DIV");
  div.innerHTML = "Post title: " + response.title;
  document.body.append(div);
};

const commentCallback = function(response) {
  var div = document.createElement("DIV");
  div.innerHTML = "Comment body: " + response.body;
  document.body.append(div);
};

const albumCallback = function(response) {
  var div = document.createElement("DIV");
  div.innerHTML = "Album title: " + response.title;
  document.body.append(div);
};

const photoCallback = function(response) {
  var div = document.createElement("DIV");
  div.innerHTML = "Photo url: " + '<img src="' + response.url + '"/>';
  document.body.append(div);
};

const todoCallback = function(response) {
  var div = document.createElement("DIV");
  div.innerHTML = "Todo title: " + response.title;
  document.body.append(div);
};

const userCallback = function(response) {
  var div = document.createElement("DIV");
  div.innerHTML = "User name: " + response.name;
  document.body.append(div);
};

// makeXhrRequest("https://jsonplaceholder.typicode.com/posts/1", function(response) {
//   postCallback(response);
  
//   makeXhrRequest("https://jsonplaceholder.typicode.com/comments/1", function(response) {
//     commentCallback(response);

//     makeXhrRequest("https://jsonplaceholder.typicode.com/albums/1", function(response) {
//       albumCallback(response);

//       makeXhrRequest("https://jsonplaceholder.typicode.com/photos/1", function(response) {
//         photoCallback(response);

//         makeXhrRequest("https://jsonplaceholder.typicode.com/todos/1", function(response) {
//           todoCallback(response);

//           makeXhrRequest(
//             "https://jsonplaceholder.typicode.com/users/1",
//             function(response) {
//               userCallback(response);
//             }
//           );
//         });
//       });
//     });
//   });
// });

// makeXhrRequest("https://jsonplaceholder.typicode.com/users/", function(response) {
//   console.log(response)
//   for(let i = 0; i < response.length; i += 1) {
//     var div = document.createElement("DIV");
//     div.innerHTML = "User " + i + " name: " + response[i].name;
//     document.body.append(div);
//   }

// });


makeXhrRequest("https://jsonplaceholder.typicode.com/posts/", function(postResponse) {
  
  for(let i = 0; i < postResponse.length; i += 1) {
   
    let userFetched =false;
    let userData;
    makeXhrRequest("https://jsonplaceholder.typicode.com/users/" + postResponse[i].userId, function(userResponse) {
      userData = userResponse;
      userFetched = true;
    });
    // wait while user is not fetched
    // while(!userFetched) {}

    const br = document.createElement("br");
    document.body.append(br);
    const postDiv = document.createElement("DIV");
    postDiv.innerHTML = "Post " + i + " title: " + postResponse[i].title;
    document.body.append(postDiv);

    const userDiv = document.createElement("DIV");
    userDiv.innerHTML = "User id: " + userData.id + " User name: " + userData.name;
    document.body.append(userDiv);
  }

});



