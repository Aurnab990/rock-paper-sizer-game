
    const value =document.getElementById('demo').addEventListener = Math.floor(Math.random()*3);
    
    const handleClick = () =>{
        if(value == 0){
            document.getElementById('demo').innerHTML="DRAW";
            document.getElementById('machineDemo').innerHTML="ROCK"
        }
        else if(value==1){
            document.getElementById('demo').innerHTML="Machine Win";
            document.getElementById('machineDemo').innerHTML="PAPER"
        }
        else if(value==2){
            document.getElementById('demo').innerHTML="You Win";
            document.getElementById('machineDemo').innerHTML="SIZER"
        }
    }
    const handleClickTwo = () =>{
        if(value == 1){
            document.getElementById('demo').innerHTML="DRAW";
            document.getElementById('machineDemo').innerHTML="PAPER"
        }
        else if(value==2){
            document.getElementById('demo').innerHTML="Machine Win";
            document.getElementById('machineDemo').innerHTML="SIZER"
        }
        else if(value==0){
            document.getElementById('demo').innerHTML="You Win";
            document.getElementById('machineDemo').innerHTML="ROCK"
        }
    }
    const handleClickThree = () =>{
        if(value == 2){
            document.getElementById('demo').innerHTML="DRAW";
            document.getElementById('machineDemo').innerHTML="SIZER"
        }
        else if(value==0){
            document.getElementById('demo').innerHTML="Machine Win";
            document.getElementById('machineDemo').innerHTML="ROCK"
        }
        else if(value==1){
            document.getElementById('demo').innerHTML="You Win";
            document.getElementById('machineDemo').innerHTML="PAPER"
        }
    }
    const handleReset = () =>{
        location.reload();
        return false;
            

    }




