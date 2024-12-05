// Get today's date and calculate progress
const today = new Date();
const day = today.getDate();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const month = monthNames[today.getMonth()];
const year = today.getFullYear();

document.getElementById('date').textContent = `${month} ${day}, ${year}`;

// حساب اليوم الحالي من السنة
const totalDaysInYear = (year % 4 === 0) ? 366 : 365;
const dayOfYear = Math.floor((today - new Date(year, 0, 0)) / 1000 / 60 / 60 / 24);

// حساب التقدم ونسبته
const weekDay = today.getDay() || 7; // تحويل الأحد ليكون اليوم 7 بدلاً من 0
const weekProgress = ((weekDay / 7) * 100).toFixed(1);
const monthProgress = ((day / 31) * 100).toFixed(1);
const yearProgress = ((dayOfYear / totalDaysInYear) * 100).toFixed(1);

// عرض اليوم الحالي داخل الشريط
document.getElementById('week-percentage').textContent = `${weekProgress}%`;
document.getElementById('week-day').textContent = `Day ${weekDay} of 07`;

document.getElementById('month-percentage').textContent = `${monthProgress}%`;
document.getElementById('month-day').textContent = `Day ${day} of 31`;

document.getElementById('year-percentage').textContent = `${yearProgress}%`;
document.getElementById('year-day').textContent = `Day ${dayOfYear} of ${totalDaysInYear}`;

// Set progress bars with animation
setTimeout(() => {
  document.getElementById('week-progress').style.width = `${weekProgress}%`;
  document.getElementById('month-progress').style.width = `${monthProgress}%`;
  document.getElementById('year-progress').style.width = `${yearProgress}%`;
}, 500); // Delay for smooth loading animation
