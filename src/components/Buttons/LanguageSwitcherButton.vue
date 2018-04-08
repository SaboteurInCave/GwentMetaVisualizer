<template>
    <button class="button" @click="changeLanguage">{{flag}}</button>
</template>

<script>
    export default {
        name: "LanguageSwitcherButton",
        props: {
            flag: String,
            code: String,
        },
        methods: {
            changeLanguage(event) {
                this.$emit('language-changed', {code: this.code})
            }
        },
        computed: {
            flagStyle() {
                return 'flag flag-' + this.flag;
            }
        }
    }
</script>

<style scoped>
    /*
        * Generated with CSS Flag Sprite generator (https://www.flag-sprites.com/)
    */

    .test {

    }

    .flag {
        display: inline-block;

        margin:0;
        padding:0;
        width: 64px;
        height: 64px;

        background: url('../../assets/flags.png') no-repeat;
    }

    .flag.flag-us {
        background-position: -64px 0;
    }

    .flag.flag-ru {
        background-position: 0 0;
    }

    .button {
        /*
        padding: 0;
        margin: 0;
        width: auto;
        height: auto;
        text-align: center;
        */
        text-align: center;
        vertical-align: center;
    }
</style>