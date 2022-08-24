function getInputFromTextField(id){
    const input = document.getElementById(id);
    const intVal = parseFloat(input.value);
        
    if(isNaN(intVal)){
        alert('Please Enter a Number');
        input.value = '';
    }
    else
    {
        
    }
    return intVal;
}

function getInputFromDiv(id){
    const inpDiv = document.getElementById(id);

    return inpDiv;
}
document.getElementById('calcBtn').addEventListener('click',function(){
  var income =  getInputFromTextField('income');
  var food = getInputFromTextField('food');
  var rent = getInputFromTextField('rent');
  var clothes = getInputFromTextField('clothes');
  var expense = food+rent+clothes;

  if( income > expense){
    var remain = income - expense;
    var totalExpense = getInputFromDiv('totalExpense');
    totalExpense.innerText = expense;
    var balance = getInputFromDiv('balance');
    balance.innerText = remain ;
  
  
    document.getElementById('saveBtn').addEventListener('click',function(){
    var saveInput = getInputFromTextField('save');
    var save = ((saveInput/100)*income);
    var saveAmount = getInputFromDiv('savings');
    saveAmount.innerText = save;
    var remainingBalance = income - (expense+save);
    var remainFinal = getInputFromDiv('remain');
   remainFinal.innerText = remainingBalance;
});
}
else {
    alert("Apnar Account e jothesto poriman taka nei");
}
});


// document.getElementById('saveBtn').addEventListener('click',function(){
//   var income =  getInputFromTextField('income');
//   var food = getInputFromTextField('food');
//   var rent = getInputFromTextField('rent');
//   var clothes = getInputFromTextField('clothes');
//   var expense = food+rent+clothes;

//   var saveInput = getInputFromTextField('save');
//   var save = ((saveInput/100)*income);
//   var saveAmount = getInputFromDiv('savings');
//   saveAmount.innerText = save;
//   var remainingBalance = income - (expense+save);
//   var remainFinal = getInputFromDiv('remain');
//   remainFinal.innerText = remainingBalance;
    
// })
