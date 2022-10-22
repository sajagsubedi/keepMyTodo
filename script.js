let notesdiv=document.getElementById('notesdiv')
let alertbx=document.getElementById('alertbx')
const getAndUpdate=()=>{
let tit=document.getElementById('title');
let desc=document.getElementById('desc');
let notes=localStorage.getItem('notes')
if(tit.value.length !==0 && desc.value.length !==0){
 if(notes==null){
notesObj=[];
notesObj.push([tit.value,desc.value])
localStorage.setItem('notes',JSON.stringify(notesObj))
}
else{
notesObj=JSON.parse(notes)
notesObj.push([tit.value,desc.value])
localStorage.setItem('notes',JSON.stringify(notesObj))
}
tit.value=("")
desc.value=("")
tit.classList.add("border-green-500")
desc.classList.add("border-green-500")
alertbx.classList.add("bg-green-500")
alertbx.innerHTML=`<p class="text-white">Successfully added new Todo</p>`
setTimeout(()=>{
alertbx.classList.remove("bg-green-500")
alertbx.innerHTML=``
tit.classList.remove("border-green-500")
desc.classList.remove("border-green-500")
},1000)
update();
}
else{
let err=()=>{
if(tit.value.length ==0 && desc.value.length!==0){
tit.classList.add("border-red-500")
alertbx.classList.add("bg-red-500")
alertbx.innerHTML=`<p class="text-white">Please enter a valid value of title</p>`

}
else if(desc.value.length ==0 && tit.value.length !==0){
desc.classList.add("border-red-500")
alertbx.classList.add("bg-red-500")
alertbx.innerHTML=`<p class="text-white">Please enter a valid value of description</p>`
}
else{
tit.classList.add("border-red-500")
desc.classList.add("border-red-500")
alertbx.classList.add("bg-red-500")
alertbx.innerHTML=`<p class="text-white">Please enter a valid value of title and description</p>`
}
}
err();
setTimeout(()=>{
tit.classList.remove("border-red-500")
desc.classList.remove("border-red-500")
alertbx.classList.remove("bg-red-500")
alertbx.innerHTML=``
},1000)
}
}
const add=()=>{
getAndUpdate();
}

const update=()=>{
let notes=localStorage.getItem('notes')
if(notes==null){
notesObj=[];
  document.getElementById('notesdiv').innerHTML=`<p class="text-bold text-3xl my-5 text-center text-white">No Todo's to display</p>`
}
else{
notesObj=JSON.parse(notes)
  document.getElementById('notesdiv').innerHTML=`<p class="text-bold text-3xl my-5 text-center  text-white">No Todo's to display</p>`
}
let notesitems=" ";
notesObj.map((element,index)=>{
notesitems+=`
<div class="lg:flex my-5 min-h-[100px] px-5 py-3 border border-gray-700 mx-3 rounded lg:items-center w-1/1 bg-gray-800 lg:justify-between">
<div class="min-w-fit  min-h-[60px] flex-1">
<h2 class="text-2xl text-white font-bold leading-7  sm:truncate sm:text-3xl sm:tracking-tight">${element[0]}</h2>
<div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
<div class="mt-2 flex items-center text-1xl text-gray-500">${element[1]}</div> 
</div>
</div>
<span class="sm:ml-3 min-w-fit flex  items-center justify-center ">
<button  onclick="deletei(${index})" type="button" class="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-1 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
Delete
</button>
</span>
</div>`
  document.getElementById('notesdiv').innerHTML=notesitems
})
}
const deletei=(i)=>{
let notes=localStorage.getItem('notes')
notesObj=JSON.parse(notes)
notesObj.splice(i,1);
localStorage.setItem('notes', JSON.stringify(notesObj));
alertbx.classList.add("bg-green-400")
alertbx.innerHTML=`<p class="text-white">Deleted the Todi no. ${i+1}</p>`
setTimeout(()=>{
alertbx.classList.remove("bg-green-400")
alertbx.innerHTML=``
},900)
 update();
}

const clearstr=()=>{
let usr=confirm("Do you really want to clear storage")
if(usr){
localStorage.clear()
alertbx.classList.add("bg-green-400")
alertbx.innerHTML=`<p class="text-white">Cleared all the todos</p>`
setTimeout(()=>{
alertbx.classList.remove("bg-green-400")
alertbx.innerHTML=``
},900)
}
else{
alertbx.classList.add("bg-red-500")
alertbx.innerHTML=`<p class="text-white">Cancelled clearing the todo's</p>`
setTimeout(()=>{
alertbx.classList.remove("bg-red-500")
alertbx.innerHTML=``
},800)
}
update();
}
update();