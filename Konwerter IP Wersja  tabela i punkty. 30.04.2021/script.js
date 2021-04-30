console.log("WORKINNNNNNG");


var inpt = document.querySelector("#in");
var outp = document.querySelector("#msgs")
var out2 = document.querySelector("#out2");
var out3 = document.querySelector("#out3");


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


	ip_koncowe = "";
	for(let j=0; j<ip.length; j++)
	{	
		let el = ip[j];

		let liczba = [];
		let i = 0;
		while(el>0){
			//console.log(el);
			if((el%2)!==0)
			{
				liczba[i++]="1";
			}
			else
			{
				liczba[i++]="0";
			}

			el=el/2;
			el = parseInt(el);


		}

        nowe_ip=liczba.join("")+".";
        ip_koncowe+=nowe_ip;

	}
	if (x==0)
	outp.textContent =  ip_koncowe;
	else if (x==1)
	out2.textContent =  ip_koncowe;
	else if (x==2)
	console.log(ip_koncowe);

}



let bin2dec = (ip, x=0) => {

let dec = "";
for(i=0; i<ip.length; i++)
{
	
	dec+=(dec===""?"":".");
	dec+= parseInt(ip[i], 2);

}

	if(x == 0)
	outp.textContent = dec;
	if(x == 1)
	out3.textContent = dec;


}



var inpt1 = document.querySelector(".in1");
var inpt2 = document.querySelector(".in2");
var inpt3 = document.querySelector(".in3");
var inpt4 = document.querySelector(".in4");

var inpts = document.querySelectorAll("#in2");

var inptsy3 = document.querySelectorAll("#in3");


//tutaj wersja z keyup - I Z BIN TO DEC

for(let i=0; i<inptsy3.length; i++){

 inptsy3[i].addEventListener("keyup", function(){


 	if(inptsy3[i].value.length >= 8)
	{
		if (inptsy3[i+1] !== undefined)
 		inptsy3[i+1].focus();

 	}
});
}

var tabel = [];




 inptsy3[3].addEventListener("focusout", function(){
 	
for(let i=0; i<inptsy3.length; i++){
	tabel[i] = inptsy3[i].value;


}
	bin2dec(tabel, 1);


 });



// });
//}//


var tab2 = [];


////kod odpowiedzialny za wklejenie naszego IP do 4 inputow. i na koncu zamiana z dziesietnego na binarny


for(let i=0; i<inpts.length; i++){
inpts[i].addEventListener("paste", function(){
	
	inpts[0].value = "";
	
	inpts[i].oninput = function () {
	let inpt1values = inpts[i].value;
	tab2 = inpt1values.split(".")	
	

	for(let p=0; p<inpts.length; p++)
	{
		inpts[p].value = tab2[p];

	}

	dec2bin(tab2, 1);
	};




});

}

const cls = {
    a: { from:"0", to:"126" },
    b: { from:"128", to:"191" },
    c: { from:"192", to:"223" },
    d: { from:"224", to:"239" },
    e: { from:"240", to:"255" }
}



let check = (ip) => {

// for(let i=0; i<ip.length; i++)
// {

// }
for(let [key, val] in cls){

	if (ip[0] >= parseInt(cls[key].from) && ip[0] <= parseInt(cls[key].to))
		return key;
	
}

}


let table = document.querySelector("table");
let inputy_w_table = table.querySelectorAll("INPUT");
let ip_w_table = table.querySelectorAll(".ip1");
let outp_w_table = table.querySelectorAll("output");
console.log(outp_w_table);
let suma_outp = table.querySelector(".outpsuma").textContent;



///tutaj odznaczamy ktore pytanie juz jest odpowiedziane jesli nie to 0
let sprawdzamy = [0, 0, 0];
let tabip  = []; 

for(let i=0; i<ip_w_table.length; i++)
{
	inputy_w_table[i].addEventListener("focusout", function()
	{
	value = inputy_w_table[i].value;
	tabip = ip_w_table[i].textContent.split(".");
	//console.log(tabip)
	let klasa = check(tabip).toUpperCase();
	console.log(klasa);
	if(value.toUpperCase() == klasa && sprawdzamy[i] == 0){ //jesli sie zgadza po sprawdzeniu i jeszcze nie sprawdzone zadanko to ...
	outp_w_table[i].textContent = "OK !";
	console.log("OK");
	sprawdzamy[i] = 1;
	table.querySelector(".outpsuma").textContent = parseInt(table.querySelector(".outpsuma").textContent) + 1;
}
	else if (value.toUpperCase() !== klasa && sprawdzamy[i] !==1 )

	outp_w_table[i].textContent = "ŹLE !";


	});
}



// let tabip1 = [];

// let quest1 = document.querySelector(".q1");
// let outpa1 = document.querySelector(".a1");
// let ip1 = document.querySelector(".ip1");



// tabip1 = ip1.textContent.split(".");
// let klasa = check(tabip1);

// quest1.addEventListener("focusout", function()
// {
// 	//dec2bin(tabip1, 2);

// value = quest1.value;
// console.log(value);
// //outpa1.textContent = "OK !"; 

// if( value.toUpperCase() == klasa  )
// {
// outpa1.textContent = "OK !"; 

// }
// else
// outpa1.textContent = "NIE !"; 




// });




