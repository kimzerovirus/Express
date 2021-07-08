function func1() {
    func2();
    console.log(1);
}

function func2() {
    func3();
    console.log(2);
}

function func3() {
    console.log(3);
}

func1();

//실행결과 3 -> 2 -> 1

//func1 func2 func3 순으로 호출되어 쌓이고 func3 func2 func1 순으로 실행되어 console.log가 출력된다.

/*
    - 이벤트 루프 : 이벤트 발생하면 호출할 콜백함수들을 관리하고, 호출된 콜백함수의 실행순서를 결정하는 역할담당.
    - 백그라운드 : setTimeout과 같은 타이머나 이벤트 리스너들이 대기하는 곳, 여러작업이 동시에 실행될 수 있음
    - 태크스 큐 : 이벤트 발생 후, 백그라운드에서 태스크 큐로 타이머나 이벤트 리스너의 콜백 함수를 보낸다.

 */

// const Human = function (type) {
//     this.type = type || 'human';
// }

// Human.isHuman = function (human) {
//     return human instanceof Human;
// }

// Human.prototype.breathe = function () {
//     console.log('ha-ha-ha-ha-ha')
// }

// const Saram = function (type, firstName, lastName) {
//     Human.apply(this, arguments);
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Saram.prototype = Object.create(Human.prototype);
// Saram.prototype.constructor = Saram; //상속
// Saram.prototype.sayName = function () {
//     console.log(`${this.firstName} : ${this.lastName}`)
// }

// const oldSaram = new Saram('human', 'Saram', 'in')
// Human.isHuman(oldSaram);

//////////////////////////////////////////////////////////

class Human {
    constructor(type = 'human') {
        this.type = type;
    }

    static isHuman(human) {
        return human instanceof Human;
    }

    breathe() {
        console.log('s-hh-hh')
    }
}

class Saram extends Human {
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.breathe();
        console.log(`${this.firstName} : ${this.lastName}`)
    }
}

const newSaram = new Saram('human', 'king', 'wow');
Human.isHuman(newSaram);
