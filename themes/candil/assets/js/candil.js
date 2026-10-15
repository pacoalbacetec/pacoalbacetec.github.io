// candil — pequeños detalles que necesitan un poco de JavaScript.
(function () {
  var root = document.documentElement;

  // 1. El candil: alterna entre día y noche y lo recuerda.
  var boton = document.querySelector(".candil");
  function esNoche() {
    var t = root.dataset.theme;
    if (t) return t === "dark";
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function rotular() {
    if (!boton) return;
    var txt = esNoche() ? "Apagar el candil (modo día)" : "Encender el candil (modo noche)";
    boton.setAttribute("aria-label", txt);
    boton.title = txt.replace(/ \(.*\)/, "");
    boton.setAttribute("aria-pressed", esNoche() ? "true" : "false");
  }
  if (boton) {
    boton.addEventListener("click", function () {
      var nuevo = esNoche() ? "light" : "dark";
      root.dataset.theme = nuevo;
      try { localStorage.setItem("candil-tema", nuevo); } catch (e) {}
      rotular();
    });
    rotular();
  }

  // 2. Saludo según la hora del día (solo si el sitio no fija uno propio).
  var saludo = document.querySelector("[data-saludo]");
  if (saludo && !saludo.dataset.fijo) {
    var h = new Date().getHours();
    saludo.textContent =
      h < 6  ? "¿tú también despierto?" :
      h < 13 ? "buenos días ☀" :
      h < 21 ? "buenas tardes" :
               "buenas noches, pasa";
  }

  // 3. Barra de lectura en las entradas.
  var barra = document.querySelector(".progress");
  if (barra && document.body.classList.contains("is-page")) {
    var pendiente = false;
    function actualizar() {
      var max = document.documentElement.scrollHeight - innerHeight;
      barra.style.transform = "scaleX(" + (max > 0 ? Math.min(1, scrollY / max) : 0) + ")";
      pendiente = false;
    }
    addEventListener("scroll", function () {
      if (!pendiente) { pendiente = true; requestAnimationFrame(actualizar); }
    }, { passive: true });
    actualizar();
  }

  // 4. Botón de copiar en los bloques de código.
  document.querySelectorAll(".highlight").forEach(function (bloque) {
    var pre = bloque.querySelector("pre");
    var lang = bloque.querySelector("code[data-lang]");
    if (lang && !bloque.dataset.lang) bloque.dataset.lang = lang.dataset.lang;
    if (!pre || !navigator.clipboard) return;
    var b = document.createElement("button");
    b.className = "copiar"; b.type = "button"; b.textContent = "copiar";
    b.addEventListener("click", function () {
      var code = pre.querySelector("code") || pre;
      navigator.clipboard.writeText(code.innerText).then(function () {
        b.textContent = "¡copiado!";
        setTimeout(function () { b.textContent = "copiar"; }, 1600);
      });
    });
    bloque.appendChild(b);
  });
})();
