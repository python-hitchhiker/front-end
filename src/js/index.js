"use strict";

const SERVER = "http://localhost:3000"

const $ = (selector) => document.querySelector(selector);

const sitename = $('#sitename');
const signup = $('#signup');
const signin = $('#signin');
const learn = $('#learn');
const signout = $('#signout');

const firstPage = 'index.html';
const studyPage = 'study.html'

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
		success(await response.json());
	}
  else {
		console.log("error: ${response.status}");
	}
});

learn.addEventListener('click', function(e) {
  location.href=studyPage;
  location.replace(studyPage);
  window.open(studyPage);
});

signout.addEventListener('click', async(e) => {
  location.href=firstPage;
  location.replace(firstPage);
});