Date.prototype.addHours = function (hrs) {
  this.setHours(this.getHours() + hrs);
  return this;
};
