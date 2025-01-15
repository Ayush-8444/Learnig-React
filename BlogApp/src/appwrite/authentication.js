import { Client, Account, ID } from "appwrite"
import conf from "../configure/conf";

class AuthService {
    client = new Client();
    account;
    
    
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId);
        this.account = new Account(this.client);
    }

    async signUp ({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount)
                return this.logIn({email, password})
            else 
                return "userAccount"      
        } catch (error) {
            console.log("authentication :: signUp :: ", error)
            return false;
        }
    }

    async logIn({ email, password }) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            if (session) 
                return session
            else
                return false
        } catch (error) {
            console.log("authentication :: logIn :: ", error);
            return false;
        }
    }

    async currentUser() {
        try {
            const user = await this.account.get()
            if (user) 
                return user
            else 
                return false
        } catch (error) {
            console.log("authentication :: currentUser :: ", error);
            return false;
        }
    }

    async logOut() {
        try {
            return await this.account.deleteSessions(); 
        } catch (error) {
            console.log("authentication :: logOut :: ", error);
            return false;
        }
    }
}

const authService = new AuthService()

export default authService