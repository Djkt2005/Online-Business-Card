function validateInputs() {
    let isValid = true;
    const fields = [
        { id: "name-input", type: "text", message: "Please enter a valid name." },
        { id: "job-title", type: "text", message: "Please enter a valid job title." },
        { id: "address-input", type: "text", message: "Please enter a valid address." },
        { id: "email-input", type: "email", message: "Please enter a valid email address." },
        { id: "phone-input", type: "phone", message: "Please enter a valid phone number." },
        { id: "links-input", type: "text", message: "Please enter valid links." }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const value = input.value.trim();

        if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            showError(input, field.message);
            isValid = false;
        } else if (field.type === "phone" && !/^\d{7,}$/.test(value)) {
            showError(input, field.message);
            isValid = false;
        } else if (!value) {
            showError(input, `This field is required.`);
            isValid = false;
        } else {
            clearError(input);
        }
    });

    return isValid;
}

function showError(input, message) {
    input.style.border = "2px solid red";
    if (!input.nextElementSibling || input.nextElementSibling.className !== "error-message") {
        const errorMessage = document.createElement("span");
        errorMessage.className = "error-message";
        errorMessage.textContent = message;
        input.parentNode.appendChild(errorMessage);
    }
}

function clearError(input) {
    input.style.border = "";
    const errorMessage = input.nextElementSibling;
    if (errorMessage && errorMessage.className === "error-message") {
        errorMessage.remove();
    }
}

function saveUserData() {
    if (!validateInputs()) {
        return; // Stop if validation fails
    }

    const name = document.getElementById("name-input").value;
    const jobTitle = document.getElementById("job-title").value;
    const address = document.getElementById("address-input").value;
    const phone = document.getElementById("phone-input").value;
    const links = document.getElementById("links-input").value;
    const email = document.getElementById("email-input").value;

    const userDetails = {
        name: name,
        jobTitle: jobTitle,
        address: address,
        email: email,
        phone: phone,
        links: links
    };

    localStorage.setItem("userdetails", JSON.stringify(userDetails));
    displayUserData();
    animateBusinessCard();
}

function getUserData() {
    const userDetails = JSON.parse(localStorage.getItem("userdetails")) || {};
    return {
        name: userDetails.name || "Name",
        jobTitle: userDetails.jobTitle || "Job Title",
        address: userDetails.address || "Address",
        email: userDetails.email || "Email",
        phone: userDetails.phone || "Phone",
        links: userDetails.links || "",
    };
}

function displayUserData() {
    const userData = getUserData();

    document.getElementById("display-name").textContent = userData.name;
    document.getElementById("display-job-title").textContent = userData.jobTitle;
    document.getElementById("display-address").textContent = userData.address;
    document.getElementById("display-email").textContent = `${userData.email}`;
    document.getElementById("display-phone").textContent = `${userData.phone}`;

    const linksList = document.getElementById("display-links").querySelector("ul");
    linksList.innerHTML = "";
    const linksArray = userData.links.split(",");
    linksArray.forEach(link => {
        if (link.trim()) {
            const li = document.createElement("li");
            li.textContent = link.trim();
            linksList.appendChild(li);
        }
    });
}

function animateBusinessCard() {
    const businessCard = document.getElementById("business-card");
    businessCard.style.transform = "scale(1.05)";
    businessCard.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
    setTimeout(() => {
        businessCard.style.transform = "scale(1)";
        businessCard.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.2)";
    }, 400);
}

function showFormData() {
    const userData = getUserData();

    document.getElementById("name-input").value = userData.name === "Name" ? "" : userData.name;
    document.getElementById("job-title").value = userData.jobTitle === "Job Title" ? "" : userData.jobTitle;
    document.getElementById("address-input").value = userData.address === "Address" ? "" : userData.address;
    document.getElementById("email-input").value = userData.email === "Email" ? "" : userData.email;
    document.getElementById("phone-input").value = userData.phone === "Phone" ? "" : userData.phone;
    document.getElementById("links-input").value = userData.links;
}

function resetUserData() {
    if (confirm("Are you sure you want to reset all user data?")) {
        localStorage.removeItem("userdetails");
        document.getElementById("name-input").value = "";
        document.getElementById("job-title").value = "";
        document.getElementById("address-input").value = "";
        document.getElementById("email-input").value = "";
        document.getElementById("phone-input").value = "";
        document.getElementById("links-input").value = "";

        document.getElementById("display-name").textContent = "Name";
        document.getElementById("display-job-title").textContent = "Job Title";
        document.getElementById("display-address").textContent = "Address";
        document.getElementById("display-email").textContent = "Email";
        document.getElementById("display-phone").textContent = "Phone";

        const linksList = document.getElementById("display-links").querySelector("ul");
        linksList.innerHTML = "";
        const businessCard = document.getElementById("business-card");
        businessCard.className = "business_card_1";
    }
}

function changeTemplate() {
    const templateSelect = document.getElementById("template-select");
    const selectedTemplate = templateSelect.value;
    const businessCard = document.getElementById("business-card");

    businessCard.className = selectedTemplate;
    animateBusinessCard();
}

document.addEventListener("DOMContentLoaded", () => {
    displayUserData();
    showFormData();
    animateBusinessCard();
});
