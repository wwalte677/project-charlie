import { useEffect } from "react";

export default function KeyboardShortcuts({ openRegister }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = [];

      if (e.ctrlKey) key.push("ctrl");
      if (e.shiftKey) key.push("shift");
      if (e.altKey) key.push("alt");

      key.push(e.key.toLowerCase());

      const combo = key.join("+");

      // preset shortcuts
      switch (combo) {
        case "ctrl+r": //example
          openRegister(); //replace with action you want
          break;
        case "2":
          console.log("2");
          break;
        case "ctrl+s":
          e.preventDefault(); //if it already has a default add this line
          console.log("s");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
//<KeyboardShortcuts openRegister={() => setShowRegister(true)} /> this is what I used to call 
//specific methods from outside the file