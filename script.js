var previousHeaderID = "about"

function chosenHeader(e) { 
    var previousHeader = document.getElementById(previousHeaderID)
    var presentHeader = document.getElementById(e.id)

    if (e.id !== previousHeaderID) {
        presentHeader.classList.add("chosen")
        previousHeader.classList.remove("chosen")
        previousHeaderID = presentHeader.id
    }

}