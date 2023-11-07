try{
    alert("Welcome to Javascript");
}
catch(e){
    console.log(e.message);
}

//Try Catch:
const numerator = 10, denominator = 'a';
try{
    console.log(numerator/denominator);
    console.log(a);
}
catch(error)
{
    console.log('Error caught');
    console.log('Error message: ' + error);
}
finally{
    console.log('Finally this block will be executed regardless of the result');
}

//throw the exception
const number = 1;
try{
    if(number > 10){
        console.log('Number is high')
    }
    else{
        throw new Error('Number is too low');
    }
    // if throw executes, the below code does not execute
    console.log('hello');
}

catch(error){
    console.log('Error message:' + error);
}

//Or 
const num = 50;
try{
    if(num>10){
        throw "Number is high";
    }
    else{
        throw "Number is too low";
    }
}
catch(err){
    console.log(err);
}