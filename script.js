




const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars_box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');

            setTimeout( () => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
  });


  logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        setTimeout( () => {
            sections[0].classList.add('active');
        }, 1100);
    }
  });






const resumeBtns = document.querySelectorAll('.resume_btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume_detail');
       
        resumeBtns.forEach(btn => {
        btn.classList.remove('active');
       }); 
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
           });
           resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio_box .navigation .arrow_right');
const arrow_left = document.querySelector('.portfolio_box .navigation .arrow_left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio_carousel .img_slide');
    const portfolioDetails = document.querySelectorAll('.portfolio_detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
    detail.classList.remove('active');    
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 8) {
        index++;
        arrow_left.classList.remove('disabled');
    }
    else{
        index = 9;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();

});

arrow_left.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index = 0;
        arrow_left.classList.add('disabled');
    }

    activePortfolio();
});


 