console.log("Hayden is a bitch"); 

var titleEl = document.querySelector(".title-area");
var textEl = document.querySelector(".text-area");
var choiceEl = document.querySelector(".choice-area");
titleEl.innerHTML = "gameTemp1 <br> <br> How did the Player cross the Town? <br> (No Players were harmed in the making of this game*)";
var prompts = {
   textPrompt(question, scene) {
      choiceEl.innerHTML += `<form> <label for="name">${question}</label> <input type="text" class="text" id="name" name="name" required
      minlength="1" maxlength="100" size="10"> <button>Enter<button></form>`;
      var textInputEl = document.querySelector(".text");
      var buttonEl = document.querySelector("button");
      buttonEl.addEventListener("click",(event)=>{
      event.preventDefault(); 
      var textInputValue = textInputEl.value; 
      console.log(textInputValue); 
      })
   },
   buttonPrompt(question, choice1, choice2, choice3, choice4){
      choiceEl.innerHTML += `<form> <label for="name">${question}</label> 
      <input class="button"
      type="button"
      value="${choice1}"> 
      <input class="button"
      type="button"
      value="${choice2}"> 
      <input class="button"
      type="button"
      value="${choice3}"> 
      <input class="button"
      type="button"
      value="${choice4}"> 
      </form>`; 
      var buttonInputEl = document.querySelectorAll("input");
      buttonInputEl.forEach(item => {item.addEventListener('click', event => {
         event.preventDefault(); 
         var buttonInputValue = item.value; 
         console.log(buttonInputValue); 
         wipeScreen();      
      })});
   },
   radioPrompt(question, choice1, choice2, choice3){
      choiceEl.innerHTML += `<form> <label for="name">${question}</label> 
      <div>
      <input type="radio" id="id" name="name" value="value"
             unchecked>
      <label for="for">${choice1}</label>
    </div>

    <div>
      <input type="radio" id="id" name="name" value="value"
             unchecked>
      <label for="for">${choice2}</label>
    </div>

    <div>
      <input type="radio" id="id" name="name" value="value"
             unchecked>
      <label for="for">${choice3}</label>
    </div>
    <button>Enter<button>
    </form>`;
  },
  numberPrompt(question){
     choiceEl.innerHTML += `<form> <label for="age">${question}</label>
     <input type="number" id="number" name="number"
       min="0" max="1000"> <button>Enter<button></form>` 
  }, 
  checkboxPrompt(question, choice1, choice2, choice3, choice4, choice5, choice6){
     choiceEl.innerHTML += `<form> <label for="Player Attributes">${question}</label>
     <div>
     <input type="checkbox" id="id" name="name"
            unchecked>
     <label for="for">${choice1}</label>
   </div>

   <div>
     <input type="checkbox" id="id" name="name"
            unchecked>
     <label for="for">${choice2}</label>
   </div>
   
   <div>
     <input type="checkbox" id="id" name="name"
            unchecked>
     <label for="for">${choice3}</label>
   </div>
   
   <div>
     <input type="checkbox" id="id" name="name"
            unchecked>
     <label for="for">${choice4}</label>
   </div>
   
   <div>
     <input type="checkbox" id="id" name="name"
            unchecked>
     <label for="for">${choice5}</label>
   </div>
   
   <div>
     <input type="checkbox" id="id" name="name"
            unchecked>
     <label for="for">${choice6}</label>
   </div>
   <button>Enter<button>
   </form>`
  }
};
var addText = (text) =>{
   textEl.innerHTML += text; 
}
var titleEl = document.querySelector(".title-area");

function wipeScreen() {
   textEl.innerHTML = "";
   choiceEl.innerHTML = "";
}

function deathScene() {
   // freeze and duplicate inventory array at start of every scene
    // revert to last scene and original frozen inventory
}
function titleScene() {
   console.log("Title Screen");
   addText("Welcome! <br> Good luck...");
   prompts.buttonPrompt("Would you like to begin?", "Yes", "No", "Maybe", "I Don't Know");
   var buttonInputEl = document.querySelectorAll("input");
      buttonInputEl.forEach(item => {item.addEventListener('click', event => {
         event.preventDefault(); 
         var buttonInputValue = item.value; 
         console.log(buttonInputValue); 
         if (buttonInputValue == 'Yes') {
            console.log('Good job.');
            sceneOne();
         }
         else if (buttonInputValue == 'No') {
            console.log('Maybe next time...');
         }
         else if (buttonInputValue == 'Maybe' || `I Don't Know`) {
            console.log('Make up your mind, then.');
         }   
   })});
}
function sceneOne() {
   console.log("Scene One");
   addText("You are the young child of a prominent moat-maker in the medieval town of Shire-upon-shiresbury. Your father, noting that you have finally come of age, tells you it is time for you to get your first dog. The responsibilities will be many...but it is a good test of your potential to be a future hero.");
   prompts.textPrompt("First off...what is your name?");
   var buttonInputEl = document.querySelector("button");
      buttonInputEl.addEventListener('click', event => {
         event.preventDefault();
         wipeScreen();
         sceneTwo();
      })
}
function sceneTwo(name) {
   console.log("Scene Two");
   addText(`OK ,${name}, I like that name. Now...it would also be helpful if I knew your age.`);
   prompts.numberPrompt("How old are you?"); 
}
function sceneThree() {
   console.log("Scene Three");
   addText("And tell me a bit about yourself...my eyesight isn't so good these days.");
   prompts.checkboxPrompt("What do you look like?", "Short", "Tall", "Hairy", "Bald", "Strong", "Weak");
}

// titleScene();
// sceneOne();
// sceneTwo();
sceneThree();
