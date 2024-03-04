const toggleBtn = document.querySelector(".mobile-toggle");
const navItems = document.querySelector(".nav-items");

toggleBtn.addEventListener("click", () => {
  navItems.classList.toggle("active");
});
function createShapes() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("id", "background-svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.style.position = "fixed";
  svg.style.top = "0";
  svg.style.left = "0";
  svg.style.pointerEvents = "none"; // Ensure the shapes do not interfere with interactions

  const numShapes = 20; // Adjust the number of shapes as needed

  for (let i = 0; i < numShapes; i++) {
    const shape = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    shape.setAttribute("cx", Math.random() * window.innerWidth);
    shape.setAttribute("cy", Math.random() * window.innerHeight);
    shape.setAttribute("r", Math.random() * 50);
    shape.style.fill = "rgba(255, 255, 255, 0.1)"; // Adjust the color and transparency

    svg.appendChild(shape);
  }

  document.body.appendChild(svg);
}

// Function to move shapes automatically
function moveShapes() {
  const shapes = document.querySelectorAll("#background-svg circle");

  shapes.forEach((shape) => {
    const speedX = Math.random() * 2 - 1; // Random horizontal speed between -1 and 1
    const speedY = Math.random() * 2 - 1; // Random vertical speed between -1 and 1

    setInterval(() => {
      let newX = parseFloat(shape.getAttribute("cx")) + speedX;
      let newY = parseFloat(shape.getAttribute("cy")) + speedY;

      // Wrap around the screen
      if (newX < 0 || newX > window.innerWidth) {
        newX = Math.random() * window.innerWidth;
      }
      if (newY < 0 || newY > window.innerHeight) {
        newY = Math.random() * window.innerHeight;
      }

      shape.setAttribute("cx", newX);
      shape.setAttribute("cy", newY);
    }, 100); // Adjust the interval for smoother or faster movement
  });
}

// Call the function to create shapes when the page loads
window.onload = function () {
  createShapes();
  moveShapes();
};
// Function to create and append SVG shapes to the background
function createShapes() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("id", "background-svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.style.position = "fixed";
  svg.style.top = "0";
  svg.style.left = "0";
  svg.style.pointerEvents = "none"; // Ensure the shapes do not interfere with interactions

  const numShapes = 20; // Adjust the number of shapes as needed

  for (let i = 0; i < numShapes; i++) {
    let shape;
    if (Math.random() < 0.5) {
      // Create a circle
      shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      shape.setAttribute("cx", Math.random() * window.innerWidth);
      shape.setAttribute("cy", Math.random() * window.innerHeight);
      shape.setAttribute("r", Math.random() * 50);
    } else {
      // Create a square
      shape = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      shape.setAttribute("x", Math.random() * window.innerWidth);
      shape.setAttribute("y", Math.random() * window.innerHeight);
      shape.setAttribute("width", Math.random() * 50);
      shape.setAttribute("height", Math.random() * 50);
    }

    shape.style.fill = "rgba(255, 255, 255, 0.1)"; // Adjust the color and transparency

    svg.appendChild(shape);
  }

  document.body.appendChild(svg);
}
// Function to move shapes automatically
function moveShapes() {
  const shapes = document.querySelectorAll(
    "#background-svg circle, #background-svg rect"
  );

  shapes.forEach((shape) => {
    const speedX = Math.random() * 2 - 1; // Random horizontal speed between -1 and 1
    const speedY = Math.random() * 2 - 1; // Random vertical speed between -1 and 1

    setInterval(() => {
      let newX =
        parseFloat(shape.getAttribute("cx") || shape.getAttribute("x")) +
        speedX;
      let newY =
        parseFloat(shape.getAttribute("cy") || shape.getAttribute("y")) +
        speedY;

      // Wrap around the screen
      if (newX < 0 || newX > window.innerWidth) {
        newX = Math.random() * window.innerWidth;
      }
      if (newY < 0 || newY > window.innerHeight) {
        newY = Math.random() * window.innerHeight;
      }

      if (shape.tagName === "circle") {
        shape.setAttribute("cx", newX);
        shape.setAttribute("cy", newY);
      } else if (shape.tagName === "rect") {
        shape.setAttribute("x", newX);
        shape.setAttribute("y", newY);
      }
    }, 100); // Adjust the interval for smoother or faster movement
  });
}

// tools we use slider start
document.addEventListener("DOMContentLoaded", function () {
  // Get slider and slides
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");

  // Clone first and last slide for infinite loop
  const firstSlideClone = slides[0].cloneNode(true);
  const lastSlideClone = slides[slides.length - 1].cloneNode(true);

  // Append cloned slides to slider
  slider.appendChild(firstSlideClone);
  slider.insertBefore(lastSlideClone, slides[0]);

  // Initialize slide index and translate value
  let slideIndex = 1; // Start with first cloned slide
  let translateValue = -slideIndex * (slides[0].offsetWidth + 20); // 20px for margin between slides
  slider.style.transition = "none"; // Disable transition for initial positioning
  slider.style.transform = `translateX(${translateValue}px)`;

  // Function to slide to the next set of slides
  function slideNext() {
    slideIndex++;
    translateValue = -slideIndex * (slides[0].offsetWidth + 20); // 20px for margin between slides
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(${translateValue}px)`;
  }

  // Transitionend event listener to handle infinite looping
  slider.addEventListener("transitionend", function () {
    if (slideIndex === slides.length - 1) {
      slideIndex = 1;
      translateValue = -slideIndex * (slides[0].offsetWidth + 20); // 20px for margin between slides
      slider.style.transition = "none";
      slider.style.transform = `translateX(${translateValue}px)`;
    }
    if (slideIndex === 0) {
      slideIndex = slides.length - 2;
      translateValue = -slideIndex * (slides[0].offsetWidth + 20); // 20px for margin between slides
      slider.style.transition = "none";
      slider.style.transform = `translateX(${translateValue}px)`;
    }
  });

  // Auto slide to next set of slides
  setInterval(slideNext, 2000); // Adjust the timing (in milliseconds) as needed
});
// JavaScript for form validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Validate form fields
        const fullName = form.querySelector('input[name="fullname"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const phoneNumber = form.querySelector('input[name="phone"]').value.trim();
        const companyName = form.querySelector('input[name="company"]').value.trim();
        const website = form.querySelector('input[name="website"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        if (!fullName || !email || !phoneNumber || !message) {
            alert("Please fill out all required fields.");
            return;
        }

        // Additional validation can be added here

        // Submit the form
        form.submit();
    });
});
// go to top button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopButton = document.getElementById("goToTopBtn");

  // Show button when user scrolls down 20px from the top
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
