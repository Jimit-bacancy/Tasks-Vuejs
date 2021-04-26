<template>
    <b-container>
        <user-data-table :totaldata.sync="totaldata"></user-data-table>
    </b-container>
</template>

<script>
import UserDataTable from './UserDataTable.vue';
export default {
    components:{
        UserDataTable,
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