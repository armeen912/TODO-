#! //usr/bin/env node
import inquirer from "inquirer";
let todo = []

let addTask = await inquirer.prompt(
    [

    {
            name : "todo",
            type : "input",
            message : "What would you like  to add in you Todos ?",
        },

      {
         name : "addMore",
         type :  "comfirm",
         message : "Would  you like to add more in your todos ?",
         default : "true ",
      }, 
    ] 
   );
   todo.push (addTask);
   console.log (addTask);
   
   