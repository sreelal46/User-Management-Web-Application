document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const tableRows = document.querySelectorAll("tbody tr");

  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.trim().toLowerCase();

    tableRows.forEach((row) => {
      const nameCell = row.querySelector("td:nth-child(2)");
      const emailCell = row.querySelector("td:nth-child(3)");

      const nameText = nameCell ? nameCell.textContent.toLowerCase() : "";
      const emailText = emailCell ? emailCell.textContent.toLowerCase() : "";

      // Match if name OR email contains the search string
      if (nameText.includes(searchValue) || emailText.includes(searchValue)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
});
