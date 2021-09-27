export const TodoList = function(props){
    return ( <div>
        <div style={{ width: '220px'}}>
        <input type='text' onChange={props.inputValueChange} value={props.state.inputValue}/> 
        <button type='primary' onClick={props.additem}>添加</button>
        </div>
        <div style={{ width: '169px'}}>
        <ul>
            {props.state.data.map(
                (value, index)=>(
                    <li  style={{cursor:'pointer'}} 
                    key={index} 
                    onMouseEnter={(event)=>{
                        event.target.style.color = 'red'
                    }}
                    onMouseOut={(event)=>{
                        event.target.style.color = ''
                    }}
                    onClick={()=>{props.deleteItem(index)}}>{value}</li>
                )
            )}
        </ul>
        </div>
    </div> );
}