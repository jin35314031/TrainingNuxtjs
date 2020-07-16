import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: function(){
            return{
                message:'Hello Vuex!'
            }
        },
        mutations:{
            updateMessage:function(state){
                state.message = 'Update!'
            }
        }
    })
}

export default createStore