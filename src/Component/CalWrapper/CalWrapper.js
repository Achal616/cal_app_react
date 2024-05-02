import Button from "../../Common/Button/Button"
import './CalWrapper.css'


const CalWrapper = (props) =>{

 

  const allButton = props.allbtArr.map((btObj)=>{

    return <Button key ={btObj.value} btnName = {btObj.value} btFun= {btObj.btFun} />;
  });

  const allopArr = props.operationArr.map((btObj)=>{

    return <Button key ={btObj.value} btnName = {btObj.value} btFun= {btObj.Fun} />;
  });

  console.log("allButton",allButton)

  return (
    <div className="main-cont">

    <div className="bt-Name">{allButton}</div>

    <div className="op-Name"> {allopArr}</div>
        
    
      
    </div>
  );
}

export default CalWrapper
