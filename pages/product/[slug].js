import { useQuery } from "urql"
import { GET_PRODUCT_QUERY } from "@/lib/query"
import { Error, Loading } from "@/Components/Messages";
import { useRouter } from "next/router";
import { DetailsStyle } from "@/styles/ProductDetails";
import { Buy, ProductInfo, Quantity } from "@/styles/ProductStyle";
import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai';

export default function ProductDetails() {
  //Fetch slug
  const { query } = useRouter();
  //Fetch GraphQL data
  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug }
  })
  const { data, fetching, error } = result;
  if(fetching) return <Loading />
  if(error) return <Error error={error.message} />

  
  const {Image,Title,Description, Price} = data.products.data[0].attributes;

  return (
    <DetailsStyle>
      <title>{Title}</title>
      <img src={Image.data.attributes.formats.medium.url} alt={Title} />
      <ProductInfo>
        <h3>{Title}</h3>
        <p>{Description}</p>
        <p>€{Price}</p>
        <Quantity>
          <span>Quantity</span>
          <button>
            <AiFillMinusCircle />
          </button>
          <p>0</p>
          <button>
            <AiFillPlusCircle />
          </button>
        </Quantity>
        <Buy>Add to Cart</Buy>
      </ProductInfo>

    </DetailsStyle>
  )
}
