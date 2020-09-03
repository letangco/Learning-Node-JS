var person = {
    firtName :"",
    lastName:"",
    getFullName : function(){
        return this.firtName + " " +this.lastName;
    }
};

var personA = Object.create(person);
personA.firtName="Lê Tăng";
personA.lastName = "Có";
console.log(personA.getFullName());