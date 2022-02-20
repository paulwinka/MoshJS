// constructor functions can't be done in arrow notation, use semicolons, and use Pascal case.
function CreatePost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comment = [];
  this.isLive = false;
}

const firstBook = new CreatePost('Great Title', 'Great Body', 'Paul Winka');

console.log(firstBook);
