var vueInstance = new Vue({
    el: '#app',
    data: {
        viewCount:0,
        header: 'Ha Thanh Huy',
        detail:' dang hoc vuejs',
        linkFB: 'https://www.facebook.com/thanhhuydev/',
        openOption:'_black',
        tts:1000000000
    },
    methods: {
        showtts() {
            return new Intl.NumberFormat('de-DE',{style:'currency',currency:'VND'}).format(this.tts)
        },
        addViewCount()
        {
            this.viewCount++;
        }
    }
});

console.log(vueInstance)

setTimeout(() => {
    vueInstance.title2 = 'aaaa'
}, 300);