import axios from 'axios'; // For API calls, we will be using Axios 

const API_URL=' http://localhost:8085/ims/api/dealer';
const API_URL1=' http://localhost:8085/ims/api/dealers';
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

 class Authenticationservice{

    loginDealer(dealer){

        return axios.post(API_URL,dealer);


    }
    registerDealer(dealer){
        return axios.post(API_URL1, dealer);
       }

       registerSuccessfulLogin(username) {
     
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
       // console.log("First"+username);
      
     }
     logout() {
      
         sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
     }
     isUserLoggedIn() {
         let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
         if (user === null) return false
         return true
     }
     getLoggedInUserName() {
         let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        // console.log("Second"+user);
         if (user === null) return ''
         return user
     }   
}
export default new Authenticationservice();