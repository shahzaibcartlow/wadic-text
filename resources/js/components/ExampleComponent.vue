<template>

    <section class="banner-con">
        <div class="container">
            <div class="banner-box">

                <div class="banner-header-box">
                    <div class="banner-heading">
                        <h1 class="">
                            Way to Manage Your <span class="line-break"> Advanced Cloud </span>
                        </h1>
                    </div><!-- banner heading end -->
                </div><!-- banner header box end -->

                <div class="banner-cntnt-box">
                    <div class="banner-cntnt">
                        <p class="">
                            Cloud Hosting, IaaS, Backup, D.R. and Telecommunications for IT Channel Partners.
                            Available in 8 zones across Australia, Singapore and Indonesia.
                        </p>
                        <router-link to="/cart" class="btn">
                            Purchase Server
                        </router-link>
                    </div><!-- banner heading end -->
                </div><!-- banner header box end -->


            </div><!-- banner box end -->
        </div>
    </section><!-- banner con end -->

</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
