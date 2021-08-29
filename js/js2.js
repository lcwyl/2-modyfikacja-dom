
	
	let second = 15 //15 sekund
	
	let interval = setInterval(function(){
		second--;
		
		if(second>=0){
			let count = document.querySelector(".count");
			
			count.innerHTML = second;
		}
		
		if(second === 0){
			let juhu = document.querySelector(".juhu");
			juhu.textContent = "jest zero"
			clearInterval(interval);
		}
		
	},1000);
	
	
	let time = setTimeout(function(){
		alert(second)
	},20000);
	
