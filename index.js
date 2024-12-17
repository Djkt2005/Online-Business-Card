function saveUserData() {
    const name = document.getElementById("name-input").value;
    const jobTitle = document.getElementById("job-title").value;
    const address = document.getElementById("address-input").value;
    const email = document.getElementById("email-input").value;
    const phone = document.getElementById("phone-input").value;
    const links = document.getElementById("links-input").value;

    localStorage.setItem("name", name);
    localStorage.setItem("jobTitle", jobTitle);
    localStorage.setItem("address", address);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("links", links);

    displayUserData();
    showFormData();
}

function getUserData() {
    return {
        name: localStorage.getItem("name") || "Name",
        jobTitle: localStorage.getItem("jobTitle") || "Job Title",
        address: localStorage.getItem("address") || "Address",
        email: localStorage.getItem("email") || "Email",
        phone: localStorage.getItem("phone") || "Phone",
        links: localStorage.getItem("links") || "",
    };
}

function displayUserData() {
    const userData = getUserData();

    document.getElementById("display-name").textContent = userData.name;
    document.getElementById("display-job-title").textContent = userData.jobTitle;
    document.getElementById("display-address").textContent = userData.address;
    document.getElementById("display-email").textContent = userData.email;
    document.getElementById("display-phone").textContent = userData.phone;

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
    localStorage.clear();
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
}

document.addEventListener("DOMContentLoaded", () => {
    displayUserData();
    showFormData();
});
