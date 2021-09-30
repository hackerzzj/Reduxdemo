import {Link, Route} from 'react-router-dom'
import Getup from './pages/workplace/getup'
import Money from './pages/workplace/money'
function Workplace(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/workplace/money/">程序员加薪秘籍</Link></li>
                    <li><Link to="/workplace/getup/">程序员早起攻略</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>职场规划</h3></div>
                <Route path='/workplace/money/' component={Money}/>
                <Route path='/workplace/getup/' component={Getup}/>
            </div>
        </div>
    )
}
export default Workplace