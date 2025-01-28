/// <reference path="Subject.ts" />

namespace Subjects { // pareil que pour Cpp
    export interface Teacher {
        teachingJava?: number;
      }
    export class Java extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
            if (!this.teacher || this.teacher.teachingJava === undefined) {
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
