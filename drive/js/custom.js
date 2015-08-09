/* eslint-env browser */
(function () {
    'use strict';

    var $ = document.querySelectorAll.bind(document);

    // license realignment
    var createImageLicense = function () {
        var activeSlide = $('section.present')[1] || $('section.present')[0],
            artist,
            artistLink,
            image,
            imageLink,
            license,
            licenseLink,
            licenseCredentials = $('.license')[0] || document.createElement('div');

        while (licenseCredentials.firstChild) {
            licenseCredentials.removeChild(licenseCredentials.firstChild);
        }

        if (activeSlide.getAttribute('data-background') === null) {
            return;
        }

        artist = {
            name: activeSlide.getAttribute('data-background-artist'),
            link: activeSlide.getAttribute('data-background-artist-link')
        };

        image = {
            title: activeSlide.getAttribute('data-background-title'),
            origin: activeSlide.getAttribute('data-background-origin')
        };

        license = {
            name: activeSlide.getAttribute('data-background-license'),
            link: activeSlide.getAttribute('data-background-license-link')
        };

        licenseCredentials.className = 'license';

        if (image.title !== null && image.origin !== null) {
            imageLink = document.createElement('a');
            imageLink.setAttribute('href', image.origin);
            imageLink.setAttribute('target', '_blank');
            imageLink.innerHTML = image.title;
            licenseCredentials.appendChild(imageLink);
        }

        if (artist.name !== null && artist.link !== null) {
            artistLink = document.createElement('a');
            artistLink.setAttribute('href', artist.link);
            artistLink.setAttribute('target', '_blank');
            artistLink.innerHTML = ' by ' + artist.name;
            licenseCredentials.appendChild(artistLink);
        }

        if (license.name !== null && license.link !== null) {
            licenseLink = document.createElement('a');
            licenseLink.setAttribute('href', license.link);
            licenseLink.setAttribute('target', '_blank');
            licenseLink.innerHTML = ', under ' + license.name;
            licenseCredentials.appendChild(licenseLink);
        }

        $('.reveal')[0].appendChild(licenseCredentials);
    };

    $('body')[0].addEventListener('slidechanged', function () {
        // Event still points to the current slide
        setTimeout(createImageLicense, 10);
    });
}());
