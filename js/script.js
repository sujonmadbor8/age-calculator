document.getElementById("age_cal").addEventListener("click", function () {
  const dob = document.getElementById("dob").value;
  const result = document.getElementById("result");

  result.classList.remove("show", "show_w");

  if (!dob) {
    result.textContent = "Please enter a valid date of birth.";
    result.classList.add("show");
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  // Remove time part
  birthDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  if (birthDate >= today || isNaN(birthDate.getTime())) {
    result.textContent = "Add a valid date (must be at least 1 day old).";
    result.classList.add("show", "show_w");
    return;
  }

  const diffTime = today - birthDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (diffDays < 31) {
    years = 0;
    months = 0;
    days = diffDays;
  }

  result.textContent = `Your age is: ${years} ${
    years === 1 ? "year" : "years"
  }, ${months} ${months === 1 ? "month" : "months"}, and ${days} ${
    days === 1 ? "day" : "days"
  }.`;
  result.classList.add("show");
});
