/**
 * 02-react-router
 *
 * 安装react-router-dom后,react-router-dom提供了很多的组件
 * 三个核心组件:
 *  HashRouter:React项目的路由容器,一个应用中只能有一个Router,只能包裹住整个项目的一个根布局,相当于vue的VueRouter
 *  Link:定义导航链接,最终会被渲染成a标签,类似于vue-router中的router-link
 *  Route:设置路由的匹配规则,是路由的出口,一个Route对应一条规则
 *
 * react-router:提供两个router
 *  不同点:
 *      HashRouter:基于锚点实现的,在地址栏中包含"#"
 *      BrowserRouter:基于H5中的history模式实现,地址栏中没有"#"
 *  相同点:
 *      HashRouter:1.包裹整个react组件的根布局,只能有一个子元素, 2.一个项目中只有一个router
 *
 * Link:提供了两个link
 *  不同点:
 *      NavLink:会给当前选中的组件,自动增加一个类名:active,可以自己写样式
 *              有exact属性,使用:配合空路径'/'使用,如:<NavLink exact to={'/'}>首页</NavLink>
 *      Link:不会给选中的组件增加类名:active
 *  相同点:
 *      都是导航标签
 *
 * Route:
 *  常用属性:
 *      path:表示匹配的路径,不写,无论如何都会显示组件
 *      component:路径对应显示的组件
 *      exact: 精确的
 *        path='/':
 *            如果不加exact,匹配所有以/开始的路径
 *            如:
 *              <Route path={'/'} component={Home}/>
 *              <Route path={'/user'} component={User}/> '/user'会匹配到'/'
 *            加了exact,精确匹配/
 *            如:
 *              <Route path={'/'} component={Home}/>
 *              <Route path={'/user'} component={User}/> '/user'匹配不了'/'
 *
 * Switch:
 *  保证永远只有一个Route能匹配上,如果有多个Route匹配上了,也只会显示一个
 *
 *
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {
    // HashRouter as Router,// 可以取别名
    BrowserRouter as Router,// 可以取别名
    Link, NavLink,
    Route,
    Switch
} from "react-router-dom";
import './index.css'

class Home extends React.Component {
    render() {
        return <div>首页</div>;
    }
}

class User extends React.Component {
    render() {
        return <div>用户</div>;
    }
}

class About extends React.Component {
    render() {
        return <div>关于</div>;
    }
}

class Demo extends React.Component {
    render() {
        return <Router>
            <div>
                react-router的基本使用
                <nav>
                    <ul>
                        {/*<li><NavLink exact to={'/'}>首页</NavLink></li>*/}
                        <li><NavLink to={'/'}>首页</NavLink></li>
                        <li><NavLink to={'/user'}>用户</NavLink></li>
                        <li><NavLink to={'/about'}>关于</NavLink></li>
                    </ul>
                </nav>
                {/*
                path:表示匹配的路径,不写,无论如何都会显示组件
                component:路径对应显示的组件
                exact: 精确的
                  path='/':
                      如果不加exact,匹配所有以/开始的路径
                      如:
                        <Route path={'/'} component={Home}/>
                        <Route path={'/user'} component={User}/> '/user'会匹配到'/'
                      加了exact,精确匹配/
                      如:
                        <Route path={'/'} component={Home}/>
                        <Route path={'/user'} component={User}/> '/user'匹配不了'/'
                */}
                <Switch>
                    {/*<Route exact path={'/'} component={Home}/>*/}
                    <Route path={'/user'} component={User}/>
                    <Route path={'/about'} component={About}/>
                    <Route path={'/'} component={Home}/>
                </Switch>
            </div>
        </Router>
    }
}

ReactDOM.render(<Demo/>, document.getElementById('root'))
