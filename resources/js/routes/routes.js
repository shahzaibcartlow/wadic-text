
import IndexPage from '../components/pages/IndexPageComponent';
import CartPage from '../components/pages/CartPageComponent';


export default [
    {
        path: '/',
        name: 'msinHome',
        component: IndexPage,
        children: [
            {
                path: 'index',
                name: 'index',
                component: IndexPage,
            },
            {
                path: 'home',
                name: 'home',
                component: IndexPage,
            }
        ],
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartPage,
    },
]
