 function searchProjects() {
        var searchValue = document.getElementById("search").value.trim().toLowerCase();
        var projectItems = document.querySelectorAll(".project-item");
        var searchResults = document.getElementById("searchResults");
        var found = false;

        projectItems.forEach(function (item) {
            var projectName = item.querySelector("h3").innerText.toLowerCase();
            var projectId = item.querySelector(".project-id") ? item.querySelector(".project-id").innerText.toLowerCase() : '';

            if (projectName.includes(searchValue) || projectId.includes(searchValue)) {
                item.style.display = "block";
                found = true;
            } else {
                item.style.display = "none";
            }
        });

        if (!found) {
            searchResults.innerText = "No results found.";
        } else {
            searchResults.innerText = "";
        }
    }

    function clearSearch() {
        document.getElementById("search").value = "";
        searchProjects();
    }

function selectSection(sectionId) {
        // Remove 'selected' class from all sections
        const sections = document.querySelectorAll('.section-margin');
        sections.forEach(section => {
            section.classList.remove('selected-main');
        });

        // Add 'selected' class to the parent section of the clicked button
        const selectedSection = document.getElementById(sectionId);
        const parentSection = selectedSection.closest('.section-margin');
        parentSection.classList.add('selected-main');

        // Remove 'selected' class after a delay (e.g., 1 second)
        setTimeout(() => {
            parentSection.classList.remove('selected-main');
        }, 1000);
    }

function selectSectionfooter(sectionId) {
    // Remove 'selected' class from all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('selected-footer');
    });

    // Add 'selected' class to the clicked section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('selected-footer');

    // Remove 'selected' class after a delay (e.g., 1 second)
    setTimeout(() => {
        selectedSection.classList.remove('selected-footer');
    }, 1000);
}



                //Credit: TechLever (youtube.com/@tech-lever)
                document.getElementById("form").addEventListener("submit", function(e) {
                    e.preventDefault();
                    document.getElementById("message").textContent = "Submitting..";
                    document.getElementById("message").style.display = "block";
                    document.getElementById("submit-button").disabled = true;

                    var currentDate = new Date();
                    var day = String(currentDate.getDate()).padStart(2, "0");
                    var month = String(currentDate.getMonth() + 1).padStart(2, "0");
                    var year = currentDate.getFullYear();
                    var hours = String(currentDate.getHours()).padStart(2, "0");
                    var minutes = String(currentDate.getMinutes()).padStart(2, "0");
                    var seconds = String(currentDate.getSeconds()).padStart(2, "0");
                    var timestamp = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

                    var countryCode = $("#mobile_code").intlTelInput("getSelectedCountryData").dialCode;
                    var inputNumber = document.querySelector('input[name="Number"]').value;
                    var combinedNumber = "+" + countryCode + inputNumber; // Add the '+' sign here
                    document.querySelector('input[name="Timestamp"]').value = timestamp;
                    document.querySelector('input[name="Number"]').value = combinedNumber;

                    $(document).ready(function() {
                            $.getJSON("https://api.ipify.org?format=json", function(data) {
                                    if (data && data.ip) {
                                            $('input[name="IXPX"]').val(data.ip);
                                    } else {
                                            console.error("Failed to retrieve IP address.");
                                    }
                            }).fail(function() {
                                    console.error("Failed to retrieve IP address.");
                            });
                    });

                    var formData = new FormData(this);
                    var keyValuePairs = [];
                    for (var pair of formData.entries()) {
                            keyValuePairs.push(pair[0] + "=" + pair[1]);
                    }

                    var formDataString = keyValuePairs.join("&");

                    fetch("https://script.google.com/macros/s/AKfycbz3Gp9r177UzM0z1olj8TW25hBZqIQ7zlMrAdrVoq-dT8gkuqQMwHe7JcmYFwgvcfd_/exec", {
                            redirect: "follow",
                            method: "POST",
                            body: formDataString,
                            headers: {
                                    "Content-Type": "text/plain;charset=utf-8",
                            },
                    }).then(function(response) {
                            if (response) {
                                    return response;
                            } else {
                                    throw new Error("Failed to submit the form.");
                            }
                    }).then(function(data) {
                            document.getElementById("message").textContent = "Message Submitted Successfully!";
                            document.getElementById("message").style.display = "block";
                            document.getElementById("message").style.backgroundColor = "green";
                            document.getElementById("message").style.color = "beige";
                            document.getElementById("submit-button").disabled = false;
                            document.getElementById("form").reset();

                            setTimeout(function() {
                                    document.getElementById("message").textContent = "";
                                    document.getElementById("message").style.display = "none";
                                    var numberField = document.querySelector(".phoneField");
                                    numberField.style.display = "none";
                                    var ratingField = document.querySelector(".ratingWeb");
                                    ratingField.style.display = "none";
                            }, 3600);
                    }).catch(function(error) {
                            console.error(error);
                            document.getElementById("message").textContent = "An error occurred while submitting the form.";
                            document.getElementById("message").style.display = "block";
                    });
            });

            // Function to handle change event of the subject select
           document.getElementById("subjectSelect").addEventListener("change", function() {
                var numberField = document.querySelector(".phoneField");
                var ratingField = document.querySelector(".ratingWeb");
                var supportField = document.querySelector(".supportfield");

                if (this.value === "Collaboration") {
                    numberField.style.display = "block";
                    ratingField.style.display = "none";
                    supportField.style.display = "none";
                    document.querySelector('input[name="Number"]').setAttribute("required", "required");
             
                } else if (this.value === "Feedback") {
                    ratingField.style.display = "block";
                    numberField.style.display = "none";
                    supportField.style.display = "none";
                    document.querySelectorAll('input[name="stars"]').forEach(function(input) {input.setAttribute("required", "required");});
               
                } else if (this.value === "Support") {
                    supportField.style.display = "block";
                    ratingField.style.display = "none";
                    numberField.style.display = "none";
                    document.querySelectorAll('input[name="support"]').forEach(function(input) {input.setAttribute("required", "required");});
               
                } else {
                    numberField.style.display = "none";
                    document.querySelector('input[name="Number"]').removeAttribute("required");

                    ratingField.style.display = "none";
                    document.querySelectorAll('input[name="stars"]').forEach(function(input) { input.removeAttribute("required"); });
                
                    supportField.style.display = "none";
                    document.querySelectorAll('input[name="support"]').forEach(function(input) { input.removeAttribute("required"); });
  
                }
            });
