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

 */