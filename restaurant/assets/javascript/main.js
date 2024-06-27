// Start JavaScript to toggle search form visibility
document.getElementById('searchButton').addEventListener('click', function () {
    document.getElementById('searchFormContainer').classList.remove('d-none');
});

document.getElementById('closeSearchButton').addEventListener('click', function () {
    document.getElementById('searchFormContainer').classList.add('d-none');
});
// End JavaScript to toggle search form visibility




// ================== start scroll top button ==================
        // Get the button
        let mybutton = document.getElementById("scrollToTopBtn");
  
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }

        // When the user clicks on the button, scroll to the top of the document
        mybutton.onclick = function() {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
// ================== end scroll top button ==================



// ================ start login  and register form js code========================

function toggleForm(formType) {
    let loginForm = document.querySelector('form');
    let signupForm = document.querySelector('.signup-form');
    let forgotForm = document.querySelector('.forgot-form');
  
    if (formType === 'signup') {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
      forgotForm.style.display = 'none';
    } else if (formType === 'forgot') {
      loginForm.style.display = 'none';
      signupForm.style.display = 'none';
      forgotForm.style.display = 'block';
    }
  }
// ================ end login  and register form js code========================









document.addEventListener('DOMContentLoaded', function () {
    const showMoreButton = document.getElementById('show-more');
    const showLessButton = document.getElementById('show-less');
    const hiddenCards = document.querySelectorAll('.hidden-card');

    showMoreButton.addEventListener('click', function () {
        hiddenCards.forEach(card => {
            card.style.display = 'block';
        });
        showMoreButton.style.display = 'none';
        showLessButton.style.display = 'inline-block';
    });

    showLessButton.addEventListener('click', function () {
        hiddenCards.forEach(card => {
            card.style.display = 'none';
        });
        showLessButton.style.display = 'none';
        showMoreButton.style.display = 'inline-block';
    });
});


















//=================== Room javascript =======================

$(document).ready(function () {
    $('#btn-show-more').click(function () {
        $('.hidden-card').slideDown();
        $('#btn-show-more').hide();
        $('#btn-show-less').show();
    });

    $('#btn-show-less').click(function () {
        $('.hidden-card').slideUp();
        $('#btn-show-more').show();
        $('#btn-show-less').hide();
    });
});
//=================== Room javascript =======================









