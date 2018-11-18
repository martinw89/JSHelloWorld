"use strict";

/*
Rewrote this decleration with arrows too,
although the task was only for expressions.
Additionally, changed if statement to ? operation.
*/

//function ask(question, yes, no) {
let ask = (question, yes, no) => {
  confirm(question) ?
  yes() :
  no();
}

ask(
  "Do you agree?",
  //function() { alert("You agreed."); },
  () => alert("You agreed."),
  //function() { alert("You canceled the execution."); }
  () => alert("You canceled the execution.")
);
