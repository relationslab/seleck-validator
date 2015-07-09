var validator = require('validator');
validator.extend('isPassword', function(str) {
  // 利用可能文字 a-zA-Z0-9!"#$%&'()=~|-^@[;:],./`{+*}>?_
  return /^[0-9a-zA-Z_\.!"#\$%&'\(\)=~\|\-\^@\[;:\],\/`\{\+\*\}>\?]{8,}$/.test(str) && validator.isLength(str, 8, 100);
});

module.exports = validator;
