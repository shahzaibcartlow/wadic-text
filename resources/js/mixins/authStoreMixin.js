export default {
    methods:{
        changeChkUsr(){
            this.$emit('changeChkUsr', false );
        }
    },
    computed: {
    },
    mounted() {
        this.changeChkUsr();
    }
}