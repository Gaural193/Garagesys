const globalCarManufacturers = [
    "Toyota",
    "Honda",
    "Ford",
    "Hyundai",
    "BMW",
    "Mercedes-Benz",
    "Volkswagen",
    "Nissan",
    "Chevrolet (General Motors)",
    "Audi",
    "Jaguar Land Rover",
    "Volvo",
    "Kia",
    "Porsche",
    "Mitsubishi",
    "Mahindra",
    "Tata Motors",
    "Fiat",
    "Jeep (FCA)",
    "Renault",
    "Skoda",
    "Lexus",
    "Subaru",
    "Mazda",
    "Tesla",
    "Suzuki",
    "Acura",
    "Infiniti (Nissan)",
    "Genesis (Hyundai)",
    "Maserati",
    "Daihatsu (Toyota)",
    "McLaren",
    "Genesis",
    "Lamborghini",
    "Alfa Romeo (FCA)",
    "Ferrari",
    "Bentley",
    "Rolls-Royce",
    "Bugatti",
];

const carModelsData = {
    Toyota: ["Corolla", "Camry", "Rav4", "Prius", "Highlander", "Tacoma", "Sienna"],
    Honda: ["Civic", "Accord", "CR-V", "Fit", "Pilot", "Odyssey", "Insight"],
    Ford: ["F-150", "Mustang", "Escape", "Explorer", "Focus", "Edge", "Ranger"],
    Hyundai: ["Elantra", "Sonata", "Tucson", "Santa Fe", "Kona", "Palisade", "Venue"],
    BMW: ["3 Series", "5 Series", "X3", "X5", "7 Series", "X7", "i3"],
    "Mercedes-Benz": ["C-Class", "E-Class", "GLC", "GLE", "S-Class", "GLA", "GLB"],
    Volkswagen: ["Jetta", "Passat", "Tiguan", "Atlas", "Golf", "ID.4", "Arteon"],
    Nissan: ["Altima", "Rogue", "Sentra", "Maxima", "Frontier", "Murano", "Kicks"],
    "Chevrolet (General Motors)": [
        "Silverado 1500",
        "Equinox",
        "Malibu",
        "Traverse",
        "Cruze",
        "Blazer",
        "Tahoe",
    ],
    Audi: ["A3", "A4", "Q5", "Q7", "A6", "Q3", "e-tron"],
    "Jaguar Land Rover": [
        "F-PACE",
        "Range Rover Sport",
        "E-PACE",
        "Discovery Sport",
        "I-PACE",
        "Defender",
        "XE",
    ],
    Volvo: ["XC60", "XC90", "S60", "S90", "XC40", "V60", "V90"],
    Kia: ["Seltos", "Sorento", "Telluride", "Soul", "Forte", "Cadenza", "Stinger"],
    Porsche: ["911", "Cayenne", "Panamera", "Macan", "Taycan", "Boxster", "Cayman"],
    Mitsubishi: ["Outlander", "Eclipse Cross", "Outlander Sport", "Mirage"],
    Mahindra: ["XUV500", "Scorpio", "Thar", "Bolero", "XUV300", "KUV100"],
    "Tata Motors": ["Nexon", "Altroz", "Tiago", "Harrier", "Tigor", "Safari"],
    Fiat: ["500", "Panda", "Tipo", "Ducato", "124 Spider", "500X", "500L"],
    "Jeep (FCA)": ["Wrangler", "Cherokee", "Renegade", "Grand Cherokee", "Compass"],
    Renault: ["Kwid", "Triber", "Duster", "Koleos", "Captur", "Lodgy"],
    Skoda: ["Octavia", "Superb", "Karoq", "Kodiaq", "Rapid"],
    Lexus: ["RX", "NX", "ES", "UX", "LS", "GX", "LC"],
    Subaru: ["Outback", "Forester", "Crosstrek", "Legacy", "Impreza", "Ascent", "BRZ"],
    Mazda: ["CX-5", "Mazda3", "Mazda6", "CX-9", "MX-5 Miata", "CX-30"],
    Tesla: ["Model 3", "Model S", "Model X", "Model Y"],
    Suzuki: ["Swift", "Baleno", "Vitara", "S-Cross", "Celerio", "Jimny"],
    Acura: ["RDX", "MDX", "TLX", "ILX", "NSX"],
    "Infiniti (Nissan)": ["Q50", "QX60", "QX50", "QX80", "Q60", "QX30", "Q70"],
    "Genesis (Hyundai)": ["G70", "G80", "G90"],
    Maserati: ["Ghibli", "Levante", "Quattroporte"],
    "Daihatsu (Toyota)": ["Terios", "Mira", "Sirion", "Wake", "Taft", "Tanto", "Cast"],
    McLaren: ["570S", "720S", "Senna", "GT"],
    Genesis: ["G70", "G80", "G90"],
    Lamborghini: ["Huracán", "Aventador", "Urus"],
    "Alfa Romeo (FCA)": ["Giulia", "Stelvio"],
    Ferrari: ["F8 Tributo", "488 GTB", "Portofino", "Roma", "SF90 Stradale"],
    Bentley: ["Bentayga", "Continental GT", "Flying Spur"],
    "Rolls-Royce": ["Phantom", "Cullinan", "Ghost", "Wraith", "Dawn"],
    Bugatti: ["Chiron", "Veyron"],
};
// Get the select elements as variables
const manufacturerSelect = document.getElementById("manufacturer");
const carModelSelect = document.getElementById("modelName");
const carModelGroup = document.getElementById("carModelGroup");

// Function to populate the Manufacturer dropdown
function populateManufacturers() {
    // Clear existing options
    manufacturerSelect.innerHTML = "";

    // Add a default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a manufacturer";
    manufacturerSelect.appendChild(defaultOption);

    // Populate the dropdown with options from globalCarManufacturers
    globalCarManufacturers.forEach((manufacturer) => {
        const option = document.createElement("option");
        option.value = manufacturer;
        option.textContent = manufacturer;
        manufacturerSelect.appendChild(option);
    });

    // Initialize Choices.js for the Manufacturer dropdown without search
    if (manufacturerSelect.choices) {
        manufacturerSelect.choices.destroy();
    }
    new Choices(manufacturerSelect, { searchEnabled: false }); // Disable search
}

// Event listener for the form element (listen for changes in any form element)
const form = document.querySelector("form");
form.addEventListener("change", function (event) {
    if (event.target.id === "manufacturer") {
        // Manufacturer dropdown changed, update the car models
        populateCarModels();
    }
});

// Function to populate the Car Model dropdown based on selected manufacturer
function populateCarModels() {
    const selectedManufacturer = manufacturerSelect.value;

    // Clear existing options
    carModelSelect.innerHTML = "";

    // Add a default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a car model";
    carModelSelect.appendChild(defaultOption);

    // Populate with options based on selected manufacturer
    if (carModelsData[selectedManufacturer]) {
        carModelsData[selectedManufacturer].forEach((model) => {
            const option = document.createElement("option");
            option.value = model;
            option.textContent = model;
            carModelSelect.appendChild(option);
        });
        // Show the Car Model dropdown
        carModelGroup.style.display = "block";
    } else {
        // Hide the Car Model dropdown and show a message
        carModelGroup.style.display = "none";
    }

    // Initialize Choices.js for the Car Model dropdown without search
    if (carModelSelect.choices) {
        carModelSelect.choices.destroy();
    }
    new Choices(carModelSelect, { searchEnabled: false }); // Disable search
}

// Initial population of the Manufacturer dropdown when the page loads
populateManufacturers();

// Initial population of the Car Model dropdown when the page loads
populateCarModels();
