

 function deleteDigit(n) {
    let newN = String(n);
    newN = newN.split('');
    console.log(newN)
       if (newN[0]<newN[1]){
           newN.splice(0, 1);
       } else {
           let smallIndex
           for (let i = 1; i < newN.length; i++) {
               if (newN[i]< newN[i-1]){
                   smallIndex = i;
               }
           }
           newN.splice(smallIndex, 1);
       }
  
       newN = newN.join('')
       console.log(newN)
       return newN
  
   }

deleteDigit(864721)