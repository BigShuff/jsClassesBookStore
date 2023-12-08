//super class Media
class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

//get title
get title(){
  return this._title;
}

//get isCheckedOut  
get isCheckedOut(){
  return this._isCheckedOut;
}

//get ratings
get ratings(){
  return this._ratings;
}

changeChecking(checkOut){
  this._isCheckedOut = checkOut;
}

//ratings
addRating(rating){
  this._ratings.push(rating);
}
//end of class
}

//sub class book
class Book extends Media{
  constructor(title, author, pages){
    super(title);
    this._author = author;
    this._pages = pages;
    }

//getter author
get author(){
  return this._author;
}

//getter pages
get pages(){
  return this._pages;
}
}

const theDefinitiveGuide = new Book('The Definitive Guide', 'David Flanagan', 687);
console.log(theDefinitiveGuide.title);
console.log(theDefinitiveGuide.author);
console.log(theDefinitiveGuide.pages);
theDefinitiveGuide.addRating(3);
theDefinitiveGuide.addRating(3);
theDefinitiveGuide.addRating(4);
console.log(theDefinitiveGuide.ratings);

//sub class movie
class Movie extends Media{
  constructor(title, director, runtime){
    super(title);
    this._director = director;
    this._runTime = runtime;
  }

get director(){
  return this._director;
}

get runTime(){
  return this._runTime;
}
}
const fightClub = new Movie('Fight Club', 'David Fincher', 139);
console.log(fightClub.title);
console.log(fightClub.director);
console.log(fightClub.runTime);
console.log(fightClub.isCheckedOut);
fightClub.addRating(4);
fightClub.addRating(5);
fightClub.addRating(5);
console.log(fightClub.ratings);

// //sub class cd
class CD extends Media{
  constructor(title, artist, songs){
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

//getter artist  
get artist(){
 return this._artist;
}

//getter songs
get songs(){
  return this._songs;
}
}

const powerage = new CD("Powerage", "AC/DC", ["Rock 'n' Roll Damnation", "Down Payment Blues", "Gimme a Bullet", "Riff Raff", "Sin City", "What's Next to the Moon", "Gone Shootin'", "Up to My Neck in You", "Kicked in the Teeth"]);
console.log(powerage.title);
console.log(powerage.artist);
console.log(powerage.songs.join(", "));
powerage.changeChecking(true);
console.log(powerage.isCheckedOut);
powerage.addRating(5);
powerage.addRating(5);
powerage.addRating(4);
console.log(powerage.ratings);