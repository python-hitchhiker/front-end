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
  })

  if (sessionStorage.getItem("isLoggedIn") === "true") {
    $('#profile').style.display= "block";
    $('#signup').style.display= "none";
    $('#signin').style.display= "none";
  }
  else {
    // snackbar notification: 로그인 실패 메시지
    console.log("로그인 실패");
  }
});

signout.addEventListener('click', function(e) {
  fetch(`${SERVER}/users/logout`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => response.json())
  .then((json) => {
    sessionStorage.setItem("isLoggedIn", false);
  })

  if (sessionStorage.getItem("isLoggedIn") === "false") {
    $('#profile').style.display= "none";
    $('#signup').style.display= "block";
    $('#signin').style.display= "block";
  }
  else {
    console.log("로그아웃 실패");
  }
});