function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function analyzeResume() {
    let fileInput = document.getElementById("resumeUpload");
    
    if (fileInput.files.length === 0) {
        alert("Please upload a resume first!");
        return;
    }

    // Simulated AI-based screening
    let jobs = [
        "Software Engineer at Google",
        "Data Scientist at Amazon",
        "AI Engineer at OpenAI",
        "Frontend Developer at Microsoft",
        "Cloud Engineer at IBM"
    ];

    // Pick 3 random jobs
    let recommendedJobs = jobs.sort(() => Math.random() - 0.5).slice(0, 3);

    // Display recommendations
    let jobList = document.getElementById("jobList");
    jobList.innerHTML = "";
    
    recommendedJobs.forEach(job => {
        let listItem = document.createElement("li");
        listItem.textContent = job;
        jobList.appendChild(listItem);
    });

    document.getElementById("result").style.display = "block";
}
