let personObj = new Object();
personObj.firstName = "John";
personObj.lastName = "Doe";
personObj.age = 50;
personObj.eyeColor = "blue";
personObj.smile = function(){
    document.write("^_____^");
};

let personObj2 = {
    firstName : "David",
    lastName : "Kuo",
    age : 40,
    eyeColor : "yellow",
    smile : function () {
        document.write("^3^");
    }
}


function personProto(firstName,lastName,age,eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.smile = function(){
        document.write("A_A");
    }
} 

let person3 = new personProto("ken","huang","30","brown");
