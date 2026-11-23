import { Fragment } from "react"; //can also use <></> instead of Fragment
import type { MouseEvent } from "react";

function ListGroup() {
  let items = ["Chicago", "Philly", "DC", "Detoit", "Miami"];
  
  const message = items.length === 0 && <p>No items found</p>;
//event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <Fragment>
      <h1>List Group</h1>
      {message}
        <ul className="list-group">
          {items.map((item, index) => (
            <li 
            className="list-group-item" 
            key={item} 
            onClick={handleClick}>
              {item}
            </li>
          ))}
        </ul>
    </Fragment>
  );
}

export default ListGroup;
