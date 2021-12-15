function validateGradesForm()
{
    const studentNameSelection = document.getElementById('student');
    const gradeValueInput = document.getElementById('grade');
    const dateValueInput = document.getElementById('date');
    const commentValueInput = document.getElementById('comment');
    const subjectSelectionInput = document.getElementById('subject');

    const studentSelectionError = document.getElementById('studentError');
    const gradeValueError = document.getElementById('gradeError');
    const dateValueError = document.getElementById('dateError');
    const commentValueError = document.getElementById('commentError');
    const subjectSelectionError = document.getElementById('subjectError');
    const errorSummary = document.getElementById('errorSummary');

    resetErrors([studentNameSelection, gradeValueInput, dateValueInput, commentValueInput, subjectSelectionInput], [studentSelectionError, gradeValueError, dateValueError, commentValueError, subjectSelectionError], errorSummary);

    let valid = true;

    if(!checkSelection(studentNameSelection.value))
    {
        valid = false;
        studentNameSelection.classList.add("error-input");
        studentSelectionError.innerText="Pole jest wymagane";
    }

    if(!checkRequired(gradeValueInput.value))
    {
        valid = false;
        gradeValueInput.classList.add("error-input");
        gradeValueError.innerText="Pole jest wymagane";
    } else if (!checkDecimalFormat(gradeValueInput.value))
    {
        valid = false;
        gradeValueInput.classList.add("error-input");
        gradeValueError.innerText = "Ocena powinna miescic sie w przediale 1 - 5";
    }

    if(!checkRequired(dateValueInput.value))
    {
        valid = false;
        dateValueInput.classList.add("error-input");
        dateValueError.innerText = "Pole jest wymagane";
    }else if (!checkDateFormat(dateValueInput.value))
    {
        valid = false;
        dateValueInput.classList.add("error-input");
        dateValueError.innerText = "Bledny format daty";
    } else if (!checkIfDateIsNotGraterThanToday(dateValueInput.value))
    {
        valid = false;
        dateValueInput.classList.add("error-input");
        dateValueError.innerText = "Podana data jest z przyszlosci!"
    }

    if(!checkRequired(commentValueInput.value))
    {
        valid = false;
        commentValueInput.classList.add("error-input");
        commentValueError.innerText = "Pole jest wymagane";
    }else if (!checkTextLengthRange(commentValueInput.value, 50))
    {
        valid = false;
        commentValueInput.classList.add("error-input");
        commentValueError.innerText = "Komentarz nie moze byc dluzszy od 50 znakow";
    }

    if(!checkSelection(subjectSelectionInput.value)){
    valid = false;
    subjectSelectionInput.classList.add("error-input");
    subjectSelectionError.innerText = "Pole jest wymagane";
    }

    if(!valid)
    {
        errorSummary.innerText = "Formularz zawiera bledy";
    }

    return valid;
}

