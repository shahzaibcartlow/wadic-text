export default {
    methods: {
        logout(){
            axios.post('/auth/logout').then(response => {
                this.$router.go(0);
                // this.$router.push({ name: "login"});
            }).catch(error => {
                // location.reload();
                // this.$router.push({ name: "home"});
            });
        }
    },
    computed: {
    }
}