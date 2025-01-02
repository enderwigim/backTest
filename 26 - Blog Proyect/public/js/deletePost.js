document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".btn-delete");
    const modal = document.getElementById("confirmModal");
    const cancelDelete = document.getElementById("cancelDelete");

    // Show the modal when any delete button is clicked
    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            modal.style.display = "flex"; // Show the modal
        });
    });

    // Hide the modal when the cancel button is clicked
    cancelDelete.addEventListener("click", () => {
        modal.style.display = "none"; // Hide the modal
    });

    // Optional: Close the modal if user clicks outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});