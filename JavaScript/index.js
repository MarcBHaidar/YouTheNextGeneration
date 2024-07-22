function toggleMenu() {
    var links = document.querySelector('.navbar .links');
    var hamburger = document.querySelector('.hamburger');
    links.classList.toggle('active');
    hamburger.classList.toggle('active'); // This line toggles the .active class on the hamburger 
}


document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the link from navigating.
        // Find the next sibling dropdown-menu and toggle it
        this.nextElementSibling.classList.toggle('show');
    });
});

// Close dropdown if clicked outside
document.addEventListener('click', function(event) {
    const isClickInside = event.target.closest('.dropdown') || event.target.classList.contains('dropdown-toggle');

    if (!isClickInside) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});

const revealTextElements = document.querySelectorAll('.reveal-text');

function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight - 200 && /* adjust the offset to trigger the animation earlier */
    rect.bottom >= 0
  );
}
    
window.addEventListener('scroll', () => {
  revealTextElements.forEach((element) => {
    if (isElementInView(element)) {
      element.classList.add('animate');
    } else {
      element.classList.remove('animate');
    }
  });
});

const teamContainer = document.getElementById('teamContainer');
let autoScroll;

function scrollLeft() {
    const width = teamContainer.clientWidth;
    teamContainer.scrollBy({ left: -width, behavior: 'smooth' });
}

function scrollRight() {
    const width = teamContainer.clientWidth;
    teamContainer.scrollBy({ left: width, behavior: 'smooth' });
}

function startAutoScroll() {
    autoScroll = setInterval(scrollRight, 5000);
}

function stopAutoScroll() {
    clearInterval(autoScroll);
}

teamContainer.addEventListener('mouseenter', stopAutoScroll);
teamContainer.addEventListener('mouseleave', startAutoScroll);

startAutoScroll();


// Contact form
function sendMail() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var age = document.getElementById("age").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var email = document.getElementById("email").value;
  var instagram = document.getElementById("instagram").value;
  var message = document.getElementById("message").value;  

  var body = "Name: " + firstName + " " + lastName + "\n"
    + "Age: " + age + "\n"
    + "Phone Number: " + phoneNumber + "\n"
    + "Email: " + email + "\n"
    + "Instagram: " + instagram + "\n"
    + "Message: " + message;

  var link = "mailto:marcbouhaidar8@gmail.com"
      + "?cc="
      + "&body=" + body;

  window.location.href = link;
}