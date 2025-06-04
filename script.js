var coinNumber = Math.floor(Math.random() * 2)+1;

// change the image based on the coinNumber
function flipCoin(){
  var head=document.querySelector("#coin").src="images/coin"+coinNumber+".png";
  if(coinNumber==1){
    document.querySelector("#result").innerHTML="Heads";
  }
  else{
    document.querySelector("#result").innerHTML="Tails";
  }
  coinNumber = Math.floor(Math.random() * 2)+1;
  return coinNumber;
};




