import {createStore} from "redux";

const defaultSidebarState = {
    isSidebarOpen: true,
    isModalOpen : false,
    searchString: ""
  };
  
  const actions = {
    type: "TOGGLE_SIDEBAR",
    type: "OPEN_MODAL",
    type: "CLOSE_MODAL"
  };

   export const userStringFnc = (payload) => ({
    type: "HANDLE_STRING",
    payload
 })

  
  const Reducer = (state = {}, action) => {
    switch (action.type) {
      case "TOGGLE_SIDEBAR":
              return {...state,
              isSidebarOpen: !state.isSidebarOpen }
      case "OPEN_MODAL":
              return {...state,
              isModalOpen: true}
      case "CLOSE_MODAL":
              return {...state,
              isModalOpen: false}
      case "HANDLE_STRING":
              let value = action.payload.value;
              console.log(value)
              return {
                  ...state,
                  searchString: value,
              };
      case "TRIGGER_USER_VALUE":
              alert(state.searchString)

          default:
            return state;
      }
  };
  
const Store = createStore(Reducer);

export default Store;
