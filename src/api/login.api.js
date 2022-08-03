/**
 *  sample demonistration for login api page
 *  this isn't a real / true implementations of user login
 *  this is an example:
 *  Author: Abraham Mitiku
 */

// importing admin email & password for authentication
import {auth} from '../constants/data';

 export const login = {
    local: (email, password)=>{
        // 
        let {adminEmail, adminPassword} = auth;

        if((adminEmail!==email) || (adminPassword!==password)) return {message: 'Admin not exist', status: false};
        else{
            // refresh & access token example when retreived from server
            let refresh = '42fed378c4ba3e847ed0be86df410b59';
            let access = 'ce72dd5184c155ca4e1943669d80446d';
           
            return {refresh:refresh, access: access, status:true};
        }
    }
}