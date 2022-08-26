class Movie {
  constructor(_title, _studio, _rating) {
    console.log("hello");
    this.title = _title;
    this.studio = _studio;
    this.rating = _rating;
  }

  getPG() {
    return defaultValue("PG");
  }
}

let movieDetails = new Movie("Casino Royale", "Eon productions", "PG13");

console.log(movieDetails);
