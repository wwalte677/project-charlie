import { useEffect } from "react";

export default function KeyboardShortcuts({ navigateTo, openRegister }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = [];

      if (e.ctrlKey) key.push("ctrl");
      if (e.shiftKey) key.push("shift");
      if (e.altKey) key.push("alt");

      key.push(e.key.toLowerCase());
      const combo = key.join("+");

      switch (combo) {

        // NAVIGATION SHORTCUTS
        case "ctrl+1":
          navigateTo("home");
          break;
        case "ctrl+2":
          navigateTo("about");
          break;
        case "ctrl+4":
          navigateTo("contact");
          break;
        case "ctrl+3":
          navigateTo("vote");
          break;
        case "ctrl+5":
          navigateTo("results");
          break;
        case "6":
          navigateTo("credits");
          break;

        // Example page for admin
        case "ctrl+a":
          navigateTo("admin");
          break;

        // openRegister
        case "ctrl+r":
          openRegister && openRegister();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigateTo, openRegister]);

  return null;
}
