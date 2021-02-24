// Exercices

import Wardrobe from "./Wardrobe.js";
import Book from "./Book.js";
import Backpack from "./Backpack.js";

const myWardrobe = new Wardrobe(
  "My Wardrobe",
  "black",
  true,
  "closed",
  "open",
  "closed"
);

console.log(myWardrobe.name, myWardrobe);

//3 books with details
const Book1 = new Book("Hobbit", 350, "green", "fantasy", true, 38, 6);

console.log(Book1.title, Book1);

const Book2 = new Book("Ogn", 420, "white", "history", false, 0, 0);

console.log(Book2.title, Book2);

const Book3 = new Book("Lalka", 480, "white", "novel", false, 0, 0);

console.log(Book3.title, Book3);
