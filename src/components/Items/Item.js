import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <li style={{ listStyleType: "none" }}>
      <div
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <a href={props.href} target="_blank">
          <h3 style={{ textAlign: "center", marginBottom: "0" }}>
            {props.name}
          </h3>
          <img
            style={{
              margin: "auto",
              display: "block",
            }}
            border={0}
            src={props.src}
            alt={props.name}
          />
        </a>
        <p>{props.review}</p>
      </div>
    </li>
  );
};

export default Item;
