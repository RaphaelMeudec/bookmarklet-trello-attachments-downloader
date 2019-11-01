function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.target = "_blank";
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}

var elements = document.getElementsByClassName("attachment-thumbnail-preview");

var newScript = document.createElement("script");
newScript.onload = function() {
  for (var i=0; i<elements.length; i++){
    const url = elements[i].href;

    if (url.endsWith('png') || url.endsWith('jpg') || url.endsWith('jpeg')) {
      setTimeout(function() {printJS(url, 'image')}, i*1500);
    } else {
      downloadURI(url, url.substring(url.lastIndexOf("/")+1));
    }
  };
};
newScript.src = "https://printjs-4de6.kxcdn.com/print.min.js";
document.body.appendChild(newScript);
