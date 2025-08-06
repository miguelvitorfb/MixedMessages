const mixedMessages = () => {
    const outMessage = document.querySelector("span")

    const ramOne =[
  "The exhausted developer",
  "My cursed code",
  "An AI with an attitude",
  "A panicked junior dev",
  "The sneaky bug",
  "The forgotten variable",
  "The eternal sprint",
  "The Friday deploy",
  "The broken CI pipeline",
  "The pointless meeting"
];
    const ramTwo =  [
  "crashed everything while",
  "caused chaos by",
  "blew up the app after",
  "ignored all warnings and",
  "took down production by",
  "sabotaged the build after",
  "reinvented the wheel trying to",
  "broke the system just by",
  "triggered madness by",
  "revealed its true nature while"
];
    const ramThree = [
  "logging to the console like a madman.",
  "renaming a function in production.",
  "using `var` like it's 1999.",
  "committing directly to main.",
  "deleting the `if` block ‘just to test’.",
  "copy-pasting from Stack Overflow blindly.",
  "ignoring the linter’s desperate screams.",
  "thinking it would work on the first try.",
  "forgetting the one semicolon that mattered.",
  "running a regex on everything — twice."
];

const randomMessage = (arr) => arr[Math.floor(Math.random()*arr.length)]
  
   outMessage.textContent = `${randomMessage(ramOne)}${randomMessage(ramTwo)}${randomMessage(ramThree)}`
}
const btRandom = document.querySelector("button").addEventListener('click',mixedMessages)

window.onload(mixedMessages())

function ptbr(params) {
    
}