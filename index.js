/**
 * Array.map duplicate
 */

 const map = (callBack) => {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callBack(this[i], i, this));
    }
    return result;
}
