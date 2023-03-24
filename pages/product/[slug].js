import { useQuery } from "urql"
import { GET_PRODUCT_QUERY } from "@/lib/query"
import { Error, Loading } from "@/Components/Messages";
import { useRouter } from "next/router";
import { DetailsStyle } from "@/styles/ProductDetails";
import { Buy, ProductInfo, Quantity } from "@/styles/ProductStyle";
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useStateContext } from "@/lib/context";


export default function ProductDetails() {

  //Use the state
  const { qty, increaseQty, decreaseQty, onAdd } = useStateContext();

  //Fetch slug
  const { query } = useRouter();

  //Fetch GraphQL data
  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug }
  })
  const { data, fetching, error } = result;

  //Checking for status
  if (fetching) return <Loading />
  if (error) return <Error error={error.message} />

  //Extraction
  const { Image, Title, Description, Price } = data.products.data[0].attributes;


  return (
    <DetailsStyle>
      <img src={Image.data.attributes.formats.medium.url} alt={Title} />
      <ProductInfo>
        <h3>{Title}</h3>
        <p>{Description}</p>
        <p>€{Price}</p>
        <Quantity>
          <span>Quantity</span>
          <button>
            <AiFillMinusCircle onClick={decreaseQty} />
          </button>
          <p>{qty}</p>
          <button>
            <AiFillPlusCircle onClick={increaseQty} />
          </button>
        </Quantity>
        <Buy onClick={() => onAdd(data.products.data[0].attributes, qty)}>Add to Cart</Buy>
      </ProductInfo>

    </DetailsStyle>
  )
}
