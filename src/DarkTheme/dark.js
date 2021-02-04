// grab original css
var originCSS = document.body.style;

// initial check
if (window.matchMedia('prefers-color-scheme: dark').matches) document.body.style.src = "/DarkTheme.css";

// Even listener for changes in system preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detect => {
    if (window.matchMedia('prefers-color-scheme: dark').matches) {
        document.body.style = originCSS;
     } else {
        document.body.style.src = "/DarkTheme.css";
}
});
