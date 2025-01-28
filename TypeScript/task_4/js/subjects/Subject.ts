namespace Subjects {
  export class Subject {
      teacher: Teacher; // attribut "teacher" qui implémente l'interface Teacher
      constructor(teacher: Teacher) {
        this.teacher = teacher;
      }

      setTeacher(teacher: Teacher): void { // setter qui accepte un enseignant en argument
          this.teacher = teacher;
      }
  }
}
