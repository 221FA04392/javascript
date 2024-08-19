let person;

function createPerson() {
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);

   
    person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        getFullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        incrementAge: function() {
            this.age += 1; 
        }
    };

    
    displayPersonInfo();
    document.getElementById('incrementSection').style.display = 'block';
}

function incrementPersonAge() {
    
    person.incrementAge();
    displayPersonInfo();
}

function displayPersonInfo() {
    
    document.getElementById('output').innerText = `First Name: ${person.firstName}\nLast Name: ${person.lastName}\nFull Name: ${person.getFullName()}\nAge: ${person.age}`;
}
