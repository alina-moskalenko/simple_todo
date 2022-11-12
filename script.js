document.addEventListener('DOMContentLoaded', function(event) {
   
  const userInput = document.getElementById('new-todo');

   function newMsg() {
     const node = document.createElement('li');
     const text = userInput.value;
     const textnode = document.createTextNode(text);
     node.appendChild(textnode);
     document.querySelector('.todos').appendChild(node);
     // console.log(userInput.value);
   }
  
  document.querySelector('#generate-todo').onclick = newMsg;
})