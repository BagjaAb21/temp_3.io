function showFAQ(element) {
    const content = element.querySelector(".faq-content");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }  
  
  document.addEventListener("click", function(event) {
    if (event.target.classList.contains("faq-item")) {
      showFAQ(event.target);
    }
  });
  

const copyrightYearElement = document.getElementById('copyright-year');
const currentYear = new Date().getFullYear();
copyrightYearElement.textContent = currentYear;
