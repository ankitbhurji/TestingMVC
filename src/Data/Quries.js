import { DataStore } from '@aws-amplify/datastore';
import { UserModel } from '../models';

export default class Quries{

    async findUser(email, userType, userId){
        const allAdmin  = await DataStore.query(UserModel, (user)=>user.or(user=>[
            user.email.eq(email),
            user.id.eq(userId)
        ]))
        return allAdmin
    }

    async updateUserOtp(users, otp){
        if(users && otp){
            const updateUser = await DataStore.save(
                UserModel.copyOf(...users, (update)=>{
                    update.otp = +otp
                })
            )
            return updateUser
        } 
    }
}
