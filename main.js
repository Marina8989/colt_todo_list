   // printReverse()
   //    function printReverse(arr) {
   //        var arrr = [];


   //        for (i = 0; i < arr.length; i++) {
   //            arr.reverse();
   //            arrr.push(arr);
   //            return arrr.toString();
   //        }

   //    }


   //    console.log(printReverse([1, 2, 3, 4]));
   //    console.log(printReverse(['a', 'b', 'c', 'd']));



   //isUniform()

   //    function isUniform(arr) {

   //        var first = arr[0];
   //        for (i = 1; i < arr.length; i++) {
   //            if (first === arr[i]) {
   //                return true;
   //            }
   //            return false;
   //        }


   //    }

   //    console.log(isUniform([1, 1, 1, 1, 1]));
   //    console.log(isUniform([2, 1, 1, 1, 1]));
   //    console.log(isUniform(['a', 'b', 'p']));
   //   console.log(isUniform(['p', 'p', 'p']));





   //    //sumArray()
   //    function sumArray(arr) {
   //        var sum = 0;
   //        for (i = 0; i < arr.length; i++) {
   //            sum += arr[i];
   //        }
   //        return sum;
   //    }

   //    console.log(sumArray([1, 2, 3]));
   //    console.log(sumArray([10, 3, 10, 4]));
   //    console.log(sumArray([-5, 100]));







   //max()


   function max(arr) {
       var maxNum = 0;
       for (i = 0; i < arr.length; i++) {
           if (arr[i] > maxNum) {
               maxNum = arr[i];
           }
       }
       return maxNum;
   }

   console.log(max([1, 2, 3]));
   console.log(max([10, 3, 10, 4]));
   console.log(max([-5, 100]));





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