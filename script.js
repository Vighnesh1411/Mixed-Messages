"use strict";

const messages = [
  "Dont't worry if it doesn't work right.If everything did, you'd be out of a job.",
  "Don't comment bad code - rewrite it. - Brian Kernighan",
  "A programming language is for thinking about programs, not for expressing programs you've already thought of. It should be a pencil, not a pen. - Paul Graham",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. - Dan Salomon",

  "It´s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive. - Steve McConnell",

  "One of my most productive days was throwing away 1000 lines of code. Ken Thompson",

  "Without requirements or design, programming is the art of adding bugs to an empty text file.",

  "One main'scrappy software is another man's full time job.",

  "Walking on water and developing software from a specification are easy if both are frozen.",

  "Debugging is twice as hard as writing the code in the first place.Therfore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. - Rajanand",

  "System programmers are the high priests of a low cult. - Robert S. Barton",

  "I don't care if it works on your machine! We are not shipping your machine! - Vidiu Platon",

  "Software undergoes beta testing shortly before it's released . Beta is latin for 'still doesn't work' ",

  "Measuring programming program by lines of code is like measuring aircraft building progree by weight. - Bill Gates",

  "If debudding is the process of removing software bugs, then programming must be the process of putting them in. - Edsger W. Dijkstra",

  "The computer was born to solve problems that did not exist before. - Bill Gates",

  "Real programmers don't comment their code. If it was hard to write, it should be hard to understand.",

  "Always code as if the guy who ends up maintaning your code will be a violent psychopath who knows where you live. - Rick Osborne",

  "People don't care about what you say, they care about what you build. - Mark Zuckerberg",

  "We have to stop optimizing for programmers and start optimizing for users. — Jeff Atwood",

  "If the code and the comments do not match, possibly both are incorrect. — Norm Schryer",

  "Bad programmers worry about the code. Good programmers worry about data structures and their relationships. - Linus Torvalds",
];
// console.log(messages.length);

let randomNum = Math.floor(Math.random() * messages.length);
console.log(randomNum);
let mixedMessage = messages[randomNum];

let ans = prompt("Stucked In Coding ?");
let ansLow = ans.toLowerCase();
console.log(ansLow);
if (ansLow === "no") {
  alert("Enjoy Coding !!!!");
} else if (ansLow === "yes") {
  alert(
    `Don't Worry Read A Motivational Quote \n${mixedMessage}\n And Take A Look At Our Beginner Courses`
  );
}
