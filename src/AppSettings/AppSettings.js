
// JS to cook up the settings modal box

var openSettings = document.createElement('button');
openSettings.classList.add('openSettings');
openSettings.innerHTML = '<i class="fas fa-fw fa-cog"></i>';

var settingsOverlay = document.createElement('div');
settingsOverlay.classList.add('settingsOverlay');

var settingsBox = document.createElement('div');
settingsBox.classList.add('settingsBox');
settingsOverlay.appendChild(settingsBox);

var settingsBoxHeader = document.createElement('h1');
settingsBoxHeader.classList.add('settingsBoxHeader');
settingsBoxHeader.innerText = 'APP SETTINGS:';
settingsBox.appendChild(settingsBoxHeader);

var settingsInnerWrapper = document.createElement('div');
settingsInnerWrapper.classList.add('settingsInnerWrapper');
settingsBox.appendChild(settingsInnerWrapper);

var closeSettings = document.createElement('button');
closeSettings.classList.add('closeSettings');
closeSettings.innerHTML = '&times;';
settingsBox.appendChild(closeSettings);

document.body.appendChild(settingsOverlay);
document.body.appendChild(openSettings);

// Now, vars cook the forms (this is the diffcult shi- EV gonna be mad if she sees this T_T I did not use the s word :/)

var settingsForm = document.createElement('form');
settingsInnerWrapper.appendChild(settingsForm);
settingsForm.innerHTML += '<p class = "settingsCategory">Theme:</p>';
settingsForm.innerHTML += '<input type = "radio" name = "theme" value = "dark" id = "darkTheme">';
settingsForm.innerHTML += '<label for = "darkTheme">Dark</label><br>';
settingsForm.innerHTML += '<input type = "radio" name = "theme" value = "light" id = "lightTheme">';
settingsForm.innerHTML += '<label for = "lightTheme">Light</label><br>';
settingsForm.innerHTML += '<input type = "radio" name = "theme" value = "default" id = "defaultTheme">';
settingsForm.innerHTML += '<label for = "defaultTheme">System Theme</label><br>';

var settingsSubmit = document.createElement('button');
settingsSubmit.innerText = "Save";
settingsSubmit.classList.add('settingsSubmit');
settingsSubmit.setAttribute('id', 'settingsSubmit');
settingsForm.appendChild(settingsSubmit);

settingsSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    var theme = settingsForm["theme"].value;
    localStorage.setItem("theme", theme);
    settingsOverlay.style.display = 'none';
    alert('Restart the app for changes to take place!');
});

function restoreOptions() {
    let theme = localStorage.getItem("theme");
    if (theme) {
        document.getElementById(theme + 'Theme').setAttribute('checked', true);
    } else {
        document.getElementById('defaultTheme').setAttribute('checked', true);
        localStorage.setItem("theme", "default");
    }
}

restoreOptions();

openSettings.addEventListener("click", () => {
    settingsOverlay.style.display = 'block';
});

closeSettings.addEventListener("click", () => {
    settingsOverlay.style.display = 'none';
});
