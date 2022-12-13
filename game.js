var rock=document.querySelector('#rock')
var paper=document.querySelector('#paper')
var scissors=document.querySelector('#scissors')
var c_rock=document.querySelector('#c_rock')
var c_paper=document.querySelector('#c_paper')
var c_scissors=document.querySelector('#c_scissors')
var userText=document.querySelector('.usrWin')
var compText=document.querySelector('.comWin')
var game=['r','p','s']
var userChoice;
var compChoice;
var compWin=0;
var userWin=0;


function resetGame(){
    rock.style.display='block'
    scissors.style.display='block'
    paper.style.display='block'
    c_rock.style.display='none'
    c_scissors.style.display='none'
    c_paper.style.display='none'
    

}

rock.onclick=function(){
    paper.style.display='none'
    scissors.style.display='none'
    userChoice='r'
    compChoice=game[Math.floor(Math.random()*game.length)]
    if(compChoice=='p'){
        compWin++
        c_paper.style.display='block'
    }
    else if(compChoice=='s'){
        userWin++
        c_scissors.style.display='block'

    }
    else{
        compWin=userWin
        c_rock.style.display='block'
        
    }
    setTimeout(resetGame, 2000)
    userText.innerHTML=userWin
    compText.innerHTML=compWin
    
}

paper.onclick=function(){
    rock.style.display='none'
    scissors.style.display='none'
    userChoice='p'
    compChoice=game[Math.floor(Math.random()*game.length)]
    if(compChoice=='r'){
        userWin++
        c_rock.style.display='block'
    }
    else if(compChoice=='s'){
        compWin++
        c_scissors.style.display='block'

    }
    else{
        compWin=userWin
        c_paper.style.display='block'
    }
    setTimeout(resetGame, 2000)
    userText.innerHTML=userWin
    compText.innerHTML=compWin
}

scissors.onclick=function(){
    rock.style.display='none'
    paper.style.display='none'
    userChoice='s'
    compChoice=game[Math.floor(Math.random()*game.length)]
    if(compChoice=='p'){
        userWin++
        c_paper.style.display='block'
    }
    else if(compChoice=='r'){
        compWin++
        c_rock.style.display='block'

    }
    else{
        compWin=userWin
        c_scissors.style.display='block'
    }
    setTimeout(resetGame, 2000)
    userText.innerHTML=userWin
    compText.innerHTML=compWin
}