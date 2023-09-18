// ==UserScript==
// @name         Spooky hunter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ncore.pro/*
// @icon         https://www.google.com/s2/favicons?domain=ncore.pro
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let counter = 219;
    let captcha = 3;

    setInterval(() => {
        const monster = document.getElementById('spo0kyD');
        if (monster) {
            if (monster.getElementsByTagName('img')[0] !== undefined) {
            	monster.getElementsByTagName('img')[0].click();

	            if (monster.getAttribute('data-recaptcha') === 'true') {
	            	captcha++;
	            	console.log('captcha');
	            	new Promise((resolve, reject) => {
	    				console.log('Waiting for captcha');
	    				setTimeout(resolve, Math.random() * (2000 - 500) + 500);
					}).then(() => {
						document.getElementsByClassName("anyanswer")[0].click();
	            		console.log('passed');
	            	});
	            }

	            counter++;
	            console.log('hit', counter);
            } else {
            	const remove = document.getElementById('removeMessage');
        		if (remove) {
        			console.log('close window');
        			remove.click();
        		}
            }
        }

        console.log(`${new Date().toString()} -spooky- hits: ${counter} - captcha ${captcha}`);
    }, Math.random() * (5500 - 4000) + 4000);
})();