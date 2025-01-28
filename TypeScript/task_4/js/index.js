var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject(teacher) {
            this.teacher = teacher;
        }
        Subject.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
/// <reference path="Subject.ts" />
var Subjects;
(function (Subjects) {
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cpp.prototype.getRequirements = function () {
            return "Here is the list of requirements for Cpp";
        };
        Cpp.prototype.getAvailableTeacher = function () {
            if (!this.teacher || this.teacher.teachingC === undefined) { // s'il n'y a pas de teacher ou qu'il n'as pas de champ teachingC
                return "No available teacher"; // alors retourne "No available teacher"
            }
            return "Available Teacher: ".concat(this.teacher.firstName); // sinon retourne le nom du teacher qui correspond
        };
        return Cpp;
    }(Subjects.Subject));
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
/// <reference path="Subject.ts" />
var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function (_super) {
        __extends(Java, _super);
        function Java() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Java.prototype.getRequirements = function () {
            return "Here is the list of requirements for Java";
        };
        Java.prototype.getAvailableTeacher = function () {
            if (!this.teacher || this.teacher.teachingJava === undefined) {
                return "No available teacher";
            }
            return "Available Teacher: ".concat(this.teacher.firstName);
        };
        return Java;
    }(Subjects.Subject));
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
/// <reference path="Subject.ts" />
var Subjects;
(function (Subjects) {
    var React = /** @class */ (function (_super) {
        __extends(React, _super);
        function React() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        React.prototype.getRequirements = function () {
            return "Here is the list of requirements for React";
        };
        React.prototype.getAvailableTeacher = function () {
            if (!this.teacher || this.teacher.teachingReact === undefined) {
                return "No available teacher";
            }
            return "Available Teacher: ".concat(this.teacher.firstName);
        };
        return React;
    }(Subjects.Subject));
    Subjects.React = React;
})(Subjects || (Subjects = {}));
/// <reference path="Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
var Subjects;
(function (Subjects) {
    var teacher = {
        firstName: "John",
        lastName: "Doe",
        teachingC: 5,
    };
    // Test Cpp
    var cppSubject = new Subjects.Cpp(teacher);
    console.log("".concat(cppSubject.teacher.firstName, " ").concat(cppSubject.teacher.lastName, " has ").concat(cppSubject.teacher.teachingC, " years of experience in C"));
    console.log(cppSubject.getRequirements());
    console.log(cppSubject.getAvailableTeacher());
    // Test React
    var reactTeacher = {
        firstName: "Jane",
        lastName: "Smith",
        teachingReact: 3,
    };
    var reactSubject = new Subjects.React(reactTeacher);
    console.log("".concat(reactSubject.teacher.firstName, " ").concat(reactSubject.teacher.lastName, " has ").concat(reactSubject.teacher.teachingReact, " years of experience in React"));
    console.log(reactSubject.getRequirements());
    console.log(reactSubject.getAvailableTeacher());
    // Test Java
    var javaTeacher = {
        firstName: "James",
        lastName: "Bond",
        teachingJava: 2,
    };
    var javaSubject = new Subjects.Java(javaTeacher);
    console.log("".concat(javaSubject.teacher.firstName, " ").concat(javaSubject.teacher.lastName, " has ").concat(javaSubject.teacher.teachingReact, " years of experience in Java"));
    console.log(javaSubject.getRequirements());
    console.log(javaSubject.getAvailableTeacher());
})(Subjects || (Subjects = {}));
