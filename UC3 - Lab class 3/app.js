function makeXhrRequestWithPromise(url) {
  var myPromise = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        setTimeout(function() {
          var response = JSON.parse(xhr.responseText);
          resolve(response);
        }, Math.random() * 1000);
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
  return myPromise;
}

var resources = [
  {
    url: "https://jsonplaceholder.typicode.com/posts/1",
    response: null,
    isShown: false,
    callback: function postCallback(post) {
      var div = document.createElement("DIV");
      div.innerHTML = "Post title: " + post.title;
      document.body.append(div);
    }
  },
  {
    url: "https://jsonplaceholder.typicode.com/comments/1",
    response: null,
    isShown: false,
    callback: function commentCallback(comment) {
      var div = document.createElement("DIV");
      div.innerHTML = "Comment name: " + comment.name;
      document.body.append(div);
    }
  },
  {
    url: "https://jsonplaceholder.typicode.com/albums/1",
    response: null,
    isShown: false,
    callback: function albumCallback(album) {
      var div = document.createElement("DIV");
      div.innerHTML = "Album title: " + album.title;
      document.body.append(div);
    }
  },
  {
    url: "https://jsonplaceholder.typicode.com/photos/1",
    response: null,
    isShown: false,
    callback: function photoCallback(photo) {
      var div = document.createElement("DIV");
      div.innerHTML =
        'Photo thumbnail: <img src="' + photo.thumbnailUrl + '" />';
      document.body.append(div);
    }
  },
  {
    url: "https://jsonplaceholder.typicode.com/todos/1",
    response: null,
    isShown: false,
    callback: function todoCallback(todo) {
      var div = document.createElement("DIV");
      div.innerHTML = "Todo title: " + todo.title;
      document.body.append(div);
    }
  },
  {
    url: "https://jsonplaceholder.typicode.com/users/1",
    response: null,
    isShown: false,
    callback: function userCallback(user) {
      var div = document.createElement("DIV");
      div.innerHTML = "User name: " + user.name;
      document.body.append(div);
    }
  }
];

function syncronizeCallbacks() {
  for (var i = 0; i < resources.length; i++) {
    if (resources[i].response) {
      if (!resources[i].isShown) {
        resources[i].callback(resources[i].response);
        resources[i].isShown = true;
      }
    } else {
      return;
    }
  }
}

var postPromise = makeXhrRequestWithPromise

resources.forEach(function(resource) {
  makeXhrRequest(resource.url).then(function(response) {
    resource.response = response;
    syncronizeCallbacks();
  })
  ;
});
