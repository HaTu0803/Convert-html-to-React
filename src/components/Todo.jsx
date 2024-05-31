import React from "react";
import STYLE from "./Style";

function Todo({ title, description, status }) {
  const getStatusStyle = ({status}) => {
    switch (status) {
      case "DONE":
        return STYLE.done;
      case "PENDING":
        return STYLE.pending;
      case "IN PROGRESS":
        return STYLE.in_progress;
      case "CANCEL":
        return STYLE.cancel;
      default:
        return {};
    }
  };
  return (
    <div className="item" style={STYLE.item}>
      <div className="title" style={STYLE.title}>
        {title}
      </div>
      <div className="description" style={STYLE.description}>
        {description}
      </div>
      <div
        className={`status ${status}`}
        style={{ ...STYLE.status, ...getStatusStyle({status}) }}
      >
        {status}
      </div>
      <div className="feature" style={STYLE.feature}>
        <div className="btn-edit" style={STYLE.btn_edit}>
          Edit
        </div>
        <div className="btn-delete" style={STYLE.btn_delete}>
          Delete
        </div>
      </div>
    </div>
  );
}

export default Todo;
