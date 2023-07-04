chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "sendToWhatsApp") {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        func: function() {
          var copiedText = window.getSelection().toString();
          if (copiedText) {
            var phoneNumber = "08149214898"; // Replace with the recipient's phone number
            var message = encodeURIComponent(copiedText);
            var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + message;
            window.open(whatsappURL, "_blank");
          }
        }
      });
    }
  });
  