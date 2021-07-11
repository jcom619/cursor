let currentCursorPos;
const cursorEl = document.querySelector("#cursor");
const cursorImageEl = document.querySelector('#cursor > img');

window.addEventListener("mousemove", event => {
   currentCursorPos = { x: event.clientX, y: event.clientY };
   if (document.querySelector(".container:hover")) {
      cursorEl.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`;
      cursorImageEl.style.opacity = "1"
      cursorEl.style.display = "inline-block"
   } else {
      cursorEl.style.display = "none"
   }
   if (document.querySelector(".left-a:hover")) {
      cursorImageEl.style.transform = `rotate(180deg)`
   } else if (document.querySelector(".right:hover")) {
      cursorImageEl.style.transform = `rotate(-90deg)`
   } else {
      cursorImageEl.style.transform = `rotate(90deg)`
   }
});
