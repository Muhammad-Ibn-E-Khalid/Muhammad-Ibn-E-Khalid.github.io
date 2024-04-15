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
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('selected-main');
    });

    // Add 'selected' class to the clicked section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('selected-main');

    // Remove 'selected' class after a delay (e.g., 1 second)
    setTimeout(() => {
        selectedSection.classList.remove('selected-main');
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
