function validateStudentForm()
{
    const nameInputValue= document.getElementById('name');
    const surnameInputValue = document.getElementById('surname');
    const adressInputValue = document.getElementById('Adress');
    const zipCodeInputValue = document.getElementById('zipCode');
    const birthdateInputValue = document.getElementById('Birthdate');
    const peselInputValue = document.getElementById('PESEL');


    const nameInputError = document.getElementById('nameError');
    const surnameInputError = document.getElementById('surnameError');
    const adressInputError = document.getElementById('AdressError');
    const zipCodeInputError = document.getElementById('zipCodeError');
    const birthdateInputError = document.getElementById('BirthdateError');
    const peselInputError = document.getElementById('PESELError');
    const summaryError = document.getElementById('ErrorSummary');

    resetErrors([nameInputValue, surnameInputValue, adressInputValue, zipCodeInputValue, birthdateInputValue, peselInputValue], [nameInputError, surnameInputError, adressInputError, zipCodeInputError, birthdateInputError, peselInputError], summaryError);

    let valid = true;

    if(!checkRequired(nameInputValue.value))
    {
        valid = false;
        nameInputValue.classList.add("error-input");
        nameInputError.innerText = "Field required";
    } else if(!checkTextLengthRange(nameInputValue.value, 15))
    {
        valid = false;
        nameInputValue.classList.add("error-input");
        nameInputError.innerText = "Value should not be longer than 15 signs";
    } else if(!checkIfLettersOnly(nameInputValue.value))
    {
        valid = false;
        nameInputValue.classList.add("error-input");
        nameInputError.innerText = "Letters allowed only";
    }

    if(!checkRequired(surnameInputValue.value))
    {
        valid = false;
        surnameInputValue.classList.add("error-input");
        surnameInputError.innerText = "Field required";
    } else if(!checkTextLengthRange(surnameInputValue.value, 30))
    {
        valid = false;
        surnameInputValue.classList.add("error-input");
        surnameInputError.innerText = "Value should not be longer than 30 signs";
    } else if(!checkIfLettersOnly(surnameInputValue.value))
    {
        valid = false;
        surnameInputValue.classList.add("error-input");
        surnameInputError.innerText = "Letters allowed only";
    }

    if(!checkRequired(adressInputValue.value))
    {
        valid = false;
        adressInputValue.classList.add("error-input");
        adressInputError.innerText = "Field required";
    } else if (!checkTextLengthRange(adressInputValue.value, 50))
    {
        valid = false;
        adressInputValue.classList.add("error-input");
        adressInputError.innerText = "Value shot not be longer than 50 signs";
    } else if (!checkAdress(adressInputValue.value))
    {
        valid = false;
        adressInputValue.classList.add("error-input");
        adressInputError.innerText = "Incorrect Address format";
    }

    if(!checkRequired(zipCodeInputValue.value))
    {
        valid = false;
        zipCodeInputValue.classList.add("error-input");
        zipCodeInputError.innerText = "Field required";
    } else if(!checkZipCode(zipCodeInputValue.value))
    {
        valid = false;
        zipCodeInputValue.classList.add("error-input");
        zipCodeInputError.innerText = "Invalid ZipCode format";
    }

    if(!checkRequired(birthdateInputValue.value))
    {
        valid = false;
        birthdateInputValue.classList.add("error-input");
        birthdateInputError.innerText = "Field required";
    } else if(!checkDateFormat(birthdateInputValue.value))
    {
        valid = false;
        birthdateInputValue.classList.add("error-input");
        birthdateInputError.innerText = "Incorrect date format";
    } else if (!checkIfDateIsNotGraterThanToday(birthdateInputValue.value))
    {
        valid = false;
        birthdateInputValue.classList.add("error-input");
        birthdateInputError.innerText = "Date cannot be future";
    }

    if(!checkRequired(peselInputValue.value))
    {
        valid = false;
        peselInputValue.classList.add("error-input");
        peselInputError.innerText = "Field required";
    }else if(!checkPesel(peselInputValue.value))
    {
        valid = false;
        peselInputValue.classList.add("error-input");
        peselInputError.innerText = "Incorrect PESEL format";
    }

    if(!valid)
    {
        summaryError.innerText = "Form contains errors";
    }

    return valid;
}