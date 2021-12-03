
const calcForm = document.getElementById("form-calc");
const loading = document.querySelector('.loading')
const result = document.querySelector('.result')
// EVENTLISTENERS
calcForm.addEventListener("submit", (e)=>{
	e.preventDefault()
	//DISPLAY LOADER AND HIDE RESULT 
	document.getElementById('loading').style.display = 'block'
	document.getElementById('result').style.display = 'none'
	
	setTimeout(calcLoan, 2000)

});

// FUNCTIONS
function calcLoan() {
	// SELECTORS
const amount = document.getElementById("amount").value;
const totalPayment = document.getElementById("amount-calc");

const interest = document.getElementById("interest").value;
const totalInterest = document.getElementById("interest-calc");

const years = document.getElementById("years").value;
const monthlyPayment = document.getElementById("monthly-calc");

let calculateInterest = (parseFloat(interest) / 100 / 12);
let calculatePayment = parseFloat(years) * 12;

// Monthly Payment
let ex = Math.pow(1 + calculateInterest, calculatePayment)
let monthlyCalc = (parseFloat(amount) * ex * calculateInterest) / (ex - 1)

if (isFinite(monthlyCalc)) {
	monthlyPayment.value = monthlyCalc.toFixed(2)
	totalPayment.value = (monthlyCalc * calculatePayment).toFixed(2)
	totalInterest.value = ((monthlyCalc * calculatePayment) - parseFloat(amount)).toFixed(2)
	//DISPLAY RESULT AND HIDE LOADER
	document.getElementById('loading').style.display = 'none'
	document.getElementById('result').style.display = 'block'
	

} else {
	showError('Please input a valid number')	
	// HIDE BOTH LOADER AND RESULT
	document.getElementById('loading').style.display = 'none'
	document.getElementById('result').style.display = 'none'
	
}
e.preventDefault();
}

function showError(err) {
	const errorDiv = document.createElement('div')
	errorDiv.className = 'alert text-center alert-danger'
	const errMsg = document.createTextNode(err)
	errorDiv.appendChild(errMsg)
	let card = document.querySelector('.card')	
	let heading = document.querySelector('.heading')	
	card.insertBefore(errorDiv, heading)
	setTimeout(removeErr, 3000)
}

function removeErr() {
	document.querySelector('.alert').remove()
}