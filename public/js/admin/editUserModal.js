document.addEventListener("DOMContentLoaded", function () {
  const editModal = document.getElementById("editModal");
  const editForm = document.getElementById("editForm");
  const editId = document.getElementById("editId");
  const editName = document.getElementById("editName");
  const editEmail = document.getElementById("editEmail");

  editModal.addEventListener("show.bs.modal", function (event) {
    const button = event.relatedTarget;
    const id = button.getAttribute("data-id");
    const name = button.getAttribute("data-name");
    const email = button.getAttribute("data-email");

    editId.value = id;
    editName.value = name;
    editEmail.value = email;

    // Set form action dynamically
    editForm.action = `/admin/edit/${id}`;
  });
});
