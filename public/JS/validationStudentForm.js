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
        nameInputError.innerText = "Pole wymagane";
    } else if(!checkTextLengthRange(nameInputValue.value, 15))
    {
        valid = false;
        nameInputValue.classList.add("error-input");
        nameInputError.innerText = "Pole powinno zawierac max 15 znakow";
    } else if(!checkIfLettersOnly(nameInputValue.value))
    {
        valid = false;
        nameInputValue.classList.add("error-input");
        nameInputError.innerText = "Pole powinno zawierac same litery!";
    }

    if(!checkRequired(surnameInputValue.value))
    {
        valid = false;
        surnameInputValue.classList.add("error-input");
        surnameInputError.innerText = "Pole wymagane";
    } else if(!checkTextLengthRange(surnameInputValue.value, 30))
    {
        valid = false;
        surnameInputValue.classList.add("error-input");
        surnameInputError.innerText = "Pole powinno zawierac max 30 znakow";
    } else if(!checkIfLettersOnly(surnameInputValue.value))
    {
        valid = false;
        surnameInputValue.classList.add("error-input");
        surnameInputError.innerText = "Pole powinno zawierac same litery";
    }

    if(!checkRequired(adressInputValue.value))
    {
        valid = false;
        adressInputValue.classList.add("error-input");
        adressInputError.innerText = "Pole wymagane";
    } else if (!checkTextLengthRange(adressInputValue.value, 50))
    {
        valid = false;
        adressInputValue.classList.add("error-input");
        adressInputError.innerText = "Pole powinno zawierac max 50 znakow";
    } else if (!checkAdress(adressInputValue.value))
    {
        valid = false;
        adressInputValue.classList.add("error-input");
        adressInputError.innerText = "Bledny format adresu";
    }

    if(!checkRequired(zipCodeInputValue.value))
    {
        valid = false;
        zipCodeInputValue.classList.add("error-input");
        zipCodeInputError.innerText = "Pole wymagane";
    } else if(!checkZipCode(zipCodeInputValue.value))
    {
        valid = false;
        zipCodeInputValue.classList.add("error-input");
        zipCodeInputError.innerText = "Bledny format kodu pocztowego";
    }

    if(!checkRequired(birthdateInputValue.value))
    {
        valid = false;
        birthdateInputValue.classList.add("error-input");
        birthdateInputError.innerText = "Pole wymagane";
    } else if(!checkDateFormat(birthdateInputValue.value))
    {
        valid = false;
        birthdateInputValue.classList.add("error-input");
        birthdateInputError.innerText = "Bledny format daty";
    } else if (!checkIfDateIsNotGraterThanToday(birthdateInputValue.value))
    {
        valid = false;
        birthdateInputValue.classList.add("error-input");
        birthdateInputError.innerText = "Data nie moze byc pozniejsza";
    }

    if(!checkRequired(peselInputValue.value))
    {
        valid = false;
        peselInputValue.classList.add("error-input");
        peselInputError.innerText = "Pole wymagane";
    }else if(!checkPesel(peselInputValue.value))
    {
        valid = false;
        peselInputValue.classList.add("error-input");
        peselInputError.innerText = "Bledny format PESEL";
    }

    if(!valid)
    {
        summaryError.innerText = "Formularz zawiera bledy!";
    }

    return valid;
}