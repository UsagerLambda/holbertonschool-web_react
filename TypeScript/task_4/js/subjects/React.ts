/// <reference path="Subject.ts" />

namespace Subjects { // pareil que pour Cpp
    export interface Teacher {
        teachingReact?: number;
      }
    export class React extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher(): string {
            if (!this.teacher || this.teacher.teachingReact === undefined) {
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
