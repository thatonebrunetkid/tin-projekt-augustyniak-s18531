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
        subjectNameError.innerText = "Pole jest wymagane"
    } else if(!checkTextLengthRange(subjectNameInput.value, 10))
    {
        valid = false;
        subjectNameInput.classList.add("error-input");
        subjectNameError.innerText = "Nazwa nie moze byc dluzsza od 10 znakow"
    }

    if(!checkRequired(shortNameInput.value))
    {
        valid = false;
        shortNameInput.classList.add("error-input");
        shortNameError.innerText = "Pole jest wymagane";
    }else if(!checkTextLengthRange(shortNameInput.value, 3))
    {
        valid = false;
        shortNameInput.classList.add("error-input");
        shortNameError.innerText = "Pole nie moze zawierac wiecej jak 3 znaki"
    }

    if(!checkRequired(priceInput.value))
    {
        valid = false;
        priceInput.classList.add("error-input");
        priceError.innerText = "Pole jest wymagane";
    }else if(!checkPrice(priceInput.value))
    {
        valid = false;
        priceInput.classList.add("error-input");
        priceError.innerText = "Zly format kwoty";
    }

    if(!checkSelection(availibilityInput.value))
    {
        valid = false;
        availibilityInput.classList.add("error-input");
        availibilityError.innerText = "Pole jest wymagane";
    }

    if(!checkRequired(lecturerInput.value))
    {
        valid = false;
        lecturerInput.classList.add("error-input");
        lecturerError.innerText = "Pole wymagane";
    }else if(!checkTextLengthRange(lecturerInput.value, 30))
    {
        valid = false;
        lecturerInput.classList.add("error-input");
        lecturerError.innerText = "Pole musi zawierac max 30 znakow";
    }


    if(!valid)
    {
        generalError.innerText = "Formularz zawiera bledy";
    }

    return valid;
}