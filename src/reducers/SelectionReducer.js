export default (state = null, action) => {
    // console.log(state);
    // return null;
    switch(action.type){
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};