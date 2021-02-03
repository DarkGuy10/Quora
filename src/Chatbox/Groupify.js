
// Cooking the Box


var groupMsgBox = document.createElement("div");
groupMsgBox.classList.add('group_msg_box');

var boxHeader = document.createElement('div');
boxHeader.classList.add('box_header');
var groupName = document.createElement('span');
groupName.classList.add('group_name');
groupName.innerText = "GROUP NAME";
var groupMembers = document.createElement('span');
groupMembers.classList.add('group_members');
groupMembers.innerText = "Hover to see members";

boxHeader.appendChild(groupName);
boxHeader.appendChild(groupMembers);
groupMsgBox.appendChild(boxHeader);

var boxBody = document.createElement('div');
boxBody.classList.add('box_body');
groupMsgBox.appendChild(boxBody);

var boxFooter = document.createElement('div');
boxFooter.classList.add('box_footer');
groupMsgBox.appendChild(boxFooter);
var messageInput = document.createElement('textarea');
messageInput.classList.add('message_input');
messageInput.setAttribute('place-holder', "Your message goes here...");
var sendBtn = document.createElement('button');
sendBtn.classList.add('send_button');
sendBtn.innerText = "Send";

boxFooter.appendChild(messageInput);
boxFooter.appendChild(sendBtn);
groupMsgBox.appendChild(boxFooter);

document.body.appendChild(groupMsgBox);

var darkOverlay = document.createElement('div');
darkOverlay.classList.add('dark_overlay');
document.body.appendChild(darkOverlay);

//          Phew, finally done cooking