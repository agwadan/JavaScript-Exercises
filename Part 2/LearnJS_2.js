//Printing HTML in JS.

/* var age = prompt('How old are you?');
document.getElementById('Instruction').innerHTML = age; */

document.getElementById("Instruction").innerHTML = 'Hit F12 to access dev tools in your browser.';

//_______Objects in JS______________

let student = {
    Fname       : 'Agwa', 
    Lname       : 'Daniel' , 
    Tname       : 'Abraham',
    Age         : 24,
    studentInfo : function() {
        return this.Fname + '\n ' + this.Lname + ' is ' + this.Age + ' years old';
    }
};
//console.log(student.Fname); //Output ----> Agwa

student.Age = 32;

//console.log(student.Age); //Output ----> 32

console.log(student.studentInfo());