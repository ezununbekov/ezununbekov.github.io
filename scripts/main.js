let myImage = document.querySelector('img');
myImage.onclick = function(){
	if(myImage.getAttribute('src')=='images/flag.png'){
		myImage.setAttribute('src', 'images/pacific.png');
	} else{
		myImage.setAttribute('src', 'images/flag.png');
	}
}

let myButton = document.querySelector('button');
let myHeader = document.querySelector('h1');

function setUserName(){
	let myName = prompt('Enter user name');
	if(!myName){
		if(myName!=null)
			setUserName();
	} else{
		localStorage.setItem('name', myName);
		myHeader.textContent = 'Welcome, ' + myName;
	}	
}

if(!localStorage.getItem('name')){
	setUserName();
} else{
	let storedName = localStorage.getItem('name');
	myHeader.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}