function decodeToken() {
	const jwtTokenInput = document.getElementById('jwtTokenInput').value.trim();
	if (!jwtTokenInput) {
	  alert('Please paste a JWT token to decode.');
	  return;
	}

	try {
	  const [headerBase64, payloadBase64, signatureBase64] = jwtTokenInput.split('.');

	  const decodedHeader = JSON.parse(atob(headerBase64));
	  const decodedPayload = JSON.parse(atob(payloadBase64));

	  document.getElementById('headerResult').textContent = JSON.stringify(decodedHeader, null, 2);
	  document.getElementById('payloadResult').textContent = JSON.stringify(decodedPayload, null, 2);
	  document.getElementById('signatureResult').textContent = atob(signatureBase64);
	} catch (error) {

	//   alert('Error decoding the JWT token. Please make sure the token is valid.');
	}
  }
