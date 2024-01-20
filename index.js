const { isArray } = require('./utils');

// length
Object.defineProperty(Array.prototype, '_length', {
    get: function () {
        return this.length;
    }
})

const lengthTesting = [1,2,3,4,5]
// output: 5

// toString
Array.prototype._toString = function() {
    let result = '';
    if (!isArray(this)) return;
    if (this.length) {
        for (let i = 0; i < this.length; i++) {
            if (typeof this[i] === 'string') {
                result += i === 0 ? `${this[i]}` : `,${this[i]}`
            }
        }
    }
    return result;
}

const toStringTesting = ['jaichandar', 'killer', 'gopal']._toString()

// at
Array.prototype._at = function(index) {
    if (!isArray(this)) return;
    for (let i = 0; i < this.length; i++) {
        if (i === index) {
            return this[i]
        }
    }
    return undefined;
}

const atTesting = ['jaichandar', 'killer', 'gopal']._at(2)
//  output: 'gopal'

// join
Array.prototype._join = function(specifier) {
    if (!isArray(this)) return;
    if (!this.length) return [];
    let result = '';
    for (let i = 0; i < this.length; i++) {
        result += i === 0 ? this[i] : specifier.toString().concat(this[i])
    }
    return result;
}
const joinTesting = ['jaichandar', 'killer', 'gopal']._join(' * ')
// output: jaichandar * killer * gopal

// pop
Array.prototype._pop = function() {
    if (!Array.isArray(this)) return;
    if (!this.length) return [];
    
    const removedElement = this[this.length - 1];
    this.length -= 1;
    return removedElement
}

const popTesting = ['jaichandar', 'killer', 'gopal']
const element = popTesting._pop();
// element: 'gopal'
// output: ['jaichandar', 'killer']