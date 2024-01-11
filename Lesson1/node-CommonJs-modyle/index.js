const users = require("./users");
// console.log(users);

const {getCurrentMonth} = require("./date");
const currentMonth = getCurrentMonth();
console.log(`Now ${currentMonth} month`)