class Movie {
    constructor(title, genre) {
      this.title = title;
      this.genre = genre;
      this.isAvailable = true;
    }
  }
  
  class Customer {
    constructor(name) {
      this.name = name;
      this.movies = [];
    }
  
    rentMovie(movie) {
      if (movie.isAvailable) {
        movie.isAvailable = false;
        this.movies.push(movie);
        console.log(`${this.name} rented "${movie.title}"`);
      } else {
        console.log(`Sorry, "${movie.title}" is not available for rent.`);
      }
    }
  
    returnMovie(movie) {
      const index = this.movies.indexOf(movie);
      if (index !== -1) {
        movie.isAvailable = true;
        this.movies.splice(index, 1);
        console.log(`${this.name} returned "${movie.title}"`);
      } else {
        console.log(`${this.name} did not rent "${movie.title}"`);
      }
    }
  }
  
  class MovieRentalStore {
    constructor() {
      this.movies = [];
      this.customers = [];
    }
  
    addMovie(title, genre) {
      const movie = new Movie(title, genre);
      this.movies.push(movie);
    }
  
    addCustomer(name) {
      const customer = new Customer(name);
      this.customers.push(customer);
    }
  
    listMovies() {
      console.log("Available Movies:");
      this.movies.forEach((movie) => {
        if (movie.isAvailable) {
          console.log(`"${movie.title}" - ${movie.genre}`);
        }
      });
    }
  
    listCustomers() {
      console.log("Customers:");
      this.customers.forEach((customer) => {
        console.log(customer.name);
      });
    }
  }
  
  // The code below is used to test the functionality of the code above
  
  const rentalStore = new MovieRentalStore();
  
  rentalStore.addMovie("The X-men", "Sci-Fi");
  rentalStore.addMovie("The Count", "Drama");
  rentalStore.addMovie("Top Gun Maverick", "Action");
  rentalStore.addMovie("Sleepless in Seattle", "Romance");
  
  rentalStore.addCustomer("Vivian");
  rentalStore.addCustomer("David");
  rentalStore.addCustomer("Pamela");
  rentalStore.addCustomer("Gabriella");
  
  rentalStore.listMovies();
  rentalStore.listCustomers();
  
  const pamela = rentalStore.customers[0];
  const theCountMovie = rentalStore.movies[0];
  
  pamela.rentMovie(theCountMovie);
  rentalStore.listMovies();
  
  pamela.returnMovie(theCountMovie);
  rentalStore.listMovies();
  