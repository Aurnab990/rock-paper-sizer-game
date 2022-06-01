
    const value =document.getElementById('demo').addEventListener = Math.floor(Math.random()*3);
    
    const handleClick = () =>{
        if(value == 0){
            document.getElementById('demo').innerHTML="DRAW";
        }
        else if(value==1){
            document.getElementById('demo').innerHTML="Machine Win";
        }
        else if(value==2){
            document.getElementById('demo').innerHTML="You Win";
        }
    }
    const handleClickTwo = () =>{
        if(value == 1){
            console.log("Draw",value);
        }
        else if(value==2){
            console.log("Machine Winner",value);
        }
        else if(value==0){
            console.log("You WIn",value);
        }
    }
    const handleClickThree = () =>{
        if(value == 2){
            console.log("Draw",value);
        }
        else if(value==0){
            console.log("Machine Winner",value);
        }
        else if(value==1){
            console.log("You WIn",value);
        }
    }




