<template>
  <b-container>
    <h2>UserEducation DataTable</h2>
    <br /><br />
    <b-row>
      <b-col md="3">
        <div class="input-group align-items-center justify-content-between">
            <b-form-input
            v-model="filter"
            type="search"
            placeholder="Search"
            ></b-form-input>
            <b-button class="mr-2" to="/">Add Data</b-button>
            <!-- <i class="fa fa-search fa" aria-hidden="true"></i> -->
        </div>
      </b-col> </b-row><br />
    <b-row>
      <b-col>
        <b-table striped hover bordered :items="totaldata" :filter="filter" show-empty stacked="md"
                :per-page="perPage" :current-page="currentPage" :fields="fields"> 
            <template v-slot:cell(actions)="data">
                <b-button variant="danger" @click="deleteItem(data.item.id)">Delete</b-button>
            </template>
        </b-table>
        <b-pagination v-model="currentPage" align="center" pills size="lg" :total-rows="rows" :per-page="perPage"></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
export default {
  // props: ["formdata"],
  data() {
    return {
      filter: "",
      perPage: 2,
      key: "actions",
      label: "Actions",
      currentPage: 1,
      // fields: ['id','fname','lname','institute','branch','cgpa','startdate','enddate','actions'],
      fields: [
        {
          key: 'fname',
          sortable: true,
        },
        {
          key: 'lname',
          sortable: true,
        },
        {
          key: 'institute',
          sortable: true,
        },
        {
          key: 'stream',
          sortable: true,
        },
        {
          key: 'cgpa',
          sortable: true,
        },
        {
          key: 'startdate',
          sortable: true,
        },
        {
          key: 'enddate',
          sortable: true,
        },
        {
          key: 'actions',
          sortable: true,
        }
      ],
    };
  },
  watch: {
      options:{ 
          handler(){
              this.getData();
          }
      },
      deep: true,
  },
  computed: {
    ...mapState(['totaldata']),
    rows() {
      if (this.formdata) {
        return this.formdata.length;
      } else {
        return 0;
      }
    },
  },
  methods: {
      // deleteItem(id){
      //   const index = this.formdata.indexOf((x) => x.id === id);
      //   this.formdata.splice(index,1);
      // }
      deleteItem(id) {
      if (confirm("Are you sure you want to delete this Data?")) {
        axios
          .delete(
            `https://registration-form-e64d5-default-rtdb.firebaseio.com/formResponse/${id}.json`
          )
          .then((res) => {
            console.log("Response Data = ", res.data);

            const filteredUsers = this.totaldata.filter((item) => item.uid !== id);
            this.$emit("update:posts", filteredUsers);
            alert("data deleted");
          });
      }
    },
  },
  mounted() {
    console.log("Posts =", this.totaldata);
  }
};
</script>
