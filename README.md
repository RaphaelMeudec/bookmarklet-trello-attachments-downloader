# bookmarklet-trello-attachments-downloader

This bookmarklet helps download all attachments from a Trello card as PDFs. (Chrome only)

## Installation

- Open Bookmarks panel
- Click "Add a bookmark"
- A window appears with options "Name" and "URL":
  - Choose a name that suits you
  - Copy-paste the following code in "url"
- You can now open a Trello card and click the bookmark to download all files as PDF

## Code to copy-paste in URL

```
javascript:(function()%7Bfunction downloadURI(uri%2C name) %7Bvar link %3D document.createElement("a")%3Blink.target %3D "_blank"%3Blink.download %3D name%3Blink.href %3D uri%3Bdocument.body.appendChild(link)%3Blink.click()%3Bdocument.body.removeChild(link)%3Bdelete link%3B%7Dvar elements %3D document.getElementsByClassName("attachment-thumbnail-preview")%3Bvar newScript %3D document.createElement("script")%3BnewScript.onload %3D function() %7Bfor (var i%3D0%3B i<elements.length%3B i%2B%2B)%7Bconst url %3D elements%5Bi%5D.href%3Bif (url.endsWith('png') %7C%7C url.endsWith('jpg') %7C%7C url.endsWith('jpeg')) %7BsetTimeout(function() %7BprintJS(url%2C 'image')%7D%2C i*1500)%3B%7D else %7BdownloadURI(url%2C url.substring(url.lastIndexOf("%2F")%2B1))%3B%7D%7D%3B%7D%3BnewScript.src %3D "https%3A%2F%2Fprintjs-4de6.kxcdn.com%2Fprint.min.js"%3Bdocument.body.appendChild(newScript)%7D)()
```
