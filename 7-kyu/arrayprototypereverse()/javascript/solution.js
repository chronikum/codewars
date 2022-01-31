Array.prototype.reverse = function() {
  let length = this.length
  for (let i = 0; i < length/2; i++)
  {
      let temp = this[i];
      this[i] = this[length-i-1];
      this[length-i-1] = temp;
  }
  return this
};