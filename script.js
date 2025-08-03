document.getElementById("jobForm").addEventListener("submit", function (e) {
  e.preventDefault();
    const company = document.getElementById("company").value; 
    //when user inputs their job information the computer will hold the value
    const role = document.getElementById("role").value; 
    const date = document.getElementById("date").value; 
    const location = document.getElementById("location").value; 
    const type = document.getElementById("type").value; 
    const backstory = document.getElementById("backstory").value; 

    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${company}</strong> - ${role} <br/>
    ${location} | Applied on : ${date} | ${type}<br/>
    <em>${backstory}</em>`; //backticks allows you to use HTML in JavaScript - called 
    //template literals to build dynamic content in JS

    document.getElementById("jobList").appendChild(listItem);
    //parent joblist child list item
    e.target.reset(); //clears the form 
//make into array to store each input from HTML
    const jobs = []
});