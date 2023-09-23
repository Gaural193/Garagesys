const carModelsData = {
        toyota: ["Corolla", "Camry", "Rav4"],
        honda: ["Civic", "Accord", "CR-V"],
        // Add more manufacturers and their car models as needed
    };

    // Function to populate the Car Model dropdown based on selected manufacturer
    function populateCarModels() {
        const manufacturerSelect = document.getElementById("manufacturer");
        const carModelSelect = document.getElementById("modelName");
        const selectedManufacturer = manufacturerSelect.value;

        // Clear existing options
        carModelSelect.innerHTML = "";

        // Populate with options based on selected manufacturer
        carModelsData[selectedManufacturer].forEach((model) => {
            const option = document.createElement("option");
            option.value = model;
            option.textContent = model;
            carModelSelect.appendChild(option);
        });

        // Show the Car Model dropdown
        document.getElementById("carModelGroup").style.display = "block";
    }

    // Event listener for the Manufacturer dropdown
    const manufacturerSelect = document.getElementById("manufacturer");
    manufacturerSelect.addEventListener("change", populateCarModels);

    // Initial population of Car Model dropdown when the page loads
    populateCarModels();