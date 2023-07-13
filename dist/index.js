"use strict";
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(this.name + ' is my name and my age is ' + this.age);
    }
}
// janaki.sayHello()
class Boy extends Student {
    constructor(name, age, sex) {
        super(name, age);
        this.sex = sex;
    }
}
const janaki = new Boy('janakiraman', 23, 'male');
class BiologyStudent {
    constructor(who, branch) {
        this.who = who;
        this.branch = branch;
    }
    printIt() {
        console.log(this.who);
    }
}
const anush = new BiologyStudent(janaki, 'zoology');
console.log(anush);
//# sourceMappingURL=index.js.map