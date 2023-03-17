function changeimage(){
    var image =document.getElementById('my image');
    if(image.src.match("bulbon")){
        image.src = "pic_bulboff.gif";
    }else{
        image.src = "pic_bulbon.gif";
    }
}
    let lastname ="Ganew";
    let firstname = "Masahudu ";
    let myname = firstname + lastname;
    let a = "My name is " + myname;
    alert(a)
    

    let r =5*7+3/2-3;
    
    console.log(r)
     
    let text ="what is your "
    text += "name"
    console.log(text)

    function product(a,b){
    return a*b}
    let y = product(4,7)
    console.log(y);


    const person = {
        firstname:"Ganew",
        lastname:"Masahudu",
        age : 21,
        eyecolor:"black",
        fullname : function () {
            return this.lastname + " " + this.firstname
        }
    };
    console.log(person["firstname"] + " "+ person.lastname+" is " + person.age + "years old" + " and has an eye color of " + person["eyecolor"])
    console.log(person.fullname())