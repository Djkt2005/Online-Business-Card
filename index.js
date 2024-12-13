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
document.addEventListener("DOMContentLoaded", displayUserData);
