export const PRODUCT_QUERY =
   "query{
    products{
        data{
        attributes
        { Title,
             Description, 
             slug, 
             Price, 
             Image{data{attributes{ url } } } }
    }
}
  }
"