$(document).ready(function () {
  // First, make sure the user is on the right domain that is payper-v1.webflow.io/case-studies
  // if (window.location.href.indexOf("payper-v1.webflow.io/case-studies") > -1) {
  // Find the element with the id #grab
  var grab = document.getElementById("grab");
  // If the current URL has ?grab at the end
  if (window.location.href.indexOf("?grab") > -1) {
    // Loop through the siblings after the grab element and remove each one
    var nextSibling = grab.nextSibling;
    while (nextSibling) {
      var currentSibling = nextSibling;
      nextSibling = currentSibling.nextSibling;
      currentSibling.parentNode.removeChild(currentSibling);
    }

    // Remove #no-grab-title element
    var noGrabTitle = document.getElementById("no-grab-title");
    if (noGrabTitle) {
      noGrabTitle.parentNode.removeChild(noGrabTitle);
    }

    // Remove .top-bar element
    var topBar = document.querySelector(".top-bar");
    if (topBar) {
      topBar.parentNode.removeChild(topBar);
    }

    // Take a screenshot of the #grab element using html2canvas with higher scale for better quality
    html2canvas(grab, {
      useCORS: true,
      scale: 2,
    }).then(function (canvas) {
      // Convert the canvas to a data URL
      var imageDataURL = canvas.toDataURL();

      // Create a link element with the screenshot data
      var downloadLink = document.createElement("a");
      downloadLink.href = imageDataURL;
      downloadLink.download = "screenshot.png"; // Set the filename for the download

      // Append the link to the body and trigger the click event
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Remove the link from the DOM
      document.body.removeChild(downloadLink);
    });
  }
  // }
});
