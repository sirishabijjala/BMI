while(true){
    mass = parseFloat(prompt('enter your mass in kg'))
    height = parseFloat(prompt('enter your height i cm?'))
    
    bmi = mass/(height/100)**2
    
    if(bmi<18.5){
        alert("You are underWeight")
    }
    else if(bmi<25){
        alert("You are normal weight")
    }
    else {
        alert("you are overWeight")
    }
    flag=prompt("Do you want to continue")
    if(flag=="no")
    {
        break
    }
    }