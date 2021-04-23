console.log("WORKINNNNNNG");


var inpt = document.querySelector("#in");
var outp = document.querySelector("#msgs")
var out2 = document.querySelector("#out2");


inpt.addEventListener("focusout", function(){

txtinpt = inpt.value;

//detect(inpt);


//outp.textContent = txtinpt;
//var tab_split = txtinpt.split('.');
//console.log(tab_split);

	let oct = txtinpt.split(".");
	//console.log(oct);
	let len = oct[0].length + oct[1].length + oct[2].length + oct[3].length;
	if( len !==32)
	{
		dec2bin(oct);
		//bin2dec(oct);
	}
	else{
		bin2dec(oct);
	}


});


let dec2bin = (ip, x=0) => {


	znak2 = "";
	for(let j=0; j<ip.length; j++)
	{	
		let el = ip[j];

		let liczba = [];
		let i = 0;
		while(el>0){
			console.log(el);
			if((el%2)!==0)
			{
				liczba[i++]="1";
			}
			else
			{
				liczba[i++]="0";
			}
		el/=2;
		el = parseInt(el);


		}

        let znak;
        nowe_ip=liczba.join("")+".";
        znak2+=nowe_ip;

	}
	if (x==0)
	outp.textContent = znak2;
	else if (x==1)
	out2.textContent = znak2;

}



let bin2dec = (ip) => {

console.log("DONT WORK XD");
let dec = "";
for(i=0; i<ip.length; i++)
{
	
	dec+=(dec===""?"":".");
	dec+= parseInt(ip[i], 2);

}
	outp.textContent = dec;


}



var inpt1 = document.querySelector(".in1");
var inpt2 = document.querySelector(".in2");
var inpt3 = document.querySelector(".in3");
var inpt4 = document.querySelector(".in4");

var inpts = document.querySelectorAll("#in2");


for(let i=0; i<inpts.length; i++){

inpts[i].addEventListener("keyup", function(){


	if(inpts[i].value.length >= 3)
	{
		if (inpts[i+1] !== undefined)
		inpts[i+1].focus();
	}




 //  	inpt1value = inpt1.value;
 //  	tab = inpt1value.split(".");
 //  	inpt1.value = "";
 //  	inpt1.value = tab[0];
 //  	inpt2.value = tab[1];
	// inpt3.value = tab[2];
	// inpt4.value = tab[3];

    //console.log(paste);





});
}

var tab = [];

inpt4.addEventListener("focusout", function(){


	out2.textContent = "";

 	tab[0] = inpt1.value; 
   tab[1] = inpt2.value; 
	tab[2] =inpt3.value; 
	tab[3] = inpt4.value; 

		dec2bin(tab, 1);

});