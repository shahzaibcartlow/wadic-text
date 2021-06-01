import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tiers: [],
        cart: {
            tier: {
                id: 0,
                title: "Dummy",
            },
            storeCapacity: "Dummy",
            processor: "Dummy",
            ram: "Dummy",
            traffic: "Dummy",
            userDetail: {
                ipAddress: '',
            },
        },
    },
    getters: {
    },
    mutations: {
        ADD_TIER_TO_CART: (state, payload) => {

            let tierInCart = state.tiers.find(item => {
                return item.id == payload.tierId
            });

            state.cart.tier.id = payload.tierId
            state.cart.userDetail.ipAddress = payload.ipAddress;

            if (tierInCart) {
                state.cart.tier.title =  tierInCart.title
            }


            const data = {
                ipAddress: state.cart.userDetail.ipAddress,
                tierId: state.cart.tier.id,
            };
            axios.post('/store_user_session', data)
                .then( response => {
                    if( response.data.code === 0 ){
                        state.cart.tier.id = response.data.createUserDetail.tierId;
                        state.cart.userDetail.ipAddress = response.data.createUserDetail.ipAddress;
                    }
                })
                .catch( /*error => console.log(error.data)*/ );

        },
        ADD_STORE_CAPACITY_TO_CART: (state, payload) => {
            state.cart.storeCapacity = payload.storeCapacityValue;
            state.cart.userDetail.ipAddress = payload.ipAddress;

            const data = {
                ipAddress: state.cart.userDetail.ipAddress,
                storeCapacity: state.cart.storeCapacity,
            };
            axios.post('/store_user_session', data)
                .then( response => {
                    if( response.data.code === 0 ){
                        state.cart.storeCapacity = response.data.createUserDetail.storeCapacity;
                        state.cart.userDetail.ipAddress = response.data.createUserDetail.ipAddress;
                    }
                })
                .catch( /*error => console.log(error.data)*/ );
        },
        ADD_PROCESSOR_TO_CART: (state, payload) => {
            state.cart.processor = payload.processorValue;
            state.cart.userDetail.ipAddress = payload.ipAddress;
            const data = {
                ipAddress: state.cart.userDetail.ipAddress,
                processor: state.cart.processor,
            };
            axios.post('/store_user_session', data)
                .then( response => {
                    if( response.data.code === 0 ){
                        state.cart.processor = response.data.createUserDetail.processor;
                        state.cart.userDetail.ipAddress = response.data.createUserDetail.ipAddress;
                    }
                })
                .catch( /*error => console.log(error.data)*/ );
        },
        ADD_RAM_TO_CART: (state, payload) => {
            state.cart.ram = payload.ramValue;
            state.cart.userDetail.ipAddress = payload.ipAddress;
            const data = {
                ipAddress: state.cart.userDetail.ipAddress,
                ram: state.cart.ram,
            };
            axios.post('/store_user_session', data)
                .then( response => {
                    if( response.data.code === 0 ){
                        state.cart.ram = response.data.createUserDetail.ram;
                        state.cart.userDetail.ipAddress = response.data.createUserDetail.ipAddress;
                    }
                })
                .catch( /*error => console.log(error.data)*/ );
        },
        ADD_TRAFFIC_TO_CART: (state, payload) => {
            state.cart.traffic = payload.trafficValue;
            state.cart.userDetail.ipAddress = payload.ipAddress;
            const data = {
                ipAddress: state.cart.userDetail.ipAddress,
                traffic: state.cart.traffic,
            };
            axios.post('/store_user_session', data)
                .then( response => {
                    if( response.data.code === 0 ){
                        state.cart.traffic = response.data.createUserDetail.traffic;
                        state.cart.userDetail.ipAddress = response.data.createUserDetail.ipAddress;
                    }
                })
                .catch( /*error => console.log(error.data)*/ );
        },
        SET_USER_DETAIL_IN_CART: (state, payload) => {
            state.cart.tier.id = (payload.tierId !== "") ? payload.tierId : "Dummy Text";

            let tierInCart = state.tiers.find(item => {
                return item.id == payload.tierId
            });
            if (tierInCart) {
                state.cart.tier.title =  tierInCart.title
            }


            state.cart.storeCapacity = (payload.storeCapacity !== "" || payload.storeCapacity === "null") ? payload.storeCapacity : "Dummy Text";
            state.cart.processor =  (payload.processor !== "" || payload.processor === "null") ? payload.processor : "Dummy Text";
            state.cart.ram = (payload.ram !== "" || payload.ram === "null") ? payload.ram : "Dummy Text";
            state.cart.traffic = (payload.traffic !== "" || payload.traffic === "null") ? payload.traffic : "Dummy Text";
            state.cart.userDetail.ipAddress = (payload.ipAddress !== "" || payload.ipAddress === "null") ? payload.ipAddress : "Dummy Text";
        },
        SET_TIERS: (state, tiers) => {
            state.tiers = tiers.tiers;
        },
    },
    actions: {
        addTierToCart: (context, payload) => {
            context.commit("ADD_TIER_TO_CART", payload);
        },
        setUserDetailInCart: (context, payload) => {
            context.commit("SET_USER_DETAIL_IN_CART", payload);
        },
        addStoreCapacityToCart: (context, payload) => {
            context.commit("ADD_STORE_CAPACITY_TO_CART", payload);
        },
        addProcessorToCart: (context, payload) => {
            context.commit("ADD_PROCESSOR_TO_CART", payload);
        },
        addRamToCart: (context, payload) => {
            context.commit("ADD_RAM_TO_CART", payload);
        },
        addTrafficToCart: (context, payload) => {
            context.commit("ADD_TRAFFIC_TO_CART", payload);
        },
        getTiers: (context) => {
            axios.get('/get_tiers')
                .then( response => {
                    let tiers = response.data;
                    context.commit('SET_TIERS', tiers);
                })
                .catch( /*error => console.log(error.data)*/ );
        },
    }
});
