//your JS code here. If required.
const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong",
    "stop"
];

const buttons = document.getElementById("buttons");

sounds.forEach(function(sound) {

    const button = document.createElement("button");

    if (sound === "stop") {
        button.classList.add("stop");
    } else {
        button.classList.add("btn");
    }

    button.textContent = sound;

    buttons.appendChild(button);
});