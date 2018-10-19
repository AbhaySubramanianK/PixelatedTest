let sumPrimes = () => { 
	let sum = 0;
	//iterate over all real numbers from 2 to 2 million 
	for(let RealNum = 2; RealNum < 2000000; RealNum++){
    	let isPrime = true;
    	//iterate i from 2 to realNum's max exact divisor(the sqrt of that realNum)
    	for (let i = 2; i <= Math.sqrt(RealNum); i++){
    		//if the realNum has exact divisors, then realNum is not prime
           	if (RealNum % i === 0) {
	           	isPrime = false;
	  	       	break;
	        }
	   	}	
	   	//if realNum is prime, add it to sum
	   	if(isPrime){
	    		sum += RealNum;
	   	}
    }
    console.log(sum);
}
sumPrimes();