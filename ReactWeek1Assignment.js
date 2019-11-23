
class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, ) {
        this.name = name;
        this.level = level;
        this.students = [];
    }

    registerStudent(studentToRegister) {
        if (this.students.filter(() => !studentToRegister.email)) {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals`);
            return this.students;
        }
    }
}

