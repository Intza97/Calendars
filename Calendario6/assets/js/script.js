document.addEventListener("DOMContentLoaded", function() {
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let monthImages = [
      "assets/img/1.jpg", "assets/img/2.jpg", "assets/img/3.jpg", "assets/img/4.jpg", 
      "assets/img/5.jpg", "assets/img/6.jpg", "assets/img/7.jpg", "assets/img/8.jpg", 
      "assets/img/9.jpg", "assets/img/10.jpg", "assets/img/11.jpg", "assets/img/12.jpg"
    ];
  
    let date = new Date();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();
  
    function updateCalendar(month, year) {
      document.querySelector(".month").textContent = `${months[month]} ${year}`;
      let numbers = document.querySelectorAll(".number");
      let daysInMonth = new Date(year, month + 1, 0).getDate();
      let today = new Date();
  
      numbers.forEach((number, index) => {
        if (index < daysInMonth) {
          number.textContent = index + 1;
          if (index + 1 === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            number.classList.add("active");
          } else {
            number.classList.remove("active");
          }
        } else {
          number.textContent = "";
          number.classList.remove("active");
        }
      });
  
      document.getElementById("month-image").src = monthImages[month];
    }
  
    document.getElementById("prev-month").addEventListener("click", function() {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      updateCalendar(currentMonth, currentYear);
    });
  
    document.getElementById("next-month").addEventListener("click", function() {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      updateCalendar(currentMonth, currentYear);
    });
  
    updateCalendar(currentMonth, currentYear);
  });
  