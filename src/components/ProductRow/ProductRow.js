import "./ProductRow.css";

export function ProductRow({ prod }) {
  return (
    <tr className="product_row">
      {prod.stock ? (
        <td style={{ color: "black" }}>{prod.name}</td>
      ) : (
        <td style={{ color: "red" }}>{prod.name}</td>
      )}
      <td>{prod.price}</td>
    </tr>
  );
}