/// <reference path="Subject.ts" />

namespace Subjects { // hérite de Subject
    export interface Teacher {
        teachingC?: number;
      }
    export class Cpp extends Subject { // class Cpp qui permet de rajouter les attribut optionnel
        getRequirements(): string { // méthode qui retourne un chaine de caractères
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher(): string { // méthode qui retourne un chaine de caractères
            if (!this.teacher || this.teacher.teachingC === undefined) { // s'il n'y a pas de teacher ou qu'il n'as pas de champ teachingC
                return "No available teacher"; // alors retourne "No available teacher"
            }
            return `Available Teacher: ${this.teacher.firstName}`; // sinon retourne le nom du teacher qui correspond
        }
    }
}
