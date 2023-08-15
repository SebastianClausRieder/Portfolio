// Social Media and E-Mail Functions

function scrollToSection(level) {
    if (level === 'about') {
        document.querySelector('#about-me').scrollIntoView({ behavior: 'smooth'});
    } else if (level === 'skills') {
        document.querySelector('#my-skills').scrollIntoView({ behavior: 'smooth'});
    } else if (level === 'portfolio') {
        document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth'});
    } else if (level === 'contact') {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth'});
    } else if (level === 'start') {
        document.querySelector('#start').scrollIntoView({ behavior: 'smooth'});
    }
}

function goTo(platform) {
      if (platform === 'git') {
        window.open('https://github.com/SebastianClausRieder');
    } if (platform === 'facebook') {
        window.open('https://www.facebook.com/SebastianClausRieder');
    } if (platform === 'insta') {
        window.open('https://www.instagram.com/sebastianclausrieder');
    }
}

function mailTo() {
    let email = "sebastian.rieder@live.com";
    window.location.href = "mailto:" + email;    
}

function goToDA() {
    window.open('https://developerakademie.com/?gad=1&gclid=Cj0KCQjwuNemBhCBARIsADp74QQhxGQdaJfXgmvInjBsE8MaWcipeXND7Cp_6IHbeBExyjeZxKXs3DAaArdMEALw_wcB');    
}

function goToSide(side) {
      if (side === 'lagerfeuer') {
        window.open('https://sebastian-rieder.developerakademie.net/Gruppenarbeit%20Lagerfeuer-Gen%C3%BCsse/start.html');
    } if (side === 'lieferino') {
        window.open('https://sebastian-rieder.developerakademie.net/Lieferino/index.html');
    } if (side === 'join') {
        window.open('https://sebastian-rieder.developerakademie.net/Join/index-login.html');
    }
}

function goToGitHub(gitHub) {
      if (gitHub === 'lagerfeuer') {
        window.open('https://github.com/SebastianClausRieder/Lagerfeuer-Genuesse');
    } if (gitHub === 'lieferino') {
        window.open('https://github.com/SebastianClausRieder/Lieferino');
    } if (gitHub === 'join') {
        window.open('https://github.com/SebastianClausRieder/Join');
    }
}

function openLegal() {
    document.getElementById('legal').classList.add('d-show');    
}

function closeLegal() {
    document.getElementById('legal').classList.remove('d-show');
}

window.addEventListener("scroll", function (event) {
    let windowWidth = this.window.innerWidth;
    let scroll = this.scrollY;
    if (windowWidth > 1000) {
        if (scroll > 50) {
            document.getElementById('navbar').classList.add('posi-fix');            
        } else {
            document.getElementById('navbar').classList.remove('posi-fix');
        }
        
        if (scroll > 400) {
            document.getElementById('navbar-my-name').classList.add('d-show');
            document.getElementById('back-btn').classList.add('d-show');
        } else {
            document.getElementById('navbar-my-name').classList.remove('d-show');
            document.getElementById('back-btn').classList.remove('d-show');
        }
    } else if (windowWidth > 600 && windowWidth <= 1000) {
        if (scroll > 20) {
            document.getElementById('navbar').classList.add('posi-fix');            
        } else {
            document.getElementById('navbar').classList.remove('posi-fix');
        }

        if (scroll > 260) {
            document.getElementById('navbar-my-name').classList.add('d-show');
            document.getElementById('back-btn').classList.add('d-show');
        } else {
            document.getElementById('navbar-my-name').classList.remove('d-show');
            document.getElementById('back-btn').classList.remove('d-show');
        }
    } else {
        if (scroll > 375) {
            document.getElementById('navbar').classList.add('posi-fix');
            document.getElementById('back-btn').classList.add('d-show');
        } else {
            document.getElementById('navbar').classList.remove('posi-fix');
            document.getElementById('back-btn').classList.remove('d-show');
        }
    }
});
