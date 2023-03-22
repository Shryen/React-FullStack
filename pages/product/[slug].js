import { useQuery } from "urql"
import { GET_PRODUCT_QUERY } from "@/lib/query"
import { Error, Loading } from "@/Components/Messages";
import { useRouter } from "next/router";

export default function ProductDetails() {
  //Fetch slug
  const {query} = useRouter();
  //Fetch GraphQL data
  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug }
  })
  const {data, fetching, error} = result;
  {fetching && <Loading />}
  {error && <Error error={error.message}/>}
  console.log(data);
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h3>Title</h3>
        <p>Description</p>
      </div>
      <div>
        <span>Quantity</span>
        <button>+</button>
        <p>0</p>
        <button>-</button>
      </div>
      <button>Add to Cart</button>
    </div>
  )
}
