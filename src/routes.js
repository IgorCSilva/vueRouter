
import PageNotFound from './components/user/PageNotFound.vue'
import Home from './components/Home.vue'
import Header from './components/Header.vue'

// Using lazy loading to load components only when they
// are requested.

const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'))
    }, 'user')
}
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'))
    }, 'user')
}
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'))
    }, 'user')
}
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'))
    }, 'user')
}


export const routes = [
    {path: '/', name: 'home', components: {
        default: Home,
        'header-top': Header
    }},
    {path: '/user', components: {
        default: User,
        'header-bottom': Header
    }, children: [
        {path: '', name: 'userDetail', component: UserStart},
        {path: ':id', component: UserDetail, beforeEnter: (toolbar, from, next) => {
            console.log('inside')
            next()
        }},
        {path: ':id/edit', component: UserEdit, name: 'userEdit'},
    ]},
    {path: '/redirect-me', redirect: {name: 'userDetail'}},
    {path: '/page-not-found', component: PageNotFound, name: 'pgNotFound'},
    {path: '*', redirect: '/page-not-found'}
]