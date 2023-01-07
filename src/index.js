module.exports = function reverse(n) {
    let str = Math.abs(n).toString();
    let result = str.split("").reverse().join("");
    return result;
};
