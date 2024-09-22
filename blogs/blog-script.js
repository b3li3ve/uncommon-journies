
  // Wait until the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    // Get the form element and attach a submit event listener
    document.getElementById("comment-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Get the values of the name and comment fields
      const name = document.getElementById("name").value.trim();
      const comment = document.getElementById("comment").value.trim();

      // Check if both fields have content
      if (name !== "" && comment !== "") {
        // Create a new comment element
        const commentElement = document.createElement("div");
        commentElement.innerHTML = `
          <p><strong>${name}:</strong> ${comment}</p>
          <hr>`;

        // Append the new comment to the comments container
        document.getElementById("comments-container").appendChild(commentElement);

        // Clear the form after submission
        document.getElementById("comment-form").reset();
      } else {
        alert("Please fill in both your name and comment.");
      }
    });
  });

