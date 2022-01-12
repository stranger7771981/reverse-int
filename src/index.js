module.exports = function reverse(n) {
    let dig = Math.abs(n);
    let rev = 0;
    while (dig > 0) {
      rev = rev * 10 + (dig % 10);
      dig = Math.floor(dig / 10);
    }
    return rev;
}

