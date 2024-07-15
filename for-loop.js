var marks = [41 , 63 , 23 , 76 , 54]

/*
* for (var i = 0 ; conditon ; increement ,decreement){

}
*
*
*/

for (var i = 0 ; i <= marks.length - 1 ; i++){
    if(80 < marks[i]){
        
        console.log( " index of i = " , i , " result = A+")
    }
    else if(70 < marks[i]){
        
        console.log(" index of i = " , i ," result =  A")
    }
    else if(60 < marks[i]){
        continue;
        console.log(" index of i = " , i ," result =  A-")
    }
    else if(50 < marks[i]){
        
        console.log(" index of i = " , i ,"result =  B")
    }
    else if (40 < marks[i]){
        
        console.log(" index of i = " , i , " result =  C")
    }
    else {
        
        console.log(" index of i = " , i ,"result =  fail")
    }
}