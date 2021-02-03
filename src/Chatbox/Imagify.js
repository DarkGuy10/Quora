
var messages = document.getElementsByClassName('message_text');
function loadImg() {
    for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        if (message.innerText.startsWith("img:"))
            try{
                var urlToImage = message.childNodes[0].childNodes[1].childNodes[0].getAttribute('href');
                message.innerHTML = "<img src='" + urlToImage + "\' class='addedImg'>";
            } catch(err)
            {
                console.log(err.message);
            }
    }                                                    
}

var x = setInterval(loadImg, 1000);