   // printReverse()
   function printReverse(arr) {
       var arrr = [];


       for (i = 0; i < arr.length; i++) {
           arr.reverse();
           arrr.push(arr);
           return arrr.toString();
       }

   }


   console.log(printReverse([1, 2, 3, 4]));
   console.log(printReverse(['a', 'b', 'c', 'd']));



   //   TODO TODo TODO TODO TODO //
   // var todos = ['Buy New Turtle'];

   // var input = prompt('What would you like to do?');

   // while (input !== 'quit') {
   //     if (input === 'list') {
   //         listTodos();
   //     } else if (input === 'new') {
   //         addTodo();
   //     } else if (input === 'delete') {
   //         deleteTodo();
   //     }

   //     input = prompt('What would you like to do?');
   // }
   // console.log('Ok, YOU QUIT THE APP.');


   // function listTodods() {
   //     todos.forEach(function(todo, index) {
   //         console.log(index + ": " + todo);
   //     });
   // }

   // function addTod() {
   //     var newTodo = prompt('Enter new todo');
   //     todos.push(newTodo);
   //     console.log('Added todo');
   // }

   // function deleteTodo() {
   //     var index = prompt('Enter the index of todo to delete');
   //     todos.splice(index, 1);
   //     console.log('Deleted todo');
   // }