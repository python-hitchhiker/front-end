"use strict";

const $ = (selector) => document.querySelector(selector);

const sitename = $('#sitename');
const signup = $('#signup-submit');
const signin = $('#signin-submit');
const signout = $('#signout');

const firstPage = 'index.html';

sitename.addEventListener('click', function (e) {
  e.preventDefault();
  location.href=firstPage;
  location.replace(firstPage);
});

signup.addEventListener('click', async (e) => {
  let response = await fetch(`${SERVER}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
    body: JSON.stringify({
      email: $('#signup-email').value,
      password: $('#signup-password').value,
      username: $('#signup-username').value,
    }),
	});

	if (response.status === 200) {
		success(await response.json());
	}
  else {
		console.log("error: ${response.status}");
	}
});

signin.addEventListener('click', function (e) {
  fetch(`${SERVER}/users/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
    body: JSON.stringify({
      email: $('#signin-email').value,
      password: $('#signin-password').value,
    }),
	})
  .then((response) => response.json())
  .then((json) => {
    sessionStorage.setItem("isLoggedIn", true);
    sessionStorage.setItem("email", json.email);
    sessionStorage.setItem("id", json.id);
    sessionStorage.setItem("progress", json.progress);
    $('#modal-signin').style.display= "none";
    $('#profile').style.display= "block";
    $('#signup').style.display= "none";
    $('#signin').style.display= "none";
  });

  // if (response.status === 200) {
  //   console.log("success");
	// 	// success(await response.json());
  //   $('#profile').style.display= "block";
  //   $('#signup').style.display= "none";
  //   $('#signin').style.display= "none";
	// }
  // else {
	// 	console.log("error: ${response.status}");
	// }
});

signout.addEventListener('click', async(e) => {
  let response = await fetch(`${SERVER}/users/logout`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

<<<<<<< HEAD
  // if (response.status === 200) {
  //   $('#profile').style.display= "none";
  //   $('#signup').style.display= "block";
  //   $('#signin').style.display= "block";
	// }
  // else {
	// 	console.log("error: ${response.status}");
  // }
=======
  if (response.status === 200) {
		// success(await response.json());
    $('#profile').style.display= "none";
    $('#signup').style.display= "block";
    $('#signin').style.display= "block";
	}
  else {
		console.log("error: ${response.status}");
  }
>>>>>>> parent of c8cfc46 (Session storage)
});