function generateQRCode() {
  // Get the URL input value
  var url = document.getElementById('urlInput').value.trim();

  // Check if the input is not empty
  if (url !== '') {
    // Clear previous QR code
    document.getElementById('qrcode').innerHTML = '';

    // Generate the QR code
    var qrcode = new QRCode(document.getElementById('qrcode'), {
      text: url,
      width: 128,
      height: 128
    });
  } else {
    alert('Please enter a valid URL.');
  }
}

urlInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
      // If Enter key is pressed, trigger the click event on the "Generate QR Code" button
      generateQRCode();
  }
});