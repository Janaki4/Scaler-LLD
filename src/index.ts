class Student {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHello(): void {
        console.log(this.name + ' is my name and my age is ' + this.age)
    }
}

// janaki.sayHello()

class Boy extends Student {
    sex: string
    constructor(name: string, age: number, sex: string) {
        super(name, age)
        this.sex = sex
    }
}

const janaki = new Boy('janakiraman', 23, 'male')
type WhoType = Student | Boy;

class BiologyStudent {
    who: WhoType
    branch: string
    constructor(who: Student, branch: string) {
        this.who = who
        this.branch = branch
    }
    printIt(): void {
        console.log(this.who)
    }
}

const anush = new BiologyStudent(janaki, 'zoology')
console.log(anush)
