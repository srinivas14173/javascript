//function we use for modularity
//reusable block
//function only executes when it's called.
/*function add(a,b){
    return a+b;
}*/
let add=(a,b)=>{
    return a+b;
}
let mul=(a,b)=>{
    return a*b;
}
let avg=(a,b)=>{
    return add(a,b)/2;
}
let n1=100;
let n2=200;
let addition=add(n1,n2);
    console.log(addition);
let multiplication=mul(n1,n2);
    console.log(multiplication);
let average=avg(n1,n2);
console.log(average);
// predefined function
let employee="Tom Wilson";
let employee2="KEVIN WILLIAM   ";
/*let firstname=employees.slice(4,10)
    console.log(firstname);*/
/*let firstname=employees.slice(-10,-4)
console.log(firstname);*/
/*let firstname=employees.slice(4)
console.log(firstname);*/
let firstname=employee.substring(4,10)
console.log(firstname);
console.log(firstname.toUpperCase());
console.log(employee2.toLowerCase());
console.log(employee2.trim());


//substring will not accept negative value;
/*
Distinctions of substring():
If start > stop, then substring will swap those 2 arguments.
    If either argument is negative or is NaN, it is treated as if it were 0.
Distinctions of slice():

If start > stop, slice() will return the empty string. ("")
If start is negative, It sets char from the end of string, like substr().*/

let text1="I like TESLA"
console.log(text1.replace("tesla","honda"))
console.log(text1.replace(/tesla/i,"honda"))

//SEARCH

let cities=
"chicago,houston,dallas,san jose,austin, fort worth,portland,boston,memphis,San fernando,atlanta,tulsa,aurora,orlando,santa clarita,irvine,dallas,cincinnati,plano,san bernardino, garland";
let key="boston";
    console.log(cities.search(key));
    console.log(cities.includes(key));
    console.log(cities.indexOf("austin"));
    console.log(cities.indexOf("hyderabad"));
    console.log(cities.lastIndexOf("dallas"))
    console.log(cities.match(/san/g));
    console.log(cities.match(/san/gi))




















