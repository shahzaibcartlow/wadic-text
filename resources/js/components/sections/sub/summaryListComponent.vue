<template>
    <div>

        <div class="list-box">
            <div class="list-header">
                Compute
            </div>
            <div class="list-body">
                <ul class="list">
                    <li class="list-item" v-if="userCart.processor">
                        {{ userCart.processor }} <span> $15.00 </span>
                    </li><!-- list item end -->
                    <li class="list-item" v-if="userCart.ram">
                        {{ userCart.ram }} <span> $6.12 </span>
                    </li><!-- list item end -->
                </ul><!-- list end -->
            </div><!-- list body end -->
        </div><!-- list box end -->

        <div class="list-box">
            <div class="list-header">
                Storage
            </div>
            <div class="list-body">
                <ul class="list">
                    <li class="list-item" v-if="userCart.tier.title">
                        {{ userCart.tier.title }} <span> $3.80 </span>
                    </li><!-- list item end -->
                    <li class="list-item" v-if="userCart.storeCapacity">
                        {{ userCart.storeCapacity }} <span> $15.00 </span>
                    </li><!-- list item end -->
                </ul><!-- list end -->
            </div><!-- list body end -->
        </div><!-- list box end -->

        <div class="list-box">
            <div class="list-header">
                Network
            </div>
            <div class="list-body">
                <ul class="list">
                    <li class="list-item" v-if="userCart.traffic">
                        {{ userCart.traffic }} <span> $2.80 </span>
                    </li><!-- list item end -->
                </ul><!-- list end -->
            </div><!-- list body end -->
        </div><!-- list box end -->

    </div>
</template>

<script>
export default {
    name: "summaryListComponent",
    props: {
        app: {
            required: true,
        },
        userCart: {
            required: true,
        }
    },
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
    },
    mounted() {
    }
}
</script>

<style scoped>

</style>
