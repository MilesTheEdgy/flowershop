import {createStore} from "redux";

const defaultSidebarState = {
    isSidebarOpen: true
  };
  
  const actions = {
    type: "TOGGLE_SIDEBAR"
  };
  
  const Reducer = (state = {}, action) => {
    switch (action.type) {
      case "TOGGLE_SIDEBAR":
              return {...state,
              isSidebarOpen: !state.isSidebarOpen }
          default:
            return state;
      }
  };
  
const Store = createStore(Reducer);

export default Store;
