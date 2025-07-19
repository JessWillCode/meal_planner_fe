const calendarGrid = document.getElementById("calendarGrid");
for (let i = 0; i < 30; i++) {
  const day = document.createElement("div");
  day.classList.add("calendar-day", "off");
  day.innerText = `Day ${i + 1}`;
  day.onclick = () => {
    day.classList.toggle("workout");
    day.classList.toggle("off");
  };
  calendarGrid.appendChild(day);
}
const diaryTableBody = document.getElementById("diaryTableBody");
const addDiaryRowBtn = document.getElementById("addDiaryRowBtn");

addDiaryRowBtn.addEventListener("click", () => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><input type="text" Month="e.g. May" /></td>
    <td><input type="number" Day="e.g. 8" /></td>
    <td><input type="text" Hour="e.g. 12 PM" /></td>
    <td><input type="text" Meal Question="What Do you Want To Eat This Week?" /></td>
  `;

  diaryTableBody.appendChild(row);
});
