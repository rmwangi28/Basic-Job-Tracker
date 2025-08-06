    const jobs = JSON.parse(localStorage.getItem("jobList")) || [];
    //JSON.parse is a built in JS method that converts a JSON string into a JS object
    //A fundamental tool for working with data recieved in JSON format such as web API's
    //and localStorage
    //whatever data is in a form element 

    document.getElementById("jobForm").addEventListener("submit", function (e) {
  e.preventDefault();
    const company = document.getElementById("company").value; 
    const role = document.getElementById("role").value; 
    const date = document.getElementById("date").value; 
    const location = document.getElementById("location").value; 
    const type = document.getElementById("type").value; 
    const backstory = document.getElementById("backstory").value; 
    
    
    //store the job entry as an array
    const getJob = {
        company,
        role,
        date,
        location,
        type,
        backstory
    };

    jobs.push(getJob);  //.push is a method used with arrays that appends new elements to the end of an existing array
    //when user inputs their job information the computer will hold the value
    
    //adding localstorage 
    localStorage.setItem("jobList", JSON.stringify(jobs));
    //this saves the jobs to the local storage on the browser

    
    jobs.forEach((job) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${job.company}</strong> - ${job.role} <br/>
    ${job.location} | Applied on : ${job.date} | ${job.type}<br/>
    <em>${job.backstory}</em>`; //backticks allows you to use HTML in JavaScript - called 
    //template literals to build dynamic content in JS
    //${} insert variables into strings 
    
    //resets itself after you add a job list
   document.getElementById("jobList").appendChild(listItem);
   e.target.reset();

    });

   //clear job list
   document.getElementById("clear jobs").addEventListener("click",function(){
    if (confirm("Are you sure you want to clear saved jobs?")) {
        //clear localStorage
        localStorage.removeItem("jobList");
        //clear the job list from the page
        document.getElementById("jobList").innerHTML = "";
        //clears the in-memory job array
        jobs.length = 0;
    }
   })
  

});