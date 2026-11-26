import { Fragment, useState } from "react"; //can also use <></> instead of Fragment

// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup(props: Props) {
  
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  

  const message = props.items.length === 0 && <p>No items found</p>;


  return (
    <Fragment>
      <h1>{props.heading}</h1>
      {message}
        <ul className="list-group">
          {props.items.map((item, index) => (
            <li 
            className={ selectedIndex === index ? "list-group-item active" : "list-group-item" } 
            key={item} 
            onClick={() => {
                setSelectedIndex(index);
                props.onSelectItem(item);
            }}>
              {item}
            </li>
          ))}
        </ul>
    </Fragment>
  );
}

export default ListGroup;
