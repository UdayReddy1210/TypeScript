export
class Person{
    firstName : String;
    lastName :String;

    constructor(firstName:string , lastName:string)
{
    this.firstName=firstName;
    this.lastName=lastName;

}
getname()
{
    return this.firstName;
    + this.lastName
}

}
/*var objectPerson = new Person();
objectPerson.firstName ="Uday";
console.log(objectPerson.firstName);
console.log("Reddy");*/
