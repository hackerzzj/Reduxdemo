
function App(props) {
  return (
    <div>
      <div style={{width:'300px'}}>
        <input value={props.inputValue} onChange={props.inputChange}/>
        <button onClick={props.clickButton}>添加</button>
      </div>
      <div style={{width:'300px'}}>
        <ul>
          {props.list.map((value,index)=>{
            return <li key={index} onClick={()=>{props.deleitem(index)}}>{value}</li>
          })}
        </ul>
    </div>
  </div>
  );
}

export default App;
