import User from "./User";
import Category from "./Category";
type ProductResponse = {
    id?:number,
    marque:string,
    images:File[],
    description:string,
    quantite:number,
    prixachat:number,
    prix_vente:number,
    type_operation?:string
    categorie_id:number,
    user_id:number,
    user:User,
    categorie:Category
}
export default ProductResponse