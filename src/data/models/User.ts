type User = {

    id?: number,
    nom: string,
    prenom: string,
    password: string,
    role?:string,
    adresse:string,
    sexe:string,
    telephone:string,
    image?:File[],
    email:string,
}

export default User;