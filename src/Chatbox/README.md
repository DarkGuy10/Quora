## Quorantine
Authors		: @DarkGuy10<br>
Start Date  : <br>
End Date    : <br>
Language    : Javascript [Vanilla JS]<br>
Version     : 0.0 [Beta]<br>
<br>
### Description:<br>
Thhis browser extension adds a bunch of new features and certain fixes to quora.com and alikes.
<br>
## Groups:
NewGroup Button creates a 'group' by selecting a few users, combining their IDs and creating a group_id, from which the participants can be re-engineered.<br>
<b>ALERT : ONCE A GROUP IS CREATED, NEW PARTICIPANTS CANNOT BE ADDED, BCOZ WE CANNOT DO ANYTHING SERVER SIDED STUFF <b>
<br>
Once a new group is made, the the group_id gets DMed to all the added participants.<br>
All the participants must have this extension installed, else everything will get messed up.<br>
<br>
### How Are Msgs Sent?<br>
Basically, when somebody sends a message, it is DMed to everyone like this:<br>
Message Sent on Group : bruh, you're dead<br>
Actual Message DMed to participants : grp:group_id:bruh, you're dead<br>
A JS on the participant hides the DM, and shows the message inside the group chat<br>
<br>
### What else do we need?<br>
We need to figure out how to POST messages using JS<br>
Also, we need to use browser's local storage and/or cookies to store what groups the users are in.<br>
<br>
## Images:
Imagify.js controls the rendering of images in the chat-box.
Messages sent like this <br>
```
img:[link to img]
```
are replaced by the image on that link. <br>
<b>ALERT : The link must end in .png / .jpg / .gif only</b>
<br>