// One-time browser-language redirect. Runs only when no preference cookie exists yet, so it
// never fights a manual pick from the language switcher (that switcher just navigates to a URL,
// and loading that URL re-writes the cookie below to match).
(function () {
  var AVAILABLE = ["en", "fr", "nl", "cs", "es", "sv", "nb"]; // "de" = default, no path prefix
  var COOKIE_NAME = "gcms_lang";

  function getCookie(name) {
    var match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function setCookie(name, value) {
    var oneYear = 60 * 60 * 24 * 365;
    document.cookie = name + "=" + encodeURIComponent(value) + "; max-age=" + oneYear + "; path=/";
  }

  function currentLocaleFromPath() {
    var segment = window.location.pathname.split("/").filter(Boolean)[0];
    return AVAILABLE.indexOf(segment) !== -1 ? segment : "de";
  }

  function preferredLocale() {
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "de"];
    for (var i = 0; i < langs.length; i++) {
      var primary = langs[i].toLowerCase().split("-")[0];
      if (primary === "de") return "de";
      if (primary === "no" || primary === "nn") primary = "nb"; // Norwegian variants -> Bokmål
      if (AVAILABLE.indexOf(primary) !== -1) return primary;
    }
    return "de";
  }

  var current = currentLocaleFromPath();

  if (getCookie(COOKIE_NAME) === null) {
    var wanted = preferredLocale();
    if (wanted !== current) {
      var parts = window.location.pathname.split("/").filter(Boolean);
      if (AVAILABLE.indexOf(parts[0]) !== -1) parts.shift();
      var rest = parts.join("/");
      var target = wanted === "de" ? "/" + rest : "/" + wanted + "/" + rest;
      setCookie(COOKIE_NAME, wanted);
      window.location.replace(target + window.location.search + window.location.hash);
      return;
    }
  }

  setCookie(COOKIE_NAME, current);
})();
