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
      console.log("clicked");

      // Grabs the id of the element that goes by the name, "id"
      //   const id = e.target.getAttribute('data-id');
      const newlyDevoured = e.target.getAttribute("data-newdevoured");

      const burgerState = {
        devoured: newlyDevoured,
      };

      const burger_id = element.getAttribute("id");
      console.log(burger_id);

      fetch(`/api/burgers/${burger_id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(burgerState),
      }).then((response) => {
        // Check that the response is all good
        // Reload the page so the user can see the new quote
        if (response.ok) {
          console.log(`burger changed to: ${newlyDevoured}`);
          location.reload("/");
        } else {
          alert("something went wrong!");
        }
      });
    });
  });
}
