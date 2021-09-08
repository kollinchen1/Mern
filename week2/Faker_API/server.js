// var faker = require('faker/locale/de');
var faker = require('faker');
const express = require("express");
const app = express();
const port = 8000;

class User{
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password()
    }
}
class Company{
    constructor(){
        this.name = faker.company.companyName();
        this.address = {
            street:faker.address.streetAddress(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCodeByState(),
            country:faker.address.country()
        }
    }
}
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.listen( port, () => console.log(`Listening on port: ${port}`) );
console.log(new User())
console.log(new Company())

app.get("/api/users/new", (req, res) => {
    res.json( new User() );
});
app.get("/api/companies/new", (req, res) => {
    res.json( new Company() );
});
app.get("/api/user/company", (req, res) => {
    res.json({
        User:new User(),
        Company:new Company()

    });

});