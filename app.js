var accPass = 'password123'
var userPass = prompt('Enter your password: ')
if (userPass === accPass) {
    document.write(`<center> <h2 style='color:green';> Welcome to my website, Your Password is Correct! </h2> </center>`)
}
else{
    document.write(`<center> <h2 style='color:red';> Incorrect password </h2> </center>`)
}