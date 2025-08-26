import { Book } from "./models/Book";
import { Magazine } from "./models/Magazine";
import { User } from "./models/User";

function main() {
  const book1 = new Book(
    "L001",
    "Cien años de soledad",
    "Gabriel García Márquez",
    432,
    "Realismo mágico"
  );
  const book2 = new Book("L002", "1984", "George Orwell", 328);
  const magazine1 = new Magazine(
    "R001",
    "National Geographic",
    "Varios autores",
    "N° 150"
  );

  const user1 = new User("U001", "Juan Pérez");

  user1.lend(book1);
  user1.lend(magazine1);
  user1.showLended();
  user1.lastLended();
}

main();
