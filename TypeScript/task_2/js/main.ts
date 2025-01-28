interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface { // crée une class qui prend l'interface DirectorInterface
  workFromHome(): string {
      return 'Working from home';
  }

  getCoffeeBreak(): string {
      return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
      return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface { // crée une class qui prend l'interface TeacherInterface
  workFromHome(): string {
      return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
      return 'Cannot have a break';
  }

  workTeacherTasks(): string {
      return 'Getting to work';
  }
}

// fonction qui prend un argument qui peut être soit un nombre ou une string et renvoie soit un Teacher ou un Director
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
  }
  return new Director();
}

// fonction qui prend employee en argument qui peut soit être un Director ou un Teacher
function isDirector(employee: Director | Teacher): employee is Director { // si le retour de la ligne suiavnte est vrai alors employee est Director
  return employee instanceof Director; // retourne vrai si employee est de type Director
}

// fonction qui prend employee en argument qui peut soit être un Director ou un Teacher
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) { // appel fonction isDirector, si le retour est true (donc employee == Director)
      return employee.workDirectorTasks(); // appel de la fonction workDirectorTasks
  } else {
      return employee.workTeacherTasks(); // appel de la fonction workTeacherTasks
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));

const employee1 = createEmployee(200);
const employee2 = createEmployee(1000);

console.log(executeWork(employee1)); // "Getting to work"
console.log(executeWork(employee2)); // "Getting to director tasks"

console.log(createEmployee(200).workFromHome()); // "Cannot work from home"
console.log(createEmployee(1000).workFromHome()); // "Working from home"
console.log(createEmployee('$500').workFromHome()); // "Working from home"
