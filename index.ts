// let msg="hello"
// console.log(msg)
// let num=10
// if(num%2==0){
//     console.log(`${num} is even`)
// }else{
//     console.log(`${num} is odd`)
// }
// var x="Hi all"
// var y=10
// if(y>3){
//     let x="today we are learning typescript"
//     console.log("value -> ",x)
// }
// let a=true
// let b=false
// console.log(a || b)
// let number1=30
// let number2=20
// let result=(number1>number2)?"True":"False"
// console.log(result)
// let x:Array<number>=[10,20,30]
// console.log(x)
// var myarr:number[][]=[[1,2,3],[5,6,7]]
// console.log(myarr)
// console.log(typeof(myarr))
// let array:string[]=new Array("TCS","CTS","WIPRO")
// console.log(array)
// let mytuple:[number,boolean,string]
// mytuple=[10,false,"GIETU"]
// console.log(mytuple)
// let myname=new String("Tyescript training")
// console.log(myname.length)
// function show(a:number,b:number){
//     console.log(a+b)
// }
// show(10,20)
// function multiply(a:number,b:number){
//     return a*b
// }
// let value=multiply(10,20)
// console.log(value)
class University{
    name:string
    location:string
    state:String
    constructor(name:string,location:string,state:String){
        this.name=name
        this.location=location
        this.state=state
    }
    
}
const univ=new University("GIETU","Gunupur","Odisha")
console.log(univ)