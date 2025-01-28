interface Teacher {
    [key: string]: any; // T1
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
  }

interface Directors extends Teacher { // T2
  numberOfReports: number;
}

const teacher3: Teacher = { // T1
  firstName: "John",
  fullTimeEmployee: true,
  lastName: "Doe",
  contract: true,
  subject: "Math",
  yearsOfExperience: 10,
  location: "Bordeaux"
};

const director1: Directors = { // T2
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  yearsOfExperience: 15,
  numberOfReports: 17,
};

interface printTeacherFunction { // T3
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => { // T3
  return `${firstName[0]}. ${lastName}`;
};

/* -------------------------- */

// Interface définissant la structure des paramètres du constructeur
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface qui définit les méthodes
interface StudentClassInterface {  // T4
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {  // T4
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {  // T4
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {  // T4
    return "Currently working";
  }

  displayName(): string {  // T4
    return this.firstName;
  }
}

const student = new StudentClass({ firstName: "John", lastName: "Doe" }); // T4 création d'un Objet StudentClass de type StudentClassInterface
console.log(student.displayName()); // T4 affiche le firstname de l'instance student
console.log(student.workOnHomework()); // T4 retourne "Currently working"

console.log(teacher3); // T1
console.log(director1); // T2
console.log(printTeacher("John", "Doe")); // T3
