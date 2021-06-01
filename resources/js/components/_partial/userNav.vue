<template>

    <header class="header-con white">
        <div class="">
            <nav class="nav">
                <div class="nav-con">

                    <div class="logo-con">
                        <div class="logo-box">
                            <router-link to="/" class="logo">
                                <img src="/assets/images/logo.png" alt="Wadic Logo"/>
                            </router-link>
                        </div><!-- logo box end -->
                    </div><!-- logo con end -->


                    <div class="menus-con">
                        <div class="menus-box">

                            <ul class="menus left-menus">

                                <li class="menu-item">
                                    <router-link to="/" class="menu">
                                        Home
                                        <span class=""></span>
                                    </router-link>
                                </li>

                                <li class="menu-item">
                                    <router-link to="/cart" class="menu">
                                        Add to Cart
                                        <span class=""></span>
                                    </router-link>
                                </li>
                            </ul>


                            <ul class="menus right-menus">
                                <template v-if="!app.user">
                                    <li class="menu-item">
                                        <router-link to="/login" class="menu menu-btn log-in">
                                            Login
                                            <span class="log-in-icon"></span>
                                        </router-link>
                                    </li>
                                    <li class="menu-item">
                                        <router-link to="/register" class="menu menu-btn sigh-up">
                                            Sign up
                                            <span class="sign-up-icon"></span>
                                        </router-link>
                                    </li>
                                </template>
                                <template v-else>
                                    <li class="menu-item">
                                        <a href="#" v-on:click.prevent="logout()" class="menu">
                                            Logout
                                            <span class="sign-up-icon"></span>
                                        </a>
                                    </li>
                                </template>
                                <template v-if="app.user">
                                    <li class="menu-item">
                                        <router-link to="/panel" class="menu">
                                            Welcome, {{ app.user.user_name }}
                                        </router-link>
                                    </li>
                                </template>
                            </ul>

                        </div>
                    </div><!-- menus con end -->

                </div><!-- nav con end -->
            </nav><!-- nav end -->


        </div>
    </header><!-- header con end -->



</template>

<script>

    import LogOut from '../../mixins/logOutMixin';

    export default {
        name: "navSec",
        props: {
            chkUsr: {
                type: Boolean,
                required: true,
            },
            app: {
                required: true,
            }
        },
        components: {
        },
        data(){
            return{
                isShowing: false,
            }
        },
        methods: {
            toggleShow() {
                this.isShowing = !this.isShowing;
            },
        },
        computed: {
        },
        mounted() {
        },
        mixins: [LogOut],
    }
</script>
