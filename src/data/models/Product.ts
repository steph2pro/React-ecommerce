type Product = {
    id?:number,
    marque:string,
    image:File[],
    description:string,
    quantite:number,
    prix_achat:number,
    prix_vente:number,
    type_operation?:string
    categorie_id:number,
    user_id:number

}
export default Product