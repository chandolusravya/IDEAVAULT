import { User } from "./types";

//interface in global scope, we extended it
 declare global{
    interface CustomJwtSessionClaims extends User {}
 }