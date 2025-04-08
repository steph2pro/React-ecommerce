type Product = {
    id?:number,
    marque:string,
    images:File[],
    description:string,
    quantite:number,
    prixachat:number,
    prix_vente:number,
    type_operation?:string
    categorie_id:number,
    user_id:number

}
export default Product