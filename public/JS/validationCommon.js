function resetErrors(inputs, errorTexts, errorInfo)
{
    for(let i=0; i<inputs.length; i++)
    {
        inputs[i].classList.remove("error-input");
    }

    for(let i=0; i<errorTexts.length; i++)
    {
        errorTexts[i].innerText = "";
    }
    errorInfo.innerText = "";
}

function checkRequired(value)
{
    if(!value)
    {
        return false;
    }

    value = value.toString().trim();
    if(value === ""){
        return false;
    }

    return true;
}

function checkTextLengthRange(value, max)
{
    if(!value){
        return false;
    }

    value = value.toString().trim();
    const length = value.length;

    if(max && length > max){
        return false;
    }

    return true;
}

function checkSelection(value)
{
    if(value === "Select option")
    {
        return false;
    }
    return true;
}

function checkDecimalFormat(value)
{
    if(value < 1 || value > 5)
    {
        return false;
    }
    return true;
}

function checkDateFormat(value)
{
    const pattern = /(\d{4})-(\d{2})-(\d{2})/;
    return pattern.test(value);
}

function checkIfDateIsNotGraterThanToday(value)
{
    const CurrentDate = new Date();
    const GivenDate = new Date(value);

    if(GivenDate.getTime() > CurrentDate.getTime())
    {
        return false;
    }
    return true;
}

function checkIfLettersOnly(value)
{
    const pattern = /(\D+)/;
    return pattern.test(value);
}

function checkAdress(value)
{
    const pattern1 = /(\w+ \w+ \d+m\d+)/;
    const pattern2 = /(\w+ \d+m\d+)/;
    const pattern3 = /(\w+ \d)/;

    return pattern1.test(value) || pattern2.test(value) || pattern3.test(value);
}

function checkZipCode(value)
{
    const pattern = /(\d{2}-\d{3})/;

    return pattern.test(value);
}

function checkPesel(value)
{
    const pattern = /(\d{11})/;
    return pattern.test(value);
}

function checkPrice(value)
{
    const pattern = /(\d+.\d{2})/;
    return pattern.test(value);
}