function adCheck() {
var ads = document.getElementsByClassName("q-click-wrapper qu-display--inline-block qu-tapHighlight--white qu-cursor--pointer qu-hover--textDecoration--underline";
var adCount = ads.length;
for (i = adCount; i != 0; i--) {
	ads[i].innerHTML = null;
} }
var refreshID = setInterval(adCheck, 1000);
window.onbeforeunload = function() {
	clearInterval(refreshID);
};
