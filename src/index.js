module.exports = function reverse (n) {
    if (n.toString().startsWith('-')) n = n.toString().slice(1);

    return n.toString().split('').reverse().join('');
}
