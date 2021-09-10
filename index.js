import { intervalToDuration } from 'https://cdn.skypack.dev/date-fns';
let counters = { '0' : true,
                 '1' : true,
                 '2' : true,
                 '3' : true,
}

function pad_with_zeroes(number, len=2) {
  var zeroes = "0".repeat(len);
  return zeroes.substring(number.toString().length, len) + number;
}
  
const compareDuration = (duration,currDuration)=>{
    let changesFound = new Array();
    if(currDuration.seconds===0 && currDuration.minutes===0 && currDuration.hours==0 && currDuration.days===0){
      clearInterval(interval);
      alert('Timer Complete')
    }
    changesFound.push({id:'0',change : !(duration.seconds===currDuration.seconds),maxValue : 59,duration:duration.seconds});
    changesFound.push({id:'1',change : !(duration.minutes===currDuration.minutes),maxValue : 59,duration:duration.minutes});
    changesFound.push({id:'2',change : !(duration.hours===currDuration.hours),maxValue : 23,duration:duration.hours});
    changesFound.push({id:'3',change : !(duration.days===currDuration.days),maxValue : 31,duration:duration.days});
    return(changesFound);

  }
  const setTimeOnCard = ( node1,node2,node3,value)=>{
    node1.textContent = pad_with_zeroes(value);
    node2.textContent = pad_with_zeroes(value);
    node3.textContent = pad_with_zeroes(value);
  }
  const cardVisibility = (card,visibility,opacity)=>{
    card.style.visibility = `${visibility}`;
    card.style.opacity = `${opacity}`;
  }
  const cardRotation = (card,angleOfRotation)=>{
    card.style.webkitTransform = `rotateX(${angleOfRotation})`;
    
  }

  const updateSingleTimeCard = (id,time,maxTime,counter)=>{
  const innerCardOne = document.getElementById(id).getElementsByClassName('flip-card-inner-one')[0];
  const innerCardTwo = document.getElementById(id).getElementsByClassName('flip-card-inner-two')[0];  
  const staticTop = document.getElementById(id).getElementsByClassName('static-top')[0];  
  const staticBottom = document.getElementById(id).getElementsByClassName('static-bottom')[0];
  const cardOneFront = document.getElementById(id).getElementsByClassName('flip-card-one-front')[0];
  const cardOneBack = document.getElementById(id).getElementsByClassName('flip-card-one-back')[0];
  const cardTwoFront = document.getElementById(id).getElementsByClassName('flip-card-two-front')[0];
  const cardTwoBack = document.getElementById(id).getElementsByClassName('flip-card-two-back')[0];
    if(counter){
      counters[id] = false; 
      setTimeOnCard(staticTop,cardOneBack,cardTwoBack,time)
      if(time===maxTime)
      {
        setTimeOnCard(staticBottom,cardOneFront,cardTwoFront,0);

      }
      else{
        setTimeOnCard(staticBottom,cardOneFront,cardTwoFront,time+1)
        
      } 
      cardVisibility(innerCardOne,"visible","1");
      cardVisibility(innerCardTwo,"hidden","0");
      cardRotation(innerCardOne,"-180deg");
      cardRotation(innerCardTwo,"180deg");
    }
    else{
      counters[id] = true;
      setTimeOnCard(staticTop,cardOneFront,cardTwoFront,time);
      if(time===maxTime)
      {
        setTimeOnCard(staticBottom,cardOneBack, cardTwoBack,0);         
      }
      else{
        setTimeOnCard(staticBottom,cardOneBack, cardTwoBack,time+1);
      }
      cardVisibility(innerCardTwo,"visible","1");
      cardVisibility(innerCardOne,"hidden","0");
      cardRotation(innerCardOne,"0deg");
      cardRotation(innerCardTwo,"0deg");
    }

  }
    let firstEncounter = true;
    let currDuration;
    const updateTimer =()=>{
      let duration = intervalToDuration({
        start: new Date(),
        end: new Date(2021,8,11,22,47)
      })
      
      if(firstEncounter){
        firstEncounter = false;
        currDuration = {
          days: -1,
          hours: -1,
          minutes: -1,
          months: -1,
          seconds: -1,
          years: -1
        }   
      }

    let changesFound = compareDuration(duration,currDuration);

    changesFound.forEach(changeObj=>{
      if(changeObj.change){
        updateSingleTimeCard(changeObj.id,changeObj.duration,changeObj.maxValue,counters[changeObj.id]);  
      }

    })
    currDuration = duration;
    }
    updateTimer();
    let interval = setInterval(updateTimer, 1000);