<template>
    <b-container>
        <user-education :totalata.sync="totaldata"></user-education>
    </b-container>
</template>

<script>
import UserEducation from './UserEducation.vue';
export default {
    components:{
        UserEducation,
    },
    data() {
        return {
            totaldata: [],
        }
    },
    methods: {
        getData(){
            this.$store.dispatch('getFormData');
        }
    },
    mounted(){
        this.getData();
    },
}
</script>