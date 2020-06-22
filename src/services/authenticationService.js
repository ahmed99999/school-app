import Http from './httpService';
import { toast } from 'react-toastify';

const addUserDataToLocalStorage = user => {

};

export async function Login(email, password) {
    const url = "/login";
    try {
        const response = await Http.post(url, {
            email: email,
            password: password
        });
        addUserDataToLocalStorage(response["data"]["token"]);
        return true;
    } catch (error) {
        toast.error("invalid data");
        console.error(error);
        return false;
    }
}

export async function logout() {
    // remove data from localStorage
}

export async function registerSchool(email, password, firstName, lastName, schoolName, address) {
    const url = "/register-school"
    try {
        const response = await Http.post(url, {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            schoolName: schoolName,
            address: address
        });
        const user = response["data"]["token"];
        addUserDataToLocalStorage(user);
    } catch (error) {
        toast.error("invalid data");
        console.error(error);
        return false;
    }
}