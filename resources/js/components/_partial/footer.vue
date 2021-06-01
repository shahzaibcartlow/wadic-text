<template>

    <footer class="footer-con primary-colour-dark-3">
        <div class="">
            <div class="footer-box">

                <div class="footer-logo-box">
                    <div class="footer-logo">
                        <img :src="foot_img" alt="Wadic Logo" />
                    </div><!-- copy rights end -->
                </div><!-- copy rights box end -->

                <div class="footer-nav-box">
                    <div class="footer-nav-menu-box">
                        <ul class="footer-nav-menus">
                            <li class="footer-nav-menu-item">
                                <router-link to="/cart" class="footer-nav-menu">
                                    Add to Cart
                                </router-link>
                            </li>
                        </ul><!-- footer nav menus end -->
                    </div><!-- footer nav menu box end -->
                </div><!-- footer nav box end -->

            </div><!-- footer box end -->
        </div><!-- container end -->
    </footer><!-- footer con end -->





</template>

<script>
    export default {
        name: "footerSec",
        data(){
            return{
                foot_img: BASE_URL+'/assets/images/logo-light.png',
            }
        }
    }
</script>

<style scoped>

</style>
