// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textArea = document.getElementById('text');
const counter = document.getElementById('stat');
// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.
textArea.addEventListener('keyup',function(){
  
  var text = textArea.value;
  var wordCount = 0;
  var characterCount = -1; 
  for (var i = 0; i <= text.length; i++) {
    if (text.charAt(i) == ' ') {
      wordCount++;
      characterCount++;
    } 
    else
    {
      characterCount++;
    }   
  }

  counter.innerText = "You have written " + wordCount + "word(s) and " + characterCount + "characters";

});