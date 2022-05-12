import { Injectable } from "@nestjs/common";


@Injectable({})
export class AuthService{
    signin(){
        return "I'm Signin";
    }
    signup(){
        return "I'm Signup";
    }
}