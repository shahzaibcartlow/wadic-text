export default {
    methods:{
        changeChkUsr(){
            axios.get('/auth/check_user')
            .then(response => {
                this.$emit('changeChkUsr', response.data.user );
            })
            .catch( error => {
                this.$emit('changeChkUsr', false );
            });
        }
    },
    computed: {
    },
    mounted() {
        this.changeChkUsr();
    }
}
