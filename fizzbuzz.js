// fizzbuzz.js
(function(exports) {
  "use strict";

  function FizzBuzz(number) {
    this.number = number || 1;
  }
  exports.FizzBuzz = FizzBuzz;

  FizzBuzz.prototype = {
    toString: function() {
      if(this.isExactlyDivisibleBy(3)) {
        return "fizz";
      }
      return "" + this.number;
    },

    isExactlyDivisibleBy: function(dividedBy) {
      return this.number % dividedBy == 0;
    }
  };

})(this);
