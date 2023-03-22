export default function Product({ product }) {
    const {Title,Price,Image} = product.attributes;
  return (
    <div>
        <div>
            <img src={Image.data.attributes.formats.small.url} alt="" />
        </div>
        <h2>{Title}</h2>
        <h3>${Price}</h3>
    </div>
  )
}
