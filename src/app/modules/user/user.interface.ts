export type UserType={
    name:string;
    email:string;
    password:string;
    phone:string;
    role:'user'|'admin';
    address:string;
}
export type ReviewType={
    ratingValue:number;
    feedBack:string;
    userEmail:string;
    name:string;
}