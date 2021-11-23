"use strict";

const $ = (selector) => document.querySelector(selector);

const sitename = $('#sitename');
const signup = $('#signup');
const signin = $('#signin');
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

signin.addEventListener('click', async (e) => {
  let response = await fetch(`${SERVER}/users/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
    body: JSON.stringify({
      email: $('#signin-email').value,
      password: $('#signin-password').value,
    }),
	});

	if (response.status === 200) {
    console.log("success");
		success(await response.json());
    $('#profile').style.display= "block";
	}
  else {
		console.log("error: ${response.status}");
	}
});


signout.addEventListener('click', async(e) => {
  let response = await fetch(`${SERVER}/users/logout`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200) {
		success(await response.json());
	}
  else {
		console.log("error: ${response.status}");
  }
});