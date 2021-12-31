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
        studentSelectionError.innerText="Field required";
    }

    if(!checkRequired(gradeValueInput.value))
    {
        valid = false;
        gradeValueInput.classList.add("error-input");
        gradeValueError.innerText="Field required";
    } else if (!checkDecimalFormat(gradeValueInput.value))
    {
        valid = false;
        gradeValueInput.classList.add("error-input");
        gradeValueError.innerText = "The grade should be value between 1 and 5";
    }

    if(!checkRequired(dateValueInput.value))
    {
        valid = false;
        dateValueInput.classList.add("error-input");
        dateValueError.innerText = "Field required";
    }else if (!checkDateFormat(dateValueInput.value))
    {
        valid = false;
        dateValueInput.classList.add("error-input");
        dateValueError.innerText = "Invalid date format";
    } else if (!checkIfDateIsNotGraterThanToday(dateValueInput.value))
    {
        valid = false;
        dateValueInput.classList.add("error-input");
        dateValueError.innerText = "Given date cannot be future!"
    }

    if (!checkTextLengthRange(commentValueInput.value, 50))
    {
        valid = false;
        commentValueInput.classList.add("error-input");
        commentValueError.innerText = "Comment cannot be longer than 50 signs";
    }

    if(!checkSelection(subjectSelectionInput.value)){
    valid = false;
    subjectSelectionInput.classList.add("error-input");
    subjectSelectionError.innerText = "Field required";
    }

    if(!valid)
    {
        errorSummary.innerText = "The form contains errors";
    }

    return valid;
}

