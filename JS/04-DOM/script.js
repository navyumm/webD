//!>>>>>>>>>>>>>             DOM         <<<<<<<<<<<<<<<<<<<<!//

//? Definition:

// DOM (Document Object Model) is a tree-like structure that represents all the elements of an HTML page.
// JavaScript can use the DOM to read, change, add, or delete elements dynamically.

//* Example

//? Imagine your HTML page as a family tree 

// <html> is the root
// <body> is a child
// inside <body>, you have <h1>, <p>, <button>, etc.

//? JavaScript can go to any “family member” and change its style, text, or even remove it.

//! Why we need DOM?

// Without the DOM, our web pages would be static - nothing would respond when a user clicks, types, or interacts.
// DOM makes your website alive and interactive


//*::::::::::::::::              1. Accessing elements             :::::::::::::::::::::*//

// We use DOM methods to find HTML elements.

//? Example

```
<h2 id="animeTitle">Naruto</h2>
<button onclick="changeTitle()">Change Anime</button>

<script>
  function changeTitle() {
    const title = document.getElementById("animeTitle");
    title.innerText = "Attack on Titan";
  }
</script>
```
// When you click the button, the title changes from Naruto → Attack on Titan.


//*::::::::::::::::       2. Changing Text & Styles Dynamically             ::::::::::::::::*//

```
<h1 id="hero">Luffy</h1>
<button onclick="powerUp()">Gear 5!</button>

<script>
function powerUp() {
  const hero = document.getElementById("hero");
  hero.innerText = "Luffy (Gear 5)";
  hero.style.color = "white";
  hero.style.backgroundColor = "black";
  hero.style.padding = "10px";
}
</script>
```

//*::::::::::::::::                  3. Event Handling                     ::::::::::::::::*//

// Events are actions that happen on a web page → like a click, hover, typing, etc.  

// | Event               | Trigger                                  |
// | -------------     | ------------------------------ |
// | `onclick`          | User clicks on an element     |
// | `onchange`      | Value of input changes         |
// | `onmouseover` | User hovers on an element  |
// | `onkeydown`    | User presses a key                |


{/* 
    <input type="text" id="animeInput" placeholder="Enter anime name">
    <button onclick="showAnime()">Show</button>
    <p id="result"></p>

    <script>
    function showAnime() {
    const name = document.getElementById("animeInput").value;
    document.getElementById("result").innerText = `You love ${name}!`;
    }
    </script> 
*/}

//? This reacts to user input in real time


// **********************************************************************

//! 👉  JavaScript Timing Events

// **********************************************************************


//? The window object allows execution of code at specified time intervals.
//? These time intervals are called timing events.

//? The two key methods to use with JavaScript are:

//* setTimeout(function, milliseconds)
//? Executes a function, after waiting a specified number of milliseconds.

//* setInterval(function, milliseconds)
//? Same as setTimeout(), but repeats the execution of the function continuously.



//* 1️⃣ setTimeout()  
//* 2️⃣ clearTimeout()
//* 3️⃣ setInterval()
//* 4️⃣ clearInterval()


//Question : Difference between setTimeout and setInterval() ?




//  ************************************************************************************** //
//! ************************************************************************************* //






//*::::::::::::::::          4. Creating & Deleting Elements           ::::::::::::::::*//

`
<button onclick="addCharacter()">Add Character</button>
<ul id="characterList"></ul>

<script>
function addCharacter() {
  const list = document.getElementById("characterList");
  const li = document.createElement("li");
  li.innerText = "Zoro 🗡️";
  list.appendChild(li);
}
</script>
`
`
<ul id="animeList">
  <li>Naruto</li>
  <li>Luffy</li>
  <li>Zoro</li>
</ul>

<button onclick="removeCharacter()">Remove Last Character</button>

<script>
function removeCharacter() {
  const list = document.getElementById("animeList");
  const lastItem = list.lastElementChild;  
  if (lastItem) {
    lastItem.remove(); 
  }
}
</script>
`




//*::::::::::::::::          5. Local Storage & JSON           ::::::::::::::::*//

// Local Storage is a small storage space in your browser that saves data even after you refresh or close the tab.
// You can store small info like user preferences, theme, or anime name.

// Why we need it?
// To remember user data (like last watched anime, favorite list, dark mode setting).


```
    <input type="text" id="favAnime" placeholder="Your favorite anime">
    <button onclick="saveAnime()">Save</button>
    <p id="message"></p>

    <script>
    function saveAnime() {
    const anime = document.getElementById("favAnime").value;
    localStorage.setItem("favorite", anime); // Save to local storage
    document.getElementById("message").innerText = "Saved successfully!";
    }
    </script>
```

// Now try
`console.log(localStorage.getItem("favorite"));
`
//? It will show the anime name you saved — even after reload!


// *******************************************************************************
        //****************************************************************
//!                                JSON 
        //****************************************************************
// *******************************************************************************


//? JSON.stringify turns a JavaScript object into JSON text and 
//? stores that JSON text in a string, eg:

// var my_object = { key_1: "some text", key_2: true, key_3: 5 };

// var object_as_string = JSON.stringify(my_object); 
// console.log(object_as_string)
// "{"key_1":"some text","key_2":true,"key_3":5}"  

// console.log(object_as_string);

// typeof(object_as_string);  
// "string" 


//!  JSON.parse turns a string of JSON text into a JavaScript object, eg:

// var object_as_string_as_object = JSON.parse(object_as_string);  
// {key_1: "some text", key_2: true, key_3: 5} 

// console.log(object_as_string_as_object);  
// typeof(object_as_string_as_object);  
// "object" 



//? ------------------------------------------------------------------ //



