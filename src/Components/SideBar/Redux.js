import {createStore} from "redux";

let userId = 0

export const initialState = {
    isSignupModalOpened: false,
    isSidebarOpen: false,
    isModalOpen : false,
    searchString: "",
    userData: [
        {
            user: "",
            pass: ""
        }
    ],
    appliedFilters: [],
    productData: [
        {   
            id: 1,
            name: "Roses",
            title: "Roses",
            text: "Beautiful hand picked roses fresh out of our gardins",
            price: 9.99,
            imageurl: require("../../Images/Flowers/Roses.jpg").default
    
        },
        {
            id: 2,
            name: "Dahlia",
            title: "Dahlia",
            text: "Beautiful hand picked Dahlia fresh out of our gardins",
            price: 17.99,
            imageurl: require("../../Images/Flowers/Dahlia.jpg").default
    
        },
        {
            id: 3,
            name: "Alstroemerias",
            title: "Alstroemerias",
            text: "Beautiful hand picked Alstroemerias fresh out of our gardins",
            price: 12.99,
            imageurl: require("../../Images/Flowers/Alstroemerias.jpg").default
    
        },
        {
            id: 4,
            name: "Calla lillies",
            title: "Calla lillies",
            text: "Beautiful hand picked Calla lillies fresh out of our gardins",
            price: 16.99,
            imageurl: require("../../Images/Flowers/Calla_lillies.jpg").default
    
        },
        {
            id: 5,
            name: "Carnation",
            title: "Carnation",
            text: "Beautiful hand picked Carnation fresh out of our gardins",
            price: 27.99,
            imageurl: require("../../Images/Flowers/Carnation.jpeg").default
    
        },
        {
            id: 6,
            name: "Daisies",
            title: "Daisies",
            text: "Beautiful hand picked Daisies fresh out of our gardins",
            price: 35.99,
            imageurl: require("../../Images/Flowers/Daisies.jpg").default
    
        },
        {
            id: 7,
            name: "Gardenia",
            title: "Gardenia",
            text: "Beautiful hand picked Gardenia fresh out of our gardins",
            price: 8.99,
            imageurl: require("../../Images/Flowers/Gardenia.jpg").default
    
        },
        {
            id: 8,
            name: "Gerbera",
            title: "Gerbera",
            text: "Beautiful hand picked Gerbera fresh out of our gardins",
            price: 80.99,
            imageurl: require("../../Images/Flowers/Gerbera.jpg").default
    
        },
        {
            id: 9,
            name: "Lillies",
            title: "Lillies",
            text: "Beautiful hand picked Lillies fresh out of our gardins",
            price: 45.99,
            imageurl: require("../../Images/Flowers/Lillies.jpeg").default
    
        },
        {
            id: 10,
            name: "Peony",
            title: "Peony",
            text: "Beautiful hand picked Peony fresh out of our gardins",
            price: 73.99,
            imageurl: require("../../Images/Flowers/Peony.jpg").default
    
        },
        {
            id: 11,
            name: "Pink orchids",
            title: "Pink orchids",
            text: "Beautiful hand picked Pink orchids fresh out of our gardins",
            price: 26.99,
            imageurl: require("../../Images/Flowers/Pink_orchids.jpg").default
    
        },
        {
            id: 12,
            name: "Pink Roses",
            title: "Pink Roses",
            text: "Beautiful hand picked Pink Roses fresh out of our gardins",
            price: 63.99,
            imageurl: require("../../Images/Flowers/Pink_Roses.jpg").default
    
        },
        {
            id: 13,
            name: "Sunflower",
            title: "Sunflower",
            text: "Beautiful hand picked Sunflower fresh out of our gardins",
            price: 29.99,
            imageurl: require("../../Images/Flowers/Sunflower.jpeg").default
    
        },
        {
            id: 14,
            name: "Tulip",
            title: "Tulip",
            text: "Beautiful hand picked Tulip fresh out of our gardins",
            price: 56.99,
            imageurl: require("../../Images/Flowers/Tulip.jpeg").default
    
        },
        {
            id: 15,
            name: "Mixed Flowers",
            title: "Mixed Flowers",
            text: "Beautiful hand picked Mixed Flowers fresh out of our gardins",
            price: 29.99,
            imageurl: require("../../Images/Flowers/MixedFlowers.jpg").default
    
        },
        {
            id: 13,
            name: "Mixed Flowers Mini",
            title: "Mixed Flowers Mini",
            text: "Beautiful hand picked MixedFlowersMini fresh out of our gardins",
            price: 29.99,
            imageurl: require("../../Images/Flowers/MixedFlowersMini.jpg").default
    
        },
    ]
  };
  
  const actions = {
    type: "TOGGLE_SIDEBAR",
    type: "OPEN_MODAL",
    type: "CLOSE_MODAL"
  };

  const FILTER_BY_VALUE = "FILTER_BY_VALUE"

   export const userStringFnc = (payload) => {
    return {type: FILTER_BY_VALUE,
            payload}
 }

 const SIGN_UP_USER = "SIGN_UP_USER"

 export const signUpUser = (payload) => {
     return {
         type: SIGN_UP_USER,
         payload
     }
 }


  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
              return {...state,
              isSidebarOpen: !state.isSidebarOpen }

        case "OPEN_MODAL":
              return {...state,
              isModalOpen: true}
        
        case "OPEN_SIGNUP_MODAL":
            return {...state,
                    isModalOpen: false,
                    isSignupModalOpened: true}

        case "CLOSE_MODAL":
              return {...state,
              isSignupModalOpened: false,
              isModalOpen: false}

        case FILTER_BY_VALUE:
            let newState = Object.assign({}, state);
            let value = action.payload.value;
            let filteredValues = state.productData.filter((product) => {
                return product.name.toLowerCase().includes(value);
            });
        
            let appliedFilters = state.appliedFilters;
            if (value) {
                let index = appliedFilters.indexOf(FILTER_BY_VALUE);
                if (index === -1)
                     appliedFilters.push(FILTER_BY_VALUE);
                newState.filteredProducts = filteredValues;
            } else {
                let index = appliedFilters.indexOf(FILTER_BY_VALUE);
                appliedFilters.splice(index, 1);
                if (appliedFilters.length === 0) {
                newState.filteredProducts = initialState.productData;
                }
            }
             return { ...newState,
                     productData: newState.filteredProducts }; 

        case "TRIGGER_USER_VALUE":
            //   console.log(state.userData[0])

        case SIGN_UP_USER:
            console.log("reached reducer successfully");
            let username = action.payload.userName;
            let password = action.payload.userPassword;
            console.log(username, password)
            return {...state,
            userData: {name: username, pass: password, id: ++userId}
            }
                

          default:
            return state;
      }
  };
  
const Store = createStore(Reducer);

export default Store;
