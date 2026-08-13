function contactButtonClicked() {
    alert("Thank you for reaching out! We will get back to you shortly.");
}const contactButton = document.getElementById("RevealButton");
const displayDiv = document.getElementById("displayDiv");

contactButton.addEventListener("click", () => {
    displayDiv.innerHTML = `
        <div class="resume-card">

            <h2>Portfolio</h2>

            <div class="resume-row">
                <strong>Name</strong>
                <span>Shanmuga Priya</span>
            </div>

            <div class="resume-row">
                <strong>Education</strong>
                <span>BE Computer Science and Engineering</span>
            </div>

            <div class="resume-row">
                <strong>Internship</strong>
                <span>Web Development Intern - NSIC</span>
            </div>

            <div class="resume-row">
                <strong>Location</strong>
                <span>Chengalpattu, Tamil Nadu</span>
            </div>

            <div class="resume-row">
                <strong>Skills</strong>
                <span>HTML, CSS, JavaScript, Python</span>
            </div>

            <div class="resume-row">
                <strong>Project</strong>
                <span>ResQNet - Emergency Response and Assistance Platform</span>
            </div>

            <div class="resume-row">
                <strong>Interests</strong>
                <span>Web Development and Software Development</span>
            </div>

        </div>
    `;
});

