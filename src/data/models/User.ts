type User = {
    id?:number,
    nom: string,
    prenom: string,
    sexe: string,
    adresse: string
    telephone: string,
    image?: File,
    email: string,
    password: string,
    role?:string

}

export default User;