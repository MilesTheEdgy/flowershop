import {createStore} from "redux";

let userId = 0

export const initialState = {
    isSignupModalOpened: false,
    isModalOpen : false,
    isShoppingCartModalOpen: false,
    isSidebarOpen: false,
    userDataInput: {
        userNameInput: "",
        userPasswordInput: ""
    },
    userData: [
        {
            name: "def",
            pass: "def"
        }
    ],
    currentUser:    {
            username: "User",
            password: "",
            isUserLoggedIn: false
                    },
    errorMessages: {
        signupUserIncompleteInput: false,
        signinUserFalseInput: false,
        userNotSignedIn: false
    },
    signupUserIncompleteInput: false,
    signinUserFalseInput: false,
    didUserSignUp: false,
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
    ],
    shoppingCart: [],
    cartItemAmount: 0,
    calculatedTotal: 0,
    didUserSubmitCart: false
  };

  
const FILTER_BY_VALUE = "FILTER_BY_VALUE"
export const userStringFnc = (payload) => {
    return {type: FILTER_BY_VALUE,
            payload}
 }
    
const SEND_USERNAME_DATA = "SEND_USERNAME_DATA"
export const sendUserNameData = (payload) => {
     return { type: SEND_USERNAME_DATA,
             payload
     }
 }

const SEND_PASSWORD_DATA = "SEND_PASSWORD_DATA"
export const sendPasswordData = (payload) => {
     return {
         type: SEND_PASSWORD_DATA,
         payload
     }
 } 

const SIGN_UP_USER = "SIGN_UP_USER"
export const signUpUser = (payload) => {
     return {
         type: SIGN_UP_USER,
         payload
     }
 }

const LOG_IN_USER = "LOG_IN_USER"
export const logInUser = (payload) => {
    return {
        type: LOG_IN_USER,
        payload
    }
}

const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const AddItemToCart = (payload) => {
    return {
        type: ADD_ITEM_TO_CART,
        payload
    }
}

const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const removeItemFromCart = (payload) => {
    return {
        type: REMOVE_ITEM_FROM_CART,
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
              isModalOpen: true,
              errorMessages: {...state.errorMessages,
                signinUserFalseInput    : false}
            }
        
        case "OPEN_SIGNUP_MODAL":
            return {...state,
                    isModalOpen: false,
                    isSignupModalOpened: true,
                    errorMessages: {...state.errorMessages,
                                    signupUserIncompleteInput: false}
                    }

        case "CLOSE_MODAL":
              return {...state,
              isSignupModalOpened: false,
              isModalOpen: false, 
              didUserSignUp: false,
              isShoppingCartModalOpen: false,
              didUserSubmitCart: false,
              errorMessages: {...state.errorMessages,
                userNotSignedIn: false},

              userDataInput: {...state.userDataInput,
                userNameInput: "",
                userPasswordInput: ""}
            }

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
              console.log("reached reducer")

        case SEND_USERNAME_DATA:
            console.log(action.payload.username)
            return {...state,
                    userDataInput: {...state.userDataInput,
                                    userNameInput: action.payload.username}
                     }
        case SEND_PASSWORD_DATA:
            console.log(action.payload.password)
            return {...state,
                userDataInput: {...state.userDataInput,
                                userPasswordInput: action.payload.password}
                 }

        case SIGN_UP_USER:
            console.log("reached reducer successfully");
            let usr = state.userDataInput.userNameInput;
            let pswrd = state.userDataInput.userPasswordInput;
            let obj = { name: usr,
                        pass: pswrd, 
                        id: ++userId };
            if(usr === "" || pswrd === "") {
                return {...state,
                    errorMessages: {...state.errorMessages,
                                    signupUserIncompleteInput: true}
                    }
            } else {
                return {
                    ...state,
                    userData: [...state.userData,
                                obj],
                    userDataInput: {...state.userDataInput,
                                    userNameInput: "",
                                    userPasswordInput: ""},
                    didUserSignUp: true,
                    isSignupModalOpened: false
                };
            }

        case "ERROR_MESSAGE":
            return {...state,
                signupUserIncompleteInput: true}
        
        case LOG_IN_USER:
            let loginInputUser = action.payload.username;
            let loginInputPassword = action.payload.password;
            for (let i = 0; i < state.userData.length; i++) {
                if (loginInputUser === state.userData[i].name && loginInputPassword === state.userData[i].pass) {
                    return {
                        ...state,
                        isModalOpen: false,
                        currentUser: {...state.currentUser,
                                        username: loginInputUser,
                                        password: loginInputPassword,
                                        isUserLoggedIn: true}
                    }
                }
            }
            return {...state,
                 errorMessages: {...state.errorMessages,
                            signinUserFalseInput: true}}
        case "LOG_OUT_USER":
            return {...state,
                currentUser: {
                                username: "User",
                                password: "",
                                isUserLoggedIn: false
                            },
                cartItemAmount: 0,
                shoppingCart: []
            }

                            
        case ADD_ITEM_TO_CART:
            let clickedProduct = action.payload.clickedProduct;
            return {...state,
                shoppingCart:[ ...state.shoppingCart,
                        clickedProduct,
                        ],
                cartItemAmount: state.cartItemAmount + 1
                        }
        case REMOVE_ITEM_FROM_CART:
            let removedProduct = action.payload.removedProduct;
            let shoppingCartCopy = [...state.shoppingCart];
            console.log("shopping cart copy is ", shoppingCartCopy);
            console.log("product is", removedProduct)
            for (let i = 0; i < shoppingCartCopy.length; i++) {
                console.log("looping through items", i)
                if (removedProduct === shoppingCartCopy[i]) {
                    shoppingCartCopy.splice(i, 1)
                    console.log("new shoppin cart is", shoppingCartCopy)
                    return {...state,
                            shoppingCart: shoppingCartCopy,
                            cartItemAmount: state.shoppingCart.length - 1}
                }
            }
            return state

        case "DISPLAY_SHOPPING_CART_MODAL":
            return {...state,
                isShoppingCartModalOpen: true}
        
        case "CALCULATE_TOTAL":
            console.log("recalculating")
            let len = state.shoppingCart.length;
            let total = 0;
            for (let i = 0; i < len; i++) {
                total += state.shoppingCart[i].price
            }
            let roundedTotal = total.toFixed(2)

            return {...state,
                calculatedTotal: roundedTotal}
        
        case "SUBMIT_SHOPPING_CART":
            return {...state,
                isShoppingCartModalOpen: false,
                didUserSubmitCart: true
                    }        
        
        case "NOT_SIGNED_IN":
            console.log("triggering")
            return {...state,
                    errorMessages: {...state.errorMessages,
                                    userNotSignedIn: true}
                                }

          default:
            return state;
      }
  };
  
const Store = createStore(Reducer);

export default Store;