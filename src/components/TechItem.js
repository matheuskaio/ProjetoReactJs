import React from "react";

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      {/* <button onClick={() => this.handleDelete(tech)} type="button">
        Remover
      </button> */}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

export default TechItem;
