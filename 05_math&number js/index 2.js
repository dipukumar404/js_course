let mytime = new Date();
// console.log(mytime); // NOT TO READABLE FORM 
// console.log(mytime.toString()); // to convert into the string;
// console.log(mytime.getTime());
// console.log(mytime.toLocaleString());
// console.log(typeof mytime); // Date is a object;



// let createdDate = new Date(2023,8,20);
// // let createdDate = new Date("2023-08-20");
// let createdDate = new Date("01-20-2023");
// // console.log(createdDate.toLocaleString());// find the today date;
// let myTimeStem = Date.now();
// // console.log(myTimeStem.toString());
// console.log(Date.now())// it give me milesecond;
// console.log(Math.floor(Date.now()/1000)); // give me a second 

let newdate = new Date();
// console.log(newdate.toLocaleString());
// console.log(newdate.getDate());
// console.log(newdate.getMonth()+1);
// console.log(newdate.getFullYear());

newdate.toLocaleString('default',{
    weekday: "narrow",
})