document.addEventListener("DOMContentLoaded", function() {
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
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
        let daysContainer = document.querySelector(".days");
        daysContainer.innerHTML = `
          <div class="day">Dom</div>
          <div class="day">Lun</div>
          <div class="day">Mar</div>
          <div class="day">Mié</div>
          <div class="day">Jue</div>
          <div class="day">Vie</div>
          <div class="day">Sáb</div>
        `;
        let firstDay = new Date(year, month, 1).getDay();
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        let today = new Date();
  
        for (let i = 0; i < firstDay; i++) {
            let emptyCell = document.createElement("div");
            emptyCell.classList.add("number");
            daysContainer.appendChild(emptyCell);
        }
  
        for (let day = 1; day <= daysInMonth; day++) {
            let dayCell = document.createElement("div");
            dayCell.classList.add("number");
            dayCell.textContent = day;
            if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayCell.classList.add("active");
            }
            daysContainer.appendChild(dayCell);
        }
  
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
  