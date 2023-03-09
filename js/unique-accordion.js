(function () {
  let acc = document.getElementsByClassName("unique__accordion");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      let isActive = this.classList.contains("active");
      let panel = this.nextElementSibling;
      if (!isActive) {
        for (let j = 0; j < acc.length; j++) {
          if (j !== i) {
            acc[j].classList.remove("active");
            let otherPanel = acc[j].nextElementSibling;
            otherPanel.style.maxHeight = null;
          }
        }
      }
      this.classList.toggle("active");
      if (isActive) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
})();
