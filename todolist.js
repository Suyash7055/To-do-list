let inputs =document.getElementById("inp");
let text=document.querySelector(".text");
function ADD(){
	if(inputs.value==""){
		alert("Please Enter Task");
}
else{
let newEle=document.createElement("ul");
	/*newEle.innerHTML=`${inputs.value}<i class="fa fa-trash" aria-hidden="true"></i>
`;*/
  let newEle2=document.createElement("li");
  newEle2.innerHTML=inputs.value+'<i class="fa fa-trash" aria-hidden="true"></i>';
 newEle2.style.listStyleType="none";
 newEle.appendChild(newEle2)
	text.appendChild(newEle);
	inputs.value="";
newEle.querySelector("i").addEventListener("click",remove);
function remove(){
newEle.remove()	
}
}

}