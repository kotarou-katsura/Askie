// import { useEffect, useRef } from "react";
// import { Terminal } from "xterm";
// import "xterm/css/xterm.css";
// export default function TerminalComponent() {
//   const terminalRef = useRef(null);
// const inputBuffer = useRef(""); // <-- add this line


//   useEffect(() => {
//     if (terminalRef.current && !terminalRef.current.dataset.initialized) {
//       const term = new Terminal( {cursorBlink: true , cursorStyle:"underline",allowProposedApi: true, allowTransparency: true});
//       term.open(terminalRef.current);
//       term.focus();
//       term.write("Hello from \x1B[1;32mnana\x1B[0m $ you can use the \x1B[3;34mhelp\x1B[0m\r\n ");
//       // Handle user key input'
  
//       term.onKey(({ key, domEvent }) => {
//         if (domEvent.key === "Enter") {
//           const command = inputBuffer.current.trim();
//           term.write("\r\n"); // new prompt line on Enter
//           if (command === "clear") {
//             term.clear();
        
//           } else if (command ==="help"){
//        term.write(
//   "\x1B[1;33mclear\x1B[0m\t\tClear the terminal screen.\r\n" +
//   "\x1B[1;33mhelp\x1B[0m\t\tShow available commands.\r\n" +
//   "\x1B[1;33mabout\x1B[0m\t\tDisplay information about this terminal.\r\n" +
//   "\x1B[1;33mchatBot\x1B[0m\tChat with ai model.\r\n" +
//   "\x1B[1;33mprojects\x1B[0m\tShow details about the current project.\r\n"
// );

//           }
//           else if (command=== "about") {
//   term.write('Hi, this is Katsura!\r\nI studied Computer Science at Kharazmi University. I like to create unique websites and break stereotypes.\r\nYou can see my projects with the command \x1B[3;34mprojects\x1B[0m\r\n');


//           }else if (command ==="")
//           {term.write("")}
//           else if (command ==="chatBot"){
//             console.log("this is chatbot")

//           }
//           else if (command === "projects"){

//           }
//           else {
//             term.write("\x1B[1;31mCommand not found: " + command + "\x1B[0m \r\n");
//           }
//           term.write("$ "); // new prompt
//           inputBuffer.current = ""; // reset buffer
//         } else if (domEvent.key === "Backspace") {
//           term.write("\b \b"); // handle backspace visually
//             inputBuffer.current = inputBuffer.current.slice(0, -1);
//         } else 
//         {
//             inputBuffer.current += key; // store user input
//           term.write(key); // write other keys normally
//         }
//       });
//       terminalRef.current.dataset.initialized = "true"; // mark as initialized
//     }
//   }, []);

//   //   When this div is ready, save its reference into terminalRef.current.”
//   return <>

//   <div ref={terminalRef} className="terminal-box" /></>
// }
