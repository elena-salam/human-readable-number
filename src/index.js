module.exports = function toReadable (number) {
    const a = String(number).split('');
    let newArr = []
  
    if(a.length===3 && a[0]==1){
        newArr.push('one hundred ')
      } if(a.length===3 && a[0]==2){
          newArr.push('two hundred ')
      } if(a.length===3 && a[0]==3){
          newArr.push('three hundred ')
      } if(a.length===3 && a[0]==4){
          newArr.push('four hundred ')
      } if(a.length===3 && a[0]==5){
          newArr.push('five hundred ')
      } if(a.length===3 && a[0]==6){
          newArr.push('six hundred ')
      } if(a.length===3 && a[0]==7){
          newArr.push('seven hundred ')
      } if(a.length===3 && a[0]==8){
          newArr.push('eight hundred ')
      } if(a.length===3 && a[0]==9){
          newArr.push('nine hundred ')
      } 
      

    if(a.length===2 && a[0]==1 || a.length===3 && a[1]==1){
     if(a[a.length-1]==0){
          newArr.push("ten")
      }
     if(a[a.length-1]=="1"){
        newArr.push("eleven")
    }
    if(a[a.length-1]=="2"){
        newArr.push("twelve")
    }
    if(a[a.length-1]=="3"){
        newArr.push("thirteen")
    }
    if(a[a.length-1]=="4"){
        newArr.push("fourteen")
    }
    if(a[a.length-1]=="5"){
        newArr.push("fifteen")
    }
    if(a[a.length-1]=="6"){
        newArr.push("sixteen")
    }
    if(a[a.length-1]=="7"){
        newArr.push("seventeen");
    }
    if(a[a.length-1]=="8"){
        newArr.push("eighteen")
    }
    if(a[a.length-1]=="9"){
        newArr.push("nineteen")
    }
  }
    
      if(a.length===2 && a[0]==2 || a.length===3 && a[1]==2){
        newArr.push('twenty ')
      } 
      if (a.length===2 && a[0]==3 || a.length===3 && a[1]==3){
        newArr.push('thirty ')
      } 
      if(a.length===2 && a[0]==4 || a.length===3 && a[1]==4){
        newArr.push('forty ')
      }  
      if(a.length===2 && a[0]==5 || a.length===3 && a[1]==5){
        newArr.push('fifty ')
      }  
      if(a.length===2 && a[0]==6 || a.length===3 && a[1]==6){
        newArr.push('sixty ')
      }  
      if(a.length===2 && a[0]==7 || a.length===3 && a[1]==7){
        newArr.push('seventy ')
      }  
      if(a.length===2 && a[0]==8 || a.length===3 && a[1]==8){
        newArr.push('eighty ')
      }  
      if(a.length===2 && a[0]==9 || a.length===3 && a[1]==9){
        newArr.push('ninety ')
      }
   
      if(a.length===1 && a[0]==0 ) {
        newArr.push('zero')
      } 
      if(a.length===1 && a[0]==1 || a.length===2 && a[1]==1 && a[0] !=1|| a.length===3 && a[2]==1 && a[1] !=1) {
        newArr.push('one')
      }
      if(a.length===1 && a[0]==2 || a.length===2 && a[1]==2 && a[0] !=1|| a.length===3 && a[2]==2 && a[1] !=1){
        newArr.push('two')
      } 
      if(a.length===1 && a[0]==3 || a.length===2 && a[1]==3 && a[0] !=1|| a.length===3 && a[2]==3 && a[1] !=1){
        newArr.push('three')
      }
      if(a.length===1 && a[0]==4 || a.length===2 && a[1]==4 && a[0] !=1|| a.length===3 && a[2]==4 && a[1] !=1){
        newArr.push('four')
      }
      if(a.length===1 && a[0]==5 || a.length===2 && a[1]==5 && a[0] !=1|| a.length===3 && a[2]==5 && a[1] !=1){
        newArr.push('five')
      }
      if(a.length===1 && a[0]==6 || a.length===2 && a[1]==6 && a[0] !=1|| a.length===3 && a[2]==6 && a[1] !=1){
        newArr.push('six')
      }
      if(a.length===1 && a[0]==7 || a.length===2 && a[1]==7  && a[0] !=1|| a.length===3 && a[2]==7 && a[1] !=1){
       newArr.push('seven')
      }
      if(a.length===1 && a[0]==8 || a.length===2 && a[1]==8 && a[0] !=1|| a.length===3 && a[2]==8 && a[1] !=1){
        newArr.push('eight')  
      } 
      if(a.length===1 && a[0]==9 || a.length===2 && a[1]==9 && a[0] !=1|| a.length===3 && a[2]==9 && a[1] !=1){
        newArr.push('nine')
      }
    
   return(newArr.join("").trim())
}
