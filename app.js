const checkbox = document.getElementById('checkbox');

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('dark-mode');
  checkbox.checked = false;
});

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
  }
});
 


// / Service details toggle functionality
let buttons = document.querySelectorAll(".sbtn");
let details = document.querySelectorAll(".services_detail");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        for (let j = 0; j < details.length; j++) {
            details[j].classList.remove("active");
        }
        details[i].classList.add("active");
    });
}

//   section-6
document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link");
    let imageContainer = document.getElementById("imageContainer");

    function loadImages(imageList) {
      imageContainer.innerHTML = ""; // Clear old images
      const images = imageList.split(",");
      images.forEach(src => {
        const img = document.createElement("img");
        img.src = src.trim();
        img.className = "card-img-top";
        imageContainer.appendChild(img);
      });
      imageContainer.style.display = "flex"; // Show after images load
    }

    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
        this.classList.add("color")

        const images = this.getAttribute("data-images");
        if (images) {
          loadImages(images);
        }
      });
    });
  });


  
  // const checkbox = document.getElementById('checkbox');
  // const body = document.body;
  
  // // Load saved mode if exists
  // if (localStorage.getItem('theme') === 'dark') {
  //   body.classList.add('dark-mode');
  //   checkbox.checked = true;
  // }
  
  // checkbox.addEventListener('change', () => {
  //   body.classList.toggle('dark-mode');
  
  //   // Save mode
  //   if (body.classList.contains('dark-mode')) {
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     localStorage.setItem('theme', 'light');
  //   }
  
  //   // Scroll to top smoothly
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // });
  
