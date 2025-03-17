import React from "react";

const Item = ({ item, onDelete }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", padding: "8px", borderBottom: "1px solid #ddd" }}>
            <span>{item.name}</span>
            <button onClick={() => onDelete(item.id)} style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
                Delete
            </button>
        </div>
    );
};

export default Item;
