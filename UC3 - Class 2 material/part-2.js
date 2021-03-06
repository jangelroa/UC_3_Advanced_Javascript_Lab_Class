function makeXhrRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        setTimeout(function() {
          var response = JSON.parse(xhr.responseText);
          callback(response);
        }, Math.random() * 1000);
      }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function postCallback(post) {
  var div = document.createElement('DIV');
  div.innerHTML = 'Post title: ' + post.title;
  document.body.append(div);
}

function commentCallback(comment) {
  var div = document.createElement('DIV');
  div.innerHTML = 'Comment name: ' + comment.name;
  document.body.append(div);
}

function albumCallback(album) {
  var div = document.createElement('DIV');
  div.innerHTML = 'Album title: ' + album.title;
  document.body.append(div);
}

function photoCallback(photo) {
  var div = document.createElement('DIV');
  div.innerHTML = 'Photo thumbnail: <img src="' + photo.thumbnailUrl + '" />';
  document.body.append(div);
}

function todoCallback(todo) {
  var div = document.createElement('DIV');
  div.innerHTML = 'Todo title: ' + todo.title;
  document.body.append(div);
}

function userCallback(user) {
  var div = document.createElement('DIV');
  div.innerHTML = 'User name: ' + user.name;
  document.body.append(div);
}


setTimeout(function() {
  makeXhrRequest("https://jsonplaceholder.typicode.com/posts/1", postCallback);
}, 0);
setTimeout(function() {
  makeXhrRequest("https://jsonplaceholder.typicode.com/comments/1", commentCallback);
}, 100);
setTimeout(function() {
  makeXhrRequest("https://jsonplaceholder.typicode.com/albums/1", albumCallback);
}, 200);
setTimeout(function() {
  makeXhrRequest("https://jsonplaceholder.typicode.com/photos/1", photoCallback);
}, 300);
setTimeout(function() {
  makeXhrRequest("https://jsonplaceholder.typicode.com/todos/1", todoCallback);
}, 400);
setTimeout(function() {
  makeXhrRequest("https://jsonplaceholder.typicode.com/users/1", userCallback);
}, 500);
