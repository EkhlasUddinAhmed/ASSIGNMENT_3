
//1-Starting kilometerToMeterFunction
function kilometerToMeter(kilometerValue){
    let meterValue=0;
   
    if(kilometerValue==undefined){
        console.log("U have not yet Entered Value:Ur input Value will be considered Zero");
    }else if(Math.sign(kilometerValue)==-1){
      console.log("Negative Value is not Accepted for distance:Enter Correct Value: It is Zero Now");
  }else{
           if(typeof kilometerValue=='number'){
            meterValue= parseFloat(kilometerValue)*1000;
            
           }else if(isNaN(kilometerValue)){
               console.log("Not a Number: Invalid input: "+kilometerValue);
           }else{
                 let convertSrtingValue=parseFloat(kilometerValue);
                 if(typeof convertSrtingValue=='number')
                 {
                     meterValue=convertSrtingValue*1000;
                    
                 }else{
                      console.log("Not valid Input: "+kilometerValue);
                 }

           }
  }

  return meterValue;
}

//Ending kilometerToMeterFunction
  


//  2-BUDGET CALCULATOR Starting............

function budgetCalculator(watchQantity,phoneQuantity,laptopQuantity){
    
    let costforWatch=checkingInputValue(watchQantity,"Watch @ 50 dolar each")*50;
    let costforPhone=checkingInputValue(phoneQuantity,"Phone @ 100 dolar each")*100;
    let costforLaptop=checkingInputValue(laptopQuantity,"Laptop @ 500 dolar each")*500;

    const totalCost=costforWatch+costforPhone+costforLaptop;
    return totalCost;
}
// CheckingInputValue function starting...
function checkingInputValue(inputValue,nameValue){
    var validValue=0;

    if(inputValue==undefined){
    console.log("U have not yet Entered Value: This will be Considered ZERO Quantity for :"+nameValue );
   }else if(Math.sign(inputValue)==-1|| Math.sign(inputValue)==0){
     console.log("Negative or Zero Value is not Accepted:This will be Considered ZERO Quantity for   :"+ nameValue );
 }else if(isNaN(inputValue)){
     console.log("Not a Valid InPut Given:This will be Considered ZERO Quantity for :"+ nameValue);

 }else{
        var convertInput=parseFloat(inputValue);
        if(Number.isInteger(convertInput)){
            
            validValue=convertInput;
        }else{
            console.log("Fraction is not Valid Quantity..This will be Considered ZERO Quantity: for "+ nameValue);
        }
 }
    return validValue; 
}//End of checkingInputValue function
// 2-BUDGET CALCULATOR Ending............




 //  3-hotelCost Starting...............

 function hotelCost(dayofStay){

    var checkingValidDays=checkingInputValue(dayofStay,"No of days Staying in the Hotel")

    

    var totalCost=0;
    if(checkingValidDays<=10){
        totalCost=checkingValidDays*100;
    }else if(checkingValidDays<=20){
        totalCost=10*100+(checkingValidDays-10)*80;

    }else{
        totalCost=10*100+10*80+(checkingValidDays-20)*50
    }
    return totalCost;

 }//End Function
//3-HotelCost Ending



// 4-MegaFriend Starting.......
 
function megaFriend(inputArray)
{

    var lengthHoldingArray=[],indexHold, maxValue=0;
      
    for(var i=0;i<friendsName.length;i++)
     {
          if(checkValidName(friendsName[i])){
            lengthHoldingArray[i]=friendsName[i].length;
            if(maxValue<lengthHoldingArray[i])
            {
              maxValue=lengthHoldingArray[i];
               indexHold=i;
            }
          }else{
              console.log("..."+friendsName[i]+"...  is not Valid Name: This name will not be counted among others name ");
          }

      }
      return inputArray[indexHold];

 }
// 4-MegaFriend Endinging.......

// checkValidName function Starting
function checkValidName(nameValue){

    
    var nameIsOk=/^[a-zA-Z]+$/.test(nameValue);
    return nameIsOk;
     
}
// checkValidName function Ending


 

