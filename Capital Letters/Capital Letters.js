//! Sellectör
// textarea
const textareaEl = document.querySelector(".form-control");
const convertBtn = document.querySelector(".btn")
const rowEl =  document.querySelector(".row")
const sonucDiv = document.querySelector(".sonuc")


// ! veriables
let arrText = " ";
//! listener
convertBtn.addEventListener("click", (e) => {

const arrText = textareaEl.value.split(" ");

for (let i = 0; i < arrText.length; i++) {

arrText[i] = arrText[i].charAt(0).toUpperCase() + arrText[i].slice(1) + " ";

}

   const textareaValue = textareaEl.value   
      const divEl = document.createElement("div")
      divEl.classList.add("col-12","sonuc", "bg-light", "text-danger", "mt-3", "p-3")
      divEl.innerText = arrText.join(" ");

      rowEl.appendChild(divEl)

      
      textareaEl.value = "";
})




//! function

let daltonesContinue = ['joe', 'Jack', 'Willam', 'Averell']
for(let i =0; i< daltonesContinue.length; i++){
 if(i == 1){
 continue; // bunu yapma es geç demek 
 }
 console.log(daltonesContinue[i]);
}

let daltones = ['joe', 'Jack', 'Willam', 'Averell']
for(let i =0; i< daltones.length; i++){
 if(i == 2){
 break; // buraya kadar kodu çalıştırdı burada durdu bıraktı.
 }
 console.log(daltones[i]);
}




let avengers = ['Iron Man', 'Captain America', 'Black Widow', 'Hulk']
avengers.splice(2,1,'Thor', 'Hawkeye');
console.log(avengers)

let avengers2 = ['Iron Man', 'Captain America', 'Black Widow', 'Hulk']
avengers2.splice(2,0,'Thor', 'Hawkeye');
console.log(avengers2)

let avengers3 = ['Iron Man', 'Captain America', 'Black Widow', 'Hulk', "Doctor Strange"]
avengers3.splice(2,2,'Thor', 'Hawkeye');
console.log(avengers3)


let fullStack = {
   languages: ["JavaScript", "React", "HTML"],
   jira: true,
   gitHub: true,
   difficulty: 8,
  }

const fullLanguages = fullStack.languages
console.log(fullLanguages)
const strLanguges = fullLanguages.join("  ");
console.log(strLanguges)



// const splitArray = fullStack.split(" ");
// console.log(splitArray)

// const spreadArray = [...fullStack]
// console.log(spreadArray)



//   for(){
//   //write your code here
//   }
  