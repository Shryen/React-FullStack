import { ProductStyles } from "@/styles/ProductStyle";
import Link from "next/link";

export default function Product({ product }) {
    const {Title,Price,Image, slug} = product.attributes;
  return (
    <ProductStyles>
      <Link href={`/product/${slug}`}>
        <div>
            <img src={Image.data.attributes.formats.small.url} alt="" />
        </div>
      </Link>
      <Link href={`/product/${slug}`}>
        <h2>{Title}</h2>
      </Link>
        <h3>${Price}</h3>
    </ProductStyles>
  )
}
