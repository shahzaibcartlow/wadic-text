<template>

    <option :value="tier.id"> {{ tier.title }} </option>

</template>

<script>
export default {
    name: "tierListComponent",
    props: {
        app: {
            required: true,
        },
        tier: {
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
