interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
  };
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
  };
  const studentsList: Student[] = [student1, student2];

  const table = document.createElement('table'); // crée un table dans la variable table

  const headerRow = table.insertRow(); // ajoute une rangée qui va servir de header
  const headerCell1 = headerRow.insertCell(); // crée une cellule dans le header
  headerCell1.textContent = 'First Name'; // nommage de la première cellule du header
  const headerCell2 = headerRow.insertCell(); // crée une deuxième cellule dans le header
  headerCell2.textContent = 'Location'; // nommage de la deuxième cellule du header

  studentsList.forEach(student => {
    const row = table.insertRow(); // crée une rangée dans la table
    const cell1 = row.insertCell(); // crée une cellule dans la rangée
    cell1.textContent = student.firstName; // ajoute le nom du student dans la cellule
    const cell2 = row.insertCell(); // crée une deuxième cellule dans la rangée
    cell2.textContent = student.location; // ajoute la localisation du student dans la cellule2
  });

  document.body.appendChild(table); // ajoute la table crée dans le body
