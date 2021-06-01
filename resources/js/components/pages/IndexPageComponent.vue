<template>
    <div>
        <example-component></example-component>
    </div>
</template>

<script>
    import ExampleComponent from "../ExampleComponent";

    export default {
        name: "IndexPageComponent",
        components: {
            'example-component': ExampleComponent,
        },
        props: {
            app: {
                required: true,
            }
        },

    }
</script>

<style scoped>

</style>
