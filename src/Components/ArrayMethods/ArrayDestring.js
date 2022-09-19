import React from "react";
import FilterArray from "./FilterArray";

function ArrayDestring(){

    // Array Desstructuring
    // const oldArray = ['potato','ginger','cabage','peas'];

    // const [x,y,z,a] = oldArray;

    // console.log(oldArray);
    // console.log(x,y)

    // Object Destructuring

    // const obj = {
    //     comp:'viltco',
    //     area:'arfa tower',
    //     steet:5,
    //     hobb :{
    //         first:"footbal",
    //         sec:'crkc'
    //     }
    // }

    // let{comp:company,area,street} = obj;
    //         // console.log(obj.steet);
    //         console.log(company );
    //         console.log(area);

    // let{comp:company,area,street,hobb:{first:myhobby,sec:sechobby}} = obj;

    // console.log(myhobby,sechobby);

    // let newArr = [1,2,3,4];

    // console.log(newArr);
    //Push method to add a value at the end of array
    //  newArr.push(5);
    // console.log(newArr);
    //pop method
    // newArr.pop();
    // console.log(newArr);

    //Shift method to remove value from first array
    // newArr.shift();
    // console.log(newArr);

    //Unshift method to add value in first of aray
    // newArr.unshift(12);
    // console.log(newArr);

    //Concat method to merge two arrays or add or value with a array
    // let oldaa = [5,6,7]
    // newArr.concat(oldaa);
    // console.log(newArr.concat(oldaa));

    //Join method to join the values of the array
    // let abc = ['a','b','c'];
    // console.log(abc.join('-'));

    //Slice method
    // let abc = ['a','b','c'];
    // console.log(abc.slice())

    // const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    // console.log(animals);
    // console.log(animals.slice());

    //IndexOf method to check the index of a value
    // const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    // console.log(animals.indexOf('elephant'));

    //Includes methods to check the is inlude or not
    // const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    // console.log(animals.includes('elephant'));

    //Find method to check the values i an array on condtion based
    // const newArr = [2,3,5,4,6];
    // const b = newArr.find(checkNo);
    // function checkNo(no){
    //     return no >3;
    // }
    // console.log(b);

    //FindIndexof method to check the index of a no by condition
    // const newArr = [2,3,5,4,6];
    // const b = newArr.findIndex(checkNo);
    // function checkNo(no){
    //     return no >3;
    // }
    // console.log(b);

    //Splice method to remove  an element from an array
    // const newArr = [2,3,5,4,6];
    // const b = newArr.splice(2,1);
    // console.log(newArr);

    //Filter Method 


    

    return(
        <>
                <h1>Array Destructuring</h1>
                <h3>Filter Array</h3>
                <FilterArray />
        </>
    )
}
export default ArrayDestring;