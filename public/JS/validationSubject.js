function validateSubjectForm()
{
    const subjectNameInput = document.getElementById("name");
    const shortNameInput = document.getElementById("shortName");
    const priceInput = document.getElementById("Price");
    const availibilityInput = document.getElementById("Availibility");
    const lecturerInput = document.getElementById("lecturer");

    const subjectNameError = document.getElementById("nameError");
    const shortNameError = document.getElementById("shortNameError");
    const priceError = document.getElementById("PriceError");
    const availibilityError = document.getElementById("AvailibilityError");
    const lecturerError = document.getElementById("lecturerError");
    const generalError = document.getElementById("generalError");

    resetErrors([subjectNameInput, shortNameInput, priceInput, availibilityInput, lecturerInput], [subjectNameError, shortNameError, priceError, availibilityError, lecturerError], generalError);

    let valid = true;

    if(!checkRequired(subjectNameInput.value))
    {
        valid = false;
        subjectNameInput.classList.add("error-input");
        subjectNameError.innerText = "Field required"
    } else if(!checkTextLengthRange(subjectNameInput.value, 10))
    {
        valid = false;
        subjectNameInput.classList.add("error-input");
        subjectNameError.innerText = "Value cannot be longer than 10 signs"
    }

   if(!checkTextLengthRange(shortNameInput.value, 3))
    {
        valid = false;
        shortNameInput.classList.add("error-input");
        shortNameError.innerText = "Value cannot be longer than 3 signs"
    }

    if(!checkRequired(priceInput.value))
    {
        valid = false;
        priceInput.classList.add("error-input");
        priceError.innerText = "Field required";
    }else if(!checkPrice(priceInput.value))
    {
        valid = false;
        priceInput.classList.add("error-input");
        priceError.innerText = "Wrong amount format";
    }

    if(!checkSelection(availibilityInput.value))
    {
        valid = false;
        availibilityInput.classList.add("error-input");
        availibilityError.innerText = "Field required";
    }

    if(!checkRequired(lecturerInput.value))
    {
        valid = false;
        lecturerInput.classList.add("error-input");
        lecturerError.innerText = "Field required";
    }else if(!checkTextLengthRange(lecturerInput.value, 30))
    {
        valid = false;
        lecturerInput.classList.add("error-input");
        lecturerError.innerText = "Value cannot be longer than 30 signs";
    }


    if(!valid)
    {
        generalError.innerText = "Forms contains errors";
    }

    return valid;
}