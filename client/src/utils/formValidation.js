export function minLengthValidation(inputData, minLength){
    const {value} = inputData;

    removeClassErrorSucces(inputData);

    if (value.length >=minLength) {
        inputData.classList.add("success");
        return true;
    }else{
        inputData.classList.add("failure");
        return false;
    }
}

export function emailValidation(inputData){
    const emailValid= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const {value} = inputData;
    removeClassErrorSucces(inputData);

    const resultValidation = emailValid.test(value);
    if(resultValidation){
        inputData.classList.add("sucess");
        return true;
    }else{
        inputData.classList.add("error");
        return false;
    }
}

function removeClassErrorSucces(inputData){
    inputData.classList.remove("success");
    inputData.classList.remove("error");
}