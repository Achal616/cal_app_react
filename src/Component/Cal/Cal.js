
import {useState} from "react";
import CalWrapper from "../CalWrapper/CalWrapper"



const Cal =() =>{

  const [inputVal1, setInputVal1] = useState(0);
  const [operationVal, setOperationVal] = useState(0);
  const [currentOperation, setCurrentOperation] = useState(" ");

  const allbtArr = [
    {value:0,
       btFun:()=>{
      
      setInputVal1((preValue)=> parseInt(preValue.toString() +0))
    },
  },
   
      {value:1,
         btFun:()=>{
        setInputVal1((preValue) =>parseInt(preValue.toString() +1)) //short me kiya hai
      },
    },

        {value:2, btFun:()=>{
          const newValue = inputVal1.toString()+2;     //is long code ko upar short me kiya hai inpute value previus value leke aati haiisiliye hmne input value ki separret variable n bnakr prevalutue  ko hi toString kiya hai
          setInputVal1(parseInt(newValue))}},

          {value:3, btFun:()=>{
            const newValue = inputVal1.toString()+3;
            setInputVal1(parseInt(newValue))}},

            {value:4, btFun:()=>{
              const newValue = inputVal1.toString()+4;
              setInputVal1(parseInt(newValue))}},
  

  ];

  const operationArr = [

    {
      value :"+",
      Fun :()=>{
             setCurrentOperation("+");
             setOperationVal(inputVal1);
             setInputVal1(0)

      },
    },

      {
        value : "-",
        Fun :()=>{
          setCurrentOperation("-");
          setOperationVal(inputVal1);
          setInputVal1(0)
        },
      },

      {
        value : "/",
        Fun :()=>{
          setCurrentOperation("/");
          setOperationVal(inputVal1);
          setInputVal1(0)
        },
      },

      {
        value : "*",
        Fun :()=>{
          setCurrentOperation("*");
          setOperationVal(inputVal1);
          setInputVal1(0)
        },
      },

      {
        value : "=",
        Fun :()=>{
         
          if(currentOperation=== "+")
          {
            setInputVal1((preValue)=>{
             return preValue + operationVal;

            })
          }
            else if(currentOperation==="-"){
              setInputVal1((preValue)=>{
                return operationVal-preValue;
              })
              
            }else if(currentOperation==="*"){

              setInputVal1((preValue)=>{

                 return operationVal*preValue;
              })
            }else if(currentOperation==="/"){
              setInputVal1((preValue)=>{
                return operationVal/preValue;
              })
            }else{
              setInputVal1((preValue)=>{
                return preValue
              })
            }
          
              
            }

            }
          
        
      
  ];

  return (
    <div id="dd">
      
      <h2> Calculattor {inputVal1}</h2>
      <p> {currentOperation}</p>
      <p>{operationVal}</p>
      <CalWrapper allbtArr={allbtArr} operationArr ={operationArr}/>
    </div>
  )
}

export default Cal
