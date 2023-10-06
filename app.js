document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("gomb").addEventListener("change", function () {
        if (this.checked) {
          console.log("Checkbox is checked");
          document.documentElement.style.setProperty("--main-color", "#060725");
          document.documentElement.style.setProperty("--bg-color", "#111344");
          document.documentElement.style.setProperty("--font-color", "#F0EBD8");
        } else {
          console.log("Checkbox is unchecked");
          document.documentElement.style.setProperty("--main-color", "#748CAB");
          document.documentElement.style.setProperty("--bg-color", "#F0EBD8");
          document.documentElement.style.setProperty("--font-color", "#111344");
        }
      });

      document.getElementById("hatter").addEventListener("click", function (){
        document.body.style.setProperty("background-image", "url(pics/light_background.png)");
      });
});