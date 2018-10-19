var Compute = () => {
	//loop a from 1 -> 1000
	for(let a = 1;a <= 1000;a++){
		//loop b from a ->1000 since a<b
		for(let b = a;b <= 1000;b++){
			//(indirect decremental)looping c from 998(upto -1000)
			let c = 1000-a-b;
			//check for the Pythagorean condition
			if(Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)){
				//if true, print a,b,c
				console.log(a+" "+b+" "+c);
			}
		}
	}
}
Compute();