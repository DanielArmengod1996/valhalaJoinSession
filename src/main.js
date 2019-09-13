import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el: '#app',
  data:{
    errors: [],
    username:'',
    password:''
  },
  methods:{
    checkJoinned : function(e) {
      
      if( !this.username ){
        this.errors.push("Debe de informar del Nombre de Usuario.");
      }
      if( !this.password ){
        this.errors.push("Debe de informar de la contraseña.");
      }
      
      if( this.username && this.password ){
        return true;
      }
      e.preventDefault();
    }
  }
}).$mount('#app')
