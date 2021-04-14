
    /*=============== Generate Random Number =============*/
    document.getElementById('generateRandomNumberBtn').addEventListener('click', function(){
        const randomNumber = Math.floor(Math.random() * 9000 + 1000);
        document.getElementById('displayRandomNumber').value = randomNumber;
    
         /*=============== disable the submit button when the input have null =============*/
         let inputField = document.getElementById("displayRandomNumber").value;
        if (inputField === "") {
            document.getElementById('submit').disabled = true;
        }else {
            document.getElementById('submit').disabled = false;
        }
    });
    
         /*=============== display All input number  =============*/
    function addInputNumber(passingNumber){
        let increaseNumber = document.getElementById('displayInputNumber').value;
        let convertNumber = increaseNumber.toString().length;
        if (convertNumber < 4){
            increaseNumber +=  passingNumber;
            document.getElementById('displayInputNumber').value = increaseNumber;
        }
     }
    
        /*=============== backSpace and clear input number =============*/
    function removeInputNumber (removeNumber){
        if (removeNumber == '<'){
            let backSpaceInputNumber = document.getElementById('displayInputNumber').value ;
            backSpaceInputNumber = backSpaceInputNumber.substr(0, backSpaceInputNumber.length - 1);
            document.getElementById('displayInputNumber').value = backSpaceInputNumber;
        }else if (removeNumber == 'C'){
            document.getElementById('displayInputNumber').value = '';
        }
    }
    
    //     /*=============== verify input pin number =============*/
    document.getElementById('submit').addEventListener('click', function(){
        let machRandomNumber = document.getElementById('displayRandomNumber').value;
        let machInputNumber = document.getElementById('displayInputNumber').value;
        let displayVerifyAlert = document.getElementById('displaySuccessAlert');
        if (machRandomNumber == machInputNumber) {
            displayVerifyAlert.style.display ="block";
            document.getElementById('submit').disabled = true;
            document.getElementById('displayWrongAlert').style.display ="none"; 
        }else{
            document.getElementById('displayWrongAlert').style.display ="block";
        let leftAlert = document.getElementById('tryLeftText');
            leftAlert.style.display ="block";
        let convertNumber = parseFloat(leftAlert.innerHTML);
        let totalNumber = convertNumber - 1;
            leftAlert.innerHTML = totalNumber + ' try left';
        if(totalNumber == 0){
            let throwMessage  = "Your chance is over !"
            leftAlert.innerHTML = throwMessage;
            document.getElementById('submit').disabled = true; 
            }    
       }
    });
    
    //  /*=============== extra work! when click on generate Btn then (alert verify text and inputNumber) will be none  =============*/
    document.getElementById('generateRandomNumberBtn').addEventListener('click', function(){
            document.getElementById('displayWrongAlert').style.display ="none";
            document.getElementById('displaySuccessAlert').style.display ="none";
            document.getElementById('displayInputNumber').value = ''; 
    });
    