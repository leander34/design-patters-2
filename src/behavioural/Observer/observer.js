var InputObservable = /** @class */ (function () {
    function InputObservable(element) {
        this.element = element;
        this.observers = [];
        console.log(element);
    }
    InputObservable.prototype.subscribe = function () {
        var _this = this;
        var observers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observers[_i] = arguments[_i];
        }
        observers.forEach(function (observer) {
            if (!_this.observers.includes(observer))
                _this.observers.push(observer);
        });
    };
    InputObservable.prototype.unsubcribe = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index === -1)
            return;
        this.observers.splice(index, 1);
    };
    InputObservable.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (observer) { return observer.update(_this); });
    };
    return InputObservable;
}());
var ParagraphObsever = /** @class */ (function () {
    function ParagraphObsever(element) {
        this.element = element;
    }
    ParagraphObsever.prototype.update = function (observable) {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    };
    return ParagraphObsever;
}());
var DivObsever = /** @class */ (function () {
    function DivObsever(element) {
        this.element = element;
    }
    DivObsever.prototype.update = function (observable) {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    };
    return DivObsever;
}());
// client-code
function makeInput() {
    var input = document.createElement('input');
    input.id = 'leander';
    //   input.className = 'lean'
    //   input.setAttribute('', 'lee')
    //   console.log(input.classList.contains('lean'))
    //   input.classList.toggle('lean')
    //   input.classList.toggle('lean')
    //   console.log(input.classList.contains('lean'))
    document.body.appendChild(input);
    return input;
}
function makeParagraph() {
    var paragraph = document.createElement('p');
    paragraph.innerText = 'Inicial';
    document.body.appendChild(paragraph);
    return paragraph;
}
function makeDiv() {
    var div = document.createElement('div');
    div.innerText = 'Texto da div';
    document.body.appendChild(div);
    return div;
}
// makeInput()
// const input = document.querySelector('#leander') as HTMLInputElement
// const paragraph = document.querySelector('#paragraph') as HTMLParagraphElement
var inputObservable = new InputObservable(makeInput());
var p1 = new ParagraphObsever(makeParagraph());
var p2 = new ParagraphObsever(makeParagraph());
var div1 = new DivObsever(makeDiv());
inputObservable.subscribe(p1, p2, div1);
inputObservable.unsubcribe(p2);
inputObservable.element.addEventListener('keyup', function (e) {
    inputObservable.notify();
});
