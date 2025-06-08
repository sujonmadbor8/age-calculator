document.getElementById("age_cal").addEventListener("click", function () {
  const dob = document.getElementById("dob").value;
  const result = document.getElementById("result");

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

  if (birthDate >= today) {
    result.textContent = "Add a valid date (must be at least 1 day old).";
    result.classList.add("show", "show_w");
    return;
  }

  // Difference in total days
  const diffTime = today - birthDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Start with base date difference
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

  // Force display of true days if under 1 month
  if (diffDays < 31) {
    years = 0;
    months = 0;
    days = diffDays;
  }

  result.textContent = `Your age is: ${years} ${
    years === 1 ? "year" : "years"
  } ${months} ${months === 1 ? "month" : "months"} ${days} ${
    days === 1 ? "day" : "days"
  }.`;
});

// document.getElementById("getUserBtn").addEventListener("click", async () => {
//   const res = await fetch("https://randomuser.me/api");
//   const data = await res.json();

//   const user = data.results[0];
//   const photo = user.picture.large;
//   const name = `${user.name.first} ${user.name.last}`;
//   const gender = `${user.gender}`;
//   const email = `${user.email}`;

//   document.getElementById("userInfo").innerHTML = `
//   <img src="${photo}">
//   <h1>${name}</h1>
//   <h2>${gender}</h2>
//   <a href="mailto: ${email}">${email}</a>
//   `;
// });
