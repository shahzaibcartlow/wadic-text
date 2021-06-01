export default {
    methods: {
        msgSound() {
            let sound = new Audio('/sounds/message.mp3');
            sound.play();
        },
        errorSound() {
            let sound = new Audio('/sounds/error.mp3');
            sound.play();
        },
        destroyedSound() {
            let sound = new Audio('/sounds/delete.mp3');
            sound.play();
        },
        errorAlert(title, detail){
            this.flashMessage.error({
                    title: title,
                    icon: '/assets/images/error.svg',
                    message: detail
                },
                {
                    mounted: this.errorSound,
                    destroyed: this.destroyedSound
                }
            );
        },
        successAlert(title, detail){
            this.flashMessage.success({
                    title: title,
                    icon: '/assets/images/success.svg',
                    message: detail
                },
                {
                    mounted: this.msgSound,
                    destroyed: this.destroyedSound
                }
            );
        },
        infoAlert(title, detail){
            this.flashMessage.info({
                    title: title,
                    icon: '/assets/images/info.svg',
                    message: detail
                },
                {
                    mounted: this.msgSound,
                    destroyed: this.destroyedSound
                }
            );
        },
        warningAlert(title, detail){
            this.flashMessage.warning({
                    title: title,
                    icon: '/assets/images/warning.svg',
                    message: detail
                },
                {
                    mounted: this.errorSound,
                    destroyed: this.destroyedSound
                }
            );
        }
    },
    computed: {
    }
}
