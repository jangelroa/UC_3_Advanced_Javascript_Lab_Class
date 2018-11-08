var postXhr = new XMLHttpRequest();
postXhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      var div = document.createElement('DIV');
      div.innerHTML = 'Post title: ' + response.title;
      document.body.append(div);
    }
};
postXhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
postXhr.send();


var commentXhr = new XMLHttpRequest();
commentXhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      var div = document.createElement('DIV');
      div.innerHTML = 'Comment name: ' + response.name;
      document.body.append(div);
    }
};
commentXhr.open("GET", "https://jsonplaceholder.typicode.com/comments/1", true);
commentXhr.send();

var albumXhr = new XMLHttpRequest();
albumXhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      var div = document.createElement('DIV');
      div.innerHTML = 'Album title: ' + response.title;
      document.body.append(div);
    }
};
albumXhr.open("GET", "https://jsonplaceholder.typicode.com/albums/1", true);
albumXhr.send();


var photoXhr = new XMLHttpRequest();
photoXhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      var div = document.createElement('DIV');
      div.innerHTML = 'Photo thumbnail: <img src="' + response.thumbnailUrl + '" />';
      document.body.append(div);
    }
};
photoXhr.open("GET", "https://jsonplaceholder.typicode.com/photos/1", true);
photoXhr.send();


var todoXhr = new XMLHttpRequest();
todoXhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      var div = document.createElement('DIV');
      div.innerHTML = 'Todo title: ' + response.title;
      document.body.append(div);
    }
};
todoXhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
todoXhr.send();


var userXhr = new XMLHttpRequest();
userXhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      var div = document.createElement('DIV');
      div.innerHTML = 'User name: ' + response.name;
      document.body.append(div);
    }
};
userXhr.open("GET", "https://jsonplaceholder.typicode.com/users/1", true);
userXhr.send();
