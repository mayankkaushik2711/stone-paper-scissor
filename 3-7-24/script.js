//.............template literals.................

// let obj = {
//   name: "endavour",
//   num: 10000,
// };

// function call() {
// //   document.write("gadi ", obj.name, " ke liye ", obj.num, " de or leja ");
// document.write(`gadi ${obj.name} ${obj.num} me le jao `)
// }

// call();

//...........toUpperCase...toLowerCase.....trim(removes white spaces from front and back)

// function call() {
//   let str = "    PAPA MAMMA";
//   alert(`alert is ${str.trim()}`);
// }

// call();




//...............replace........

// let str =
//   "my father name is komal prasad kaushik ji madhu's father name is also same";

// let strin = str.replaceAll("father", "pitajis");

// alert(strin);





//.......for loop.............

// let str="mayank";

// for(var i=0 ; i<str.length ; i++){
//     console.log(str.charAt(i));
// }




//..................assignment................

// var str = prompt("enter your full name");

// alert(`your user name is @${str}12`);



//...................array[1]...........

// let arr=new Array;
// arr[0]=10;
// arr[1]=20;
// arr[2]=30;
// arr[3]=40;

// for(var i=0 ; i<arr.length ; i++){
//     console.log(arr[i]);
// }






//.....................array[2]............

// let arr=new Array(4);
// arr[0]=10;
// arr[1]=20;
// arr[2]=30;
// arr[3]=40;

// for(var i=0 ; i<arr.length ; i++){
//     console.log(arr[i]);
// }

//......................array[3]...........


// let arr=[250,600,900,50];

// for(var i=0 ; i<arr.length ; i++){
//     arr[i]=arr[i]*0.1;
// }

// for(var i=0 ; i<arr.length ; i++){
//     console.log(arr[i]);
// }


//.....................slice()............splice()...............

// let arr=[1,2,3,4,5];


//........................arrow function......................
// const retVowel = (str) => {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//         console.log(str[i]);
//       }
//     }
//   };


//..........................callback(simple function).................................

// let arr=[1, 2, 3, 10000000,4, 5];

// arr.forEach(function printVal(val){
//     console.log(val);
// })

//...........................callback(arrow function)......................

// let arr=[1,2,3,4,5,6,7,8,9];

// arr.forEach((val) => {
//     console.log(val);
// })


//.....................................question ...................................

// let arr=[1,2,3,4,5,6,7,8,9];

// arr.forEach((val,i,arr) => {
//     console.log(Math.pow(val,2),i,arr);
// })

//...................................another method to write callback

// let arr=[1,2,3,4,5,6,7,8];

// let power = (val) => {
//     console.log(val**2);
// }

// arr.forEach(power);

//.........................map.....................

// let arr=[1,2,3,4,5,6,7,8];

// let papa=arr.map((val)=>{
//     return val*2;
// })

//.............................reduce..................

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let answer= arr.reduce((res,curr)=>{
//     return res>curr?res:curr;
// });

// console.log(answer);

//.................filter...................

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let toppers=arr.filter((val)=>{
//     return val>=8;
// })

// console.log(toppers);



//.........................practice.....................

// let n=prompt("enter number of elements in array");

// let arr=[];

// for(let i=0 ; i<n ; i++){
//     let temp=prompt(Number(`enter ${i}th element`))
//     arr.push(temp);
// }

// let sumAns=arr.reduce((prev,cur)=>{
//     return prev+cur;
// })

// console.log(sumAns);
// console.log(arr);

// let proAns=arr.reduce((prev,cur)=>{
//     return prev*cur;
// })

// console.log(proAns);


//............................DOM...........................

// let hello=document.getElementById("hello");
// let nae=document.getElementsByClassName("name");

// nae;

// console.dir(nae);
// console.log(nae);



// let para=document.querySelector("#hello");
// let experi=document.querySelector(".name");

// console.log(para);


//............................................

// let append = document.querySelector("h2");
// append.innerText="hello javascript from mayank";

//...........................................
// let sele=document.querySelectorAll("div");
// console.log(sele);

// sele.forEach((val,idx)=>{
//     if(idx%2==0){
//         val.innerText=val.innerText+"&\n";
//     }
//     else{
//         val.innerText=val.innerText+"$\n";
//     }
// })


//.................................................

// let div=document.querySelector("div"); 
// console.log(div);

// let get=div.getAttribute("id");
// console.log(get);

// let set = div.setAttribute("class","newClass");
// console.log(div);

// div.style.backgroundColor="green";

//..................................................

// let sel=document.querySelector("div");
// let fel=document.querySelector("div");
// let el=document.createElement("div");
// let tel=document.createElement("div");
// sel.prepend(tel);
// fel.append(el);
// tel.append("kesa hai bhai");

// let sel=document.querySelector("div");

// let add=document.createElement("h1");

// sel.before(add);

// add.append("kya bhok ra tera lund aj kal")

// add.prepend(sel);

// ........................................

// let newButton=document.createElement("button");

// newButton.style.backgroundColor="red";

// newButton.style.color="white";

// newButton.append("click me");

// let sel=document.querySelector("body");

// sel.prepend(newButton);

//.........................................

// let sel=document.querySelector("div");
// let so=sel.getAttribute("class");

// so.append("myClass");

// ..................................

// let body = document.querySelector("body");
// let btn = document.querySelector("button");

// let toggleDarkMode = () => {
//     if (body.style.backgroundColor === "black") {
//         body.style.backgroundColor = "white";
//         body.style.color = "black";
//         btn.style.backgroundColor = "black";
//         btn.style.color = "white";
//     } else {
//         body.style.backgroundColor = "black";
//         body.style.color = "white";
//         btn.style.backgroundColor = "white";
//         btn.style.color = "black";
//     }
// }

// btn.addEventListener("click", toggleDarkMode);


