import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userDetail: {
            ipAddress: '',
        },
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

            if (tierInCart) {
                state.cart.tier.title =  tierInCart.title
            }
        },
        ADD_STORE_CAPACITY_TO_CART: (state, payload) => {
            state.cart.storeCapacity = payload.storeCapacityValue
        },
        ADD_PROCESSOR_TO_CART: (state, payload) => {
            state.cart.processor = payload.processorValue
        },
        ADD_RAM_TO_CART: (state, payload) => {
            state.cart.ram = payload.ramValue
        },
        ADD_TRAFFIC_TO_CART: (state, payload) => {
            state.cart.traffic = payload.trafficValue
        },
        SET_TIERS: (state, tiers) => {
            state.tiers = tiers.tiers;
        },
        SET_PROCESSORS: (state, processors) => {
            state.processors = processors;
        }
    },
    actions: {
        addTierToCart: (context, payload) => {
            context.commit("ADD_TIER_TO_CART", payload);
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
