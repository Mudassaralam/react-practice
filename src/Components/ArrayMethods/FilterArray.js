import React from 'react';


function FilterArray(){

    // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    // const words = [12, 16, 18, 20,44];
        // function isAdult(age){
        //     return age>=18;
        // }
        // const adult = [12, 16, 18, 20,44].filter(isAdult);    
        // console.log(adult);

    const even = [1,2,4,5,6,7,8,9,10,12,13,14,15,16,17];
    const checkEven = even.filter(evenFn);

    function evenFn(num){
        if(num%2===0|| num===0){
        return num;                 
        }
    }
    console.log(checkEven)


    // console.log(even);   



    
    return(
        <>
                <h1>Filter Method</h1>
        </>
    )
}
export default FilterArray;