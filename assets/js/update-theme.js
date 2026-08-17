/**
 * Utility function to retrieve the theme setting from the local storage.
 */
function retrieveThemeSetting({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

/**
* Utility function to update the button text and aria-label.
*/
function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "Light theme" : "Dark theme";
  buttonEl.setAttribute("aria-label", newCta);
}

/**
* Utility function to update the theme setting on the html tag
*/
function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

/**
 * Utility function to update code/highlight chunks upon theme setting changes.
 */
function updateCodeHighlightTheme() {
  const themeCheck = document.querySelector("html").getAttribute("data-theme");
  var elements = document.getElementsByClassName("highlight");

  for(const el of elements) {
    if ((themeCheck == "dark") && (!el.classList.contains("highlight-dark"))) {
      el.classList.add("highlight-dark");
    }

    if ((themeCheck == "light") && (el.classList.contains("highlight-dark"))) {
      el.classList.remove("highlight-dark");
    }
  }
}


/**
* On page load:
*/

/**
* 1. Grab what we need from the DOM and system settings on page load and disable
* any transitions (to avoid FOUC).
*/

const parent_el = document.querySelector('html');
parent_el.classList.add('preload');

const button            = document.querySelector("button[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
* 2. Retrieve the current settings.
*/
let currentThemeSetting = retrieveThemeSetting({ localStorageTheme, systemSettingDark });

/**
* 3. Update the theme setting and button text according to current settings and
* suspend our preload class theme (allowing future transitions to run).
*/
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });
updateCodeHighlightTheme();

window.addEventListener('load', function() {
  parent_el.classList.remove('preload');
});

/**
* 4. Add an event listener to toggle the theme.
*/
button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });
  updateCodeHighlightTheme();

  currentThemeSetting = newTheme;
});