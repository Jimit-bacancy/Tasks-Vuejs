import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    formdata:{
      fname: '',
      lname: '',
      gender: '',
      email: '',
      phone: '',
      password: '',
      confirm: '',
      institute: '',
      stream: '',
      cgpa: '',
      startdate: '',
      enddate: '',
    },
    totaldata: [],
  },
  mutations: {
    setFirstName(state, value){
      state.formdata.fname = value;
    },
    setLastName(state, value){
      state.formdata.lname = value;
    },
    setGender(state, value){
      state.formdata.gender = value;
    },
    setEmail(state, value){
      state.formdata.email = value;
    },
    setPhone(state, value){
      state.formdata.phone = value;
    },
    setPassword(state, value){
      state.formdata.password = value;
    },
    setConfirm(state, value){
      state.formdata.confirm = value;
    },
    setInstitute(state, value){
      state.formdata.institute = value;
    },
    setStream(state, value){
      state.formdata.stream = value;
    },
    setCgpa(state, value){
      state.formdata.cgpa = value;
    },
    setStartDate(state, value){
      state.formdata.startdate = value;
    },
    setEndDate(state, value){
      state.formdata.enddate = value;
    },
    storeFormData(state){
        axios.post('https://registration-form-e64d5-default-rtdb.firebaseio.com/formResponse/.json', state.formdata)
        .then((res)=> {
          console.log(res.data);
        })
        .catch((err)=>{
          console.log(err);
        });  
    },
    getData(state){
        axios.get('https://registration-form-e64d5-default-rtdb.firebaseio.com/formResponse.json')
          .then((res) => {
            state.totalData = res.data;
            console.log("Form Data = ",state.totalData);
          });
    },
    getFormData(state){
        axios.get('https://registration-form-e64d5-default-rtdb.firebaseio.com/formResponse.json')
          .then(res => {
            if(res && res.data){
              for(const id in res.data){
                state.totaldata.push({id, ...res.data[id]})
              }
            }
            console.log("TotalData = ",state.totaldata[1]);
          })
    }, 
  },
  actions: {
    storeFormData({commit}){
      commit('storeFormData');
    },
    getFormData({commit}){
      commit('getFormData');
    },
    getData({commit}){
      commit('getData');
    }
  },
  modules: {
  }
})
