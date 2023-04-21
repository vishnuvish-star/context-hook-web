import Card from "../card/card";

const Products = () => {
  const data = [
    {
      name: "pant",
      price: 100,
    },
    {
      name: "shirt",
      price: 300,
    },
    {
      name: "lungi",
      price: 150,
    },
    {
      name: "sports wear",
      price: 200,
    },
    {
      name: "inner",
      price: 200,
    },
  ];
  return (
    <div>
      {data.map((details) => (
        <Card name={details.name} price={details.price} />
      ))}
    </div>
  );
};
export default Products;
