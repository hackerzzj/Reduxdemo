import Index from './page';
import List from './page/list';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './page/home';

function AppRouter(){
    return <Router>
        <ul>
          <li><Link to='/'>首页</Link></li>
          <li><Link to='/list/123'>列表</Link></li>
        </ul>
        <Route path='/' exact component={Index}/>
        <Route path='/list/:id'  component={List}/>
        <Route path='/home/'  component={Home}/>
    </Router>
}
export default AppRouter;
