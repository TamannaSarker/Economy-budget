var valueLista = [];


function countTotalt(event){
                              // sidan ska inte uppdateras 
                                 // data ska inte försvinnas 
event.preventDefault();
                                
                                
                           
var option =   document.querySelector("#selectOption")

//inkomst
if(option.value === "+"){
                               
                           
var description=  document.querySelector("#description").value;
var value=  document.querySelector("#value").value;
                           
//pusha value in i valueLista: 
valueLista.push(   Number(value)    )
                                          
                           
                              
var inkomstData = document.querySelector(".inkomstData")
                           
inkomstData.innerText = value;
                                                                    
                           
                           
                           
                           
var li = document.createElement("li");
                           
li.innerText= description + "  :  " + value;
                           
var ul = document.querySelector(".listaInkomst")
                           
ul.appendChild(li);
                           
                             
                           
                           
}
     //  kostnad                        
else if(option.value === "-" ){
                                
var description =  document.querySelector("#description").value;
var value =  document.querySelector("#value").value;
                                                     
valueLista.push(   Number(-value)    )
                                                                         
var kostnadData = document.querySelector(".kostnadData")
kostnadData.innerText = value;

var li =  document.createElement("li");
li.innerText = description + " : " + value;
                                
var ul = document.querySelector(".listaKostnad")
ul.appendChild(li)
}
                           
// - vinst
var summa = 0;
for(var i= 0; i<valueLista.length; i++ ){
summa += valueLista[i];
}
var vinstSpan = document.querySelector(".vinstData")
                           
vinstSpan.innerText = summa;
                           
                           
}
     //clean                      
function rensa() {
                             
                               
location.reload();
                               
}
                           
                           
var btn = document.querySelector(".btn");
btn.addEventListener("click" , countTotalt );
                           
                           
var clean = document.querySelector(".rensa")
                           
clean.addEventListener("click", rensa )