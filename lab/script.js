//Create a function named Run within our scirpt.js page.
//currently it accepts no parameters and does nothing.
function Run()
{
    //make a super simple json object
    var myObject =
    {
        myvalue: 'some text',
        subObject:
        {
            deeperValue1: 6,
            deeperValue2: "more stuff"
        }
    };

    //print it out to the console
    console.log(myObject);
}

function Run2()
{
    var person1 = BuildObject('dan', 39, 4.0);
    var person2 = BuildObject('edgar', 25, 2.0);
    var person3 = BuildObject('paul', 55, 3.9);

    console.log(person1);
    console.log(person2);
    console.log(person3);
}

function BuildObject(value1, value2, value3)
{
    var returnObject =
    {
        name: value1,
        age: value2,
        gpa: value3
    }

    return returnObject;
}


function Run3
{
    var person1 = BuildObject('dan', 39, 4.0);
    var person2 = BuildObject('edgar', 25, 2.0);
    var person3 = BuildObject('paul', 55, 3.9);

    var students = FindWorstStudent(students);

    console.log("The worst student has been found. It is: ");
    console.log(worstStudent);
}

function Run4()
{
    console.log(theJSON);

    var students = theJSON.data;

    var worstStudent = FindWorstStudent(students);

    console.log("The worst student has been found. It is: ");
    console.log(worstStudent);
}