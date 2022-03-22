import "./ProductRow.css";

export function ProductRow({ prod }) {
  
  return(
      <div>
          <h1>Render</h1>
          <p>{prod.name}</p>
          <p>{prod.price}</p>
      </div>    
  )
}