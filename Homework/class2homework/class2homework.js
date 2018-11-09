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

function syncronizeCallbacks() {
  if (xhrData[0].response) {
    if (!xhrData[0].shown) {
      xhrData[0].callback(xhrData[0].response);
      xhrData[0].shown = true;
    }
  } else {
    return;
  }

  if (xhrData[1].response) {
    if (!xhrData[1].shown) {
      xhrData[1].callback(xhrData[1].response);
      xhrData[1].shown = true;
    }
  } else {
    return;
  }

  if (xhrData[2].response) {
    if (!xhrData[2].shown) {
      xhrData[2].callback(xhrData[2].response);
      xhrData[2].shown = true;
    }
  } else {
    return;
  }

  if (xhrData[3].response) {
    if (!xhrData[3].shown) {
      xhrData[3].callback(xhrData[3].response);
      xhrData[3].shown = true;
    }
  } else {
    return;
  }

  if (xhrData[4].response) {
    if (!xhrData[4].shown) {
      xhrData[4].callback(xhrData[4].response);
      xhrData[4].shown = true;
    }
  } else {
    return;
  }

  if (xhrData[5].response) {
    xhrData[5].callback(xhrData[5].response);
    xhrData[5].shown = true;
  }
}

const xhrData = [
  {
    url: "https://jsonplaceholder.typicode.com/posts/1",
    functionResponse: (response) => {
      xhrData[0].response = response;
      // debugger;
      syncronizeCallbacks();
    },
    callback: (post) => {
      var div = document.createElement('DIV');
      div.innerHTML = 'Post title: ' + post.title;
      document.body.append(div);
      // debugger;
    },
    response: null,
    shown: false
  },
  {
    url: "https://jsonplaceholder.typicode.com/comments/1",
    functionResponse: (response) => {
      xhrData[1].response = response;
      syncronizeCallbacks();
    },
    callback: (comment) => {
      var div = document.createElement('DIV');
      div.innerHTML = 'Comment name: ' + comment.name;
      document.body.append(div);
    },
    response: null,
    shown: false
  },
  {
    url: "https://jsonplaceholder.typicode.com/albums/1",
    functionResponse: (response) => {
      xhrData[2].response = response;
      syncronizeCallbacks();
    },
    callback: (album) => {
      var div = document.createElement('DIV');
      div.innerHTML = 'Album title: ' + album.title;
      document.body.append(div);
    },
    response: null,
    shown: false
  },
  {
    url: "https://jsonplaceholder.typicode.com/photos/1",
    functionResponse: (response) => {
      xhrData[3].response = response;
      syncronizeCallbacks();
    },
    callback: (photo) =>{
      var div = document.createElement('DIV');
      div.innerHTML = 'Photo thumbnail: <img src="' + photo.thumbnailUrl + '" />';
      document.body.append(div);
    },
    response: null,
    shown: false
  },
  {
    url: "https://jsonplaceholder.typicode.com/todos/1",
    functionResponse: (response) => {
      xhrData[4].response = response;
      syncronizeCallbacks();
    },
    callback: (todo) => {
      var div = document.createElement('DIV');
      div.innerHTML = 'Todo title: ' + todo.title;
      document.body.append(div);
    },
    response: null,
    shown: false
  },
  {
    url: "https://jsonplaceholder.typicode.com/users/1",
    functionResponse: (response) => {
      xhrData[5].response = response;
      syncronizeCallbacks();
    },
    callback: (user) => {
      var div = document.createElement('DIV');
      div.innerHTML = 'User name: ' + user.name;
      document.body.append(div);
    },
    response: null,
    shown: false
  }
];

xhrData.forEach(data => {
  makeXhrRequest(data.url, data.functionResponse);
}, xhrData);


