// loop methods

// Map
Array.prototype._map = function(callback) {
    let result = [];
    if (Array.isArray(this)) {
        if (!this.length) {
            return [];
        } else {
            for (let i = 0; i < this.length; i++) {
                result[i] = callback(this[i], i, this)
            }
            return result;
        }
    }
}
const testing = [1,2,3,4,5,6,7]
const result = testing._map(squareNumber)
function squareNumber(val) {
    return val * val
}
// output: [ 1,  4,  9, 16, 25, 36, 49 ]

// find:
Array.prototype._find = function(callback) {
    if (Array.isArray(this)) {
        if (!this.length) {
            return [];
        } else {
            for (let i = 0; i < this.length; i++) {
                if (callback(this[i], i, this)) {
                    return this[i];
                }
            }
        }
    }
}
const fTesting = [{ name: 'jaichandar', age: 24 }, { name: 'killer', age: 24 }, { name: 'Gopal', age: 24 }]
const fResult = fTesting._find(findValue)
function findValue (value) {
    return value.name === 'jaichandar'
}
// output: { name: 'jaichandar', age: 24 } expected output

//filter
Array.prototype._filter = function(callback) {
    let result = [];
    if (Array.isArray(this)) {
        if (this.length) {
            for(let i = 0; i < this.length; i++) {
                if (callback(this[i], i, this)) {
                    result.push(this[i])
                }
            }
        } else {
            return result;
        }
    }
    return result;
}

const array = [1,2,3,4,5,6]
const filterTesting = array._filter(filteredValue)
function filteredValue(val) {
    return val === 4
} 
console.log(filterTesting)
// output: [4] 

// forEach
Array.prototype._forEach = function (callback) {
    if (Array.isArray(this)) {
        if (!this.length) {
            return [];
        } else {
            for (let i = 0; i < this.length; i++) {
                callback(this[i], i, this)
            }
        }
    }
}

const ForEachtesting = [1,2,3,4,5,6]
testing._forEach((val) => console.log(val))
// output: 1,2,3,4,5,6
