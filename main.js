const { entrypoints, shell } = require("uxp");
const photoshop = require("photoshop");
const app = photoshop.app;

// Initialize Plugin
entrypoints.setup({
  panels: {
    vanilla: {
      show(node ) {
      }
    }
  }
});

// Panel
document.getElementById("openWebsite").onclick = () => {
  shell.openExternal("https://wakatime.com/dashboard");
};
