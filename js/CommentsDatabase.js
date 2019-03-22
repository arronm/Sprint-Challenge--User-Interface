class CommentsDatabase {
  constructor () {
    if (!localStorage.getItem('commentDB')) {
      this.createDatabase();
    }
    
    this.database = this.getDatabase();
  }
  
  createDatabase = () => {
    let mockComments = {
      "1re35r9": {
        id: "1re35r9",
        user: "Anonymous",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis viverra ante vel vestibulum. Phasellus vel erat ornare, scelerisque tortor in, lobortis tortor. Nulla ac rutrum augue, sed tempor eros."
      },
      "w7s3ix": {
        id: "w7s3ix",
        user: "Arron",
        message: "Phasellus nunc tortor, viverra id semper in, malesuada in justo. Sed rutrum tristique faucibus. Suspendisse pretium dictum metus, et sagittis elit luctus cursus. Suspendisse ornare vitae lectus a suscipit. Sed lobortis lacus a lorem dictum tincidunt."
      },
      "ok0evl": {
        id: "ok0evl",
        user: "Josh",
        message: "Maecenas aliquam egestas vestibulum. Cras odio magna, iaculis eu dignissim vitae, aliquet vel nibh. Vivamus vel lobortis nulla. Integer sollicitudin vestibulum sem, cursus facilisis lacus accumsan ac."
      }
    };

    localStorage.setItem('commentDB', JSON.stringify(mockComments));
    return mockComments;
  }

  getDatabase = () => {
    return JSON.parse(localStorage.getItem('commentDB'));
  }

  save = (comment) => {
    const id = window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36);
    this.database[id] = {
      "id": id,
      "user": comment.name || "Anonymous",
      "message": comment.message,
    };
    localStorage.setItem('commentDB', JSON.stringify(this.database));
    return this.database;
  }
  
  remove = (id) => {
    this.database[id] = undefined;
    localStorage.setItem('commentDB', JSON.stringify(this.database));
    this.database = JSON.parse(localStorage.getItem('commentDB'));
    return this.database;
  }
}