(function() {
    function $class(cl) {
        return document.getElementsByClassName(cl);
    }

    const clear = $class("clear")[0];
    const result = $class("result")[0];
    const one = $class("one")[0];
    const two = $class("two")[0];
    const three = $class("three")[0];
    const four = $class("four")[0];
    const five = $class("five")[0];
    const six = $class("six")[0];
    const seven = $class("seven")[0];
    const eight = $class("eight")[0];
    const nine = $class("nine")[0];
    const zero = $class("zero")[0];
    const plus = $class("plus")[0];
    const minus = $class("minus")[0];
    const multi = $class("multi")[0];
    const division = $class("division")[0];
    const decimal = $class("decimal")[0];
    const equal = $class("equal")[0];

    const numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operatorArr = ['+', '-', '*', '/', '.'];

    let equation = '';

    function addClckLis(elem, val) {
        elem.addEventListener("click", function() {
            updateEquation(val);
        });
    }

    function updateEquation(val) {
        if(val === 'C') {
            equation = '';
            setEquation();
        }
        if(val === '=') {
            calculate();
        }
        for(let i = 0; i < numberArr.length; i++) {
            if(val === numberArr[i]) {
                equation += val;
                setEquation();
            } else {
                if(i < 5) {
                    if(val === operatorArr[i]) {
                        if(lastNotOper()) {
                            equation += val;
                            setEquation();
                        } 
                    }
                }
            }
        }
    }

    function calculate() {
        let res = 0;
        if(lastNotOper()) {
            res = eval(equation);
            equation = res;
            setEquation();
        } else {
            alert("Niste zavrsili jednacinu");
        }
    }

    function lastNotOper() {
        let bool = false;
        if(equation !== "" && equation[equation.length-1] !== '+' && equation[equation.length-1] !== '-' && equation[equation.length-1] !== '*' && equation[equation.length-1] !== '/' && equation[equation.length-1] !== '.') {
            bool = true;
        }
        return bool;
    }

    function setEquation() {
        if(equation === '') {
            result.innerHTML = '0';
        } else {
            result.innerHTML = equation;
        }
    }

    function whickKey() {
        let char = String.fromCharCode(event.keyCode);
        updateEquation(char);
        if(event.keyCode === 13) {
            calculate();
        }
    }

    function backspacePressed() {
        if(event.keyCode === 8) {
            equation = equation.substring(0, equation.length-1);
            setEquation();
        }
    }

    addClckLis(clear, 'C');
    addClckLis(one, '1');
    addClckLis(two, '2');
    addClckLis(three, '3');
    addClckLis(four, '4');
    addClckLis(five, '5');
    addClckLis(six, '6');
    addClckLis(seven, '7');
    addClckLis(eight, '8');
    addClckLis(nine, '9');
    addClckLis(zero, '0');
    addClckLis(plus, '+');
    addClckLis(minus, '-');
    addClckLis(multi, '*');
    addClckLis(division, '/');
    addClckLis(decimal, '.');
    addClckLis(equal, '=');

    document.addEventListener("keypress", whickKey);
    document.addEventListener("keydown", backspacePressed);
})();