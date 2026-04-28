(function () {
  function toggleNav(button) {
    var target = document.querySelector(button.getAttribute("data-target"));
    if (!target) {
      return;
    }
    var expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", expanded ? "false" : "true");
    target.classList.toggle("is-open", !expanded);
  }

  document.querySelectorAll("[data-nav-toggle]").forEach(function (button) {
    button.addEventListener("click", function () {
      toggleNav(button);
    });
  });

  document.querySelectorAll("[data-scroll-target]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      var selector = link.getAttribute("data-scroll-target");
      if (!selector) {
        return;
      }
      var target = document.querySelector(selector);
      if (!target) {
        return;
      }
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
