<template>
    <div id="indexComponent">

        <user-nav v-bind:chkUsr="chkUsr" :app="this"></user-nav>

        <FlashMessage :position="'right top'"></FlashMessage>
        <loading :active.sync="loading" :is-full-page="fullPage"></loading>

        <section class="gnrl-mrgn-pdng gnrl-blk main_index_setting">
            <div class="row">
                <div class="col s12 m12 l12" id="example-content">
                    <template v-if="initiated">
                        <router-view v-on:changeChkUsr="updateChkUsr($event)" :app="this"></router-view>
                    </template>
                </div>
            </div>
        </section>

        <footer-sec></footer-sec>
    </div>
</template>

<script>
import UserNav from './_partial/userNav';
import FooterSec from './_partial/footer';
import AlertBox from '../mixins/alertBoxMixin';

export default {
    name: "indexComponent",
    components: {
        'user-nav': UserNav,
        'footer-sec': FooterSec,
    },
    data(){
        return{
            shouldStick: false,
            chkUsr: false,
            user: [],
            loading: false,
            fullPage: true,
            initiated: false,
            ipAddress: '',
            req: axios.create({
                baseUrl: BASE_URL
            }),
        }
    },
    methods: {
        updateChkUsr(updatedChkUsr){
            this.chkUsr = updatedChkUsr;
        },
        init(){
            this.loading = true;
            this.req.get('/auth/init')
                .then(response => {
                    this.user = response.data.user;
                    this.loading = false;
                    this.initiated = true;
                });
        },
        getIPAddress(){
            this.req.get("/get_ip")
                .then(response => {
                    if( response.data.code === 0 ) {
                        this.ipAddress = response.data.ip;
                        this.loading = false;
                    }
                })
                .catch(error => {
                    this.loading = false;
                });
        },
    },
    mounted() {
        this.init();
        this.getIPAddress();
    },
    mixins: [AlertBox]
}
</script>

<style>

._vue-flash-msg-body{
    z-index: 999999;
}

._vue-flash-msg-body ._vue-flash-msg-body__content {
    padding: 10px 20px 10px;
}

._vue-flash-msg-body ._vue-flash-msg-body__content h3,
._vue-flash-msg-body ._vue-flash-msg-body__content p._vue-flash-msg-body__title{
    font-family: 'Poppins-Bold';
    font-size: 18px;
    line-height: 20px;
    letter-spacing: .5pt;
    margin: 0 0 5px;
    padding: 0;
}

._vue-flash-msg-body ._vue-flash-msg-body__content p{
    font-family: 'Poppins-Regular';
    font-size: 14px;
    line-height: 15px;
    margin: 0;
    padding: 0;
}

._vue-flash-msg-body._vue-flash-msg-body_warning {
    background-color: rgba(241,139,34,1);
}

._vue-flash-msg-body._vue-flash-msg-body_success {
    background-color: rgba(1,148,122,1);
}

._vue-flash-msg-body._vue-flash-msg-body_error {
    background-color: rgba(241,34,34,1);
}

._vue-flash-msg-body._vue-flash-msg-body_info {
    background-color: rgba(16,135,194,1);
}

@media (min-width: 0px) and (max-width: 320px) {
    ._vue-flash-msg-body {
        width: 88%;
    }

    ._vue-flash-msg-body ._vue-flash-msg-body__content {
        padding-left: 5px;
    }

    ._vue-flash-msg-body__content h3,
    ._vue-flash-msg-body__content p._vue-flash-msg-body__title{
        font-size: 12px;
        line-height: 12px;
    }

    ._vue-flash-msg-body__content p{
        font-size: 12px;
        line-height: 12px;
    }
}

</style>
