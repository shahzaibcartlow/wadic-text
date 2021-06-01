<template>

    <section class="cart-section project-list-form-con">
        <div class="project-list-form-box">

            <div class="row">
                <div class="col l8">
                    <div class="row">
                        <div class="col l6">
                            <div class="card">
                                <div class="card-header">
                                    <h5>
                                        Storage
                                    </h5>
                                </div><!-- card header end -->
                                <div class="card-body">

                                    <div class="form-input-box">
                                        <label for="tire">
                                            Tier
                                        </label>
                                        <div class="input-field">
                                            <select name="tire" id="tire" v-on:change="addTierToCart">
                                                <option value="" selected> --- Select Tier --- </option>
                                                <tier-list :app="app" v-for="(tier, index) in tiers" :key="index" :tier="tier"></tier-list>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-input-box">
                                        <label for="storage-capacity">
                                            Store Capacity
                                        </label>
                                        <div class="input-field">
                                            <input type="text" name="storage-capacity" id="storage-capacity" placeholder="Store Capacity" v-on:focusout="addStoreCapacityToCart">
                                        </div>
                                    </div>

                                </div><!-- card body end -->
                            </div><!-- card end -->
                        </div><!-- col end -->
                        <div class="col l6">
                            <div class="card">
                                <div class="card-header">
                                    <h5>
                                        Compute
                                    </h5>
                                </div><!-- card header end -->
                                <div class="card-body">

                                    <div class="form-input-box">
                                        <label for="precessor-vcpu">
                                            Processor (vCPU)
                                        </label>
                                        <div class="input-field">
                                            <input type="text" name="precessor-vcpu" id="precessor-vcpu" placeholder="RaProcessor (vCPU)" v-on:focusout="addProcessorToCart">
                                        </div>
                                    </div>

                                    <div class="form-input-box">
                                        <label for="ram">
                                            Ram
                                        </label>
                                        <div class="input-field">
                                            <input type="text" name="ram" id="ram" placeholder="Ram" v-on:focusout="addRamToCart">
                                        </div>
                                    </div>

                                </div><!-- card body end -->
                            </div><!-- card end -->
                        </div><!-- col end -->
                        <div class="col l6">
                            <div class="card">
                                <div class="card-header">
                                    <h5>
                                        Network
                                    </h5>
                                </div><!-- card header end -->
                                <div class="card-body">

                                    <div class="form-input-box">
                                        <label for="traffic">
                                            Traffic
                                        </label>
                                        <div class="input-field">
                                            <input type="text" name="traffic" id="traffic" placeholder="Traffic" v-on:focusout="addTrafficToCart">
                                        </div>
                                    </div>

                                </div><!-- card body end -->
                            </div><!-- card end -->
                        </div><!-- col end -->
                    </div><!-- row end -->

                </div><!-- col end -->

                <div class="col l4">

                    <div class="cart-con">
                        <div class="cart-header">
                            <h5>
                                Summary
                            </h5>
                        </div><!-- cart header end -->
                        <div class="cart-body">

                            <summary-list :app="app" :userCart="userCart"></summary-list>

                        </div><!-- cart body end -->
                    </div><!-- cart con end -->

                </div><!-- col end -->
            </div><!-- row end -->

        </div>
    </section>


</template>

<script>

import TierList from '../sections/sub/tierListComponent';
import SummaryList from '../sections/sub/summaryListComponent';
import axios from "axios";

export default {
    name: "CartPageComponent",
    components: {
        'tier-list': TierList,
        'summary-list': SummaryList,
    },
    props: {
        app: {
            required: true,
        }
    },
    data() {
        return {
            userCart: this.$store.state.cart,
            ipAddress: '',
        }
    },
    methods: {
        addTierToCart($event){
            this.app.loading = true;
            const tierId = $event.target.value;
            this.$store.dispatch('addTierToCart', {
                tierId: tierId,
                ipAddress: "this",
            });
            this.userCart = this.$store.state.cart;
            this.app.loading = false;
        },
        addStoreCapacityToCart($event){
            this.app.loading = true;
            const storeCapacityValue = $event.target.value;
            this.$store.dispatch('addStoreCapacityToCart', {
                storeCapacityValue: storeCapacityValue,
            });
            this.userCart = this.$store.state.cart;
            this.app.loading = false;
        },
        addProcessorToCart($event){
            this.app.loading = true;
            const processorValue = $event.target.value;
            this.$store.dispatch('addProcessorToCart', {
                processorValue: processorValue,
            });
            this.userCart = this.$store.state.cart;
            this.app.loading = false;
        },
        addRamToCart($event){
            this.app.loading = true;
            const ramValue = $event.target.value;
            this.$store.dispatch('addRamToCart', {
                ramValue: ramValue,
            });
            this.userCart = this.$store.state.cart;
            this.app.loading = false;
        },
        addTrafficToCart($event){
            this.app.loading = true;
            const trafficValue = $event.target.value;
            this.$store.dispatch('addTrafficToCart', {
                trafficValue: trafficValue,
            });
            this.userCart = this.$store.state.cart;
            this.app.loading = false;
        },
        getIPAddress(){

            this.app.req.post("/auth/register", data)
                .then(response => {
                    if( response.data.code === 0 ) {
                        this.app.loading = false;
                    }
                })
                .catch(error => {
                    this.app.loading = false;
                    this.app.errorAlert( error.response.data );
                })
        }
    },
    computed: {
        tiers(){
            return this.$store.state.tiers;
        },
    },
    mounted() {
        this.$store.dispatch("getTiers");
    }
}
</script>

<style scoped>

</style>
