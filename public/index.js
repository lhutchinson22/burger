console.log("sanity check");

// Add a new burger
const burgerInput = document.querySelector("#burger_Input");
const burgerSubmit = document.querySelector("#submitButton");

burgerSubmit.addEventListener("click", (e) => {
  //   console.log("submitted new burger");
  if (burgerSubmit) {
    e.preventDefault();

    // Grabs the value of the textarea
    const newBurger = {
      burger_name: burgerInput.value.trim(),
    };

    // Send POST request to create a new quote
    fetch("/api/burgers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      // make sure to serialize the JSON body
      body: JSON.stringify(newBurger),
    }).then(() => {
      // Empty the form
      document.getElementById("burger_Input").value = "";

      // Reload the page so the user can see the new quote
      console.log("NEW BURGER ADDED.");
      //   location.reload();
    });
  }
});

// UPDATE
const devorBurger = document.querySelectorAll(".devouredId");

if (devorBurger) {
  devorBurger.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();

      // Grabs the id of the element that goes by the name, "id"
      //   const id = e.target.getAttribute('data-id');
      const newSleep = e.target.getAttribute("data-newsleep");

      const newSleepState = {
        sleepy: newSleep,
      };

      fetch(`/api/cats/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newSleepState),
      }).then((response) => {
        // Check that the response is all good
        // Reload the page so the user can see the new quote
        if (response.ok) {
          console.log(`changed sleep to: ${newSleep}`);
          location.reload("/");
        } else {
          alert("something went wrong!");
        }
      });
    });
  });
}
