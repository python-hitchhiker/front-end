"use strict";

const SERVER = "http://localhost:3000"

const $ = (selector) => document.querySelector(selector);

const sitename = $('#sitename');
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

signin.addEventListener('click', async (e) => {
  let response = await fetch(SERVER/user/login, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
    body: JSON.stringify({
      email: "#email",
      password: "#password",
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

signout.addEventListener('click', function(e) {
  // 로그아웃
  location.href=firstPage;
  location.replace(firstPage);
});