const STYLE = {
  header: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "10px 0",
    position: "sticky",
    top: 0,
    width: "100%",
  },
  footer: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "10px 0",
    bottom: 0,
    width: "100%",
    position: "fixed",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
    paddingBottom: "80px",
  },
  item: {
    borderRadius: "5px",
    margin: "10px",
    padding: "10px",
    width: "300px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontWeight: "bold",
  },
  description: {
    fontSize: "14px",
    margin: "10px 0",
  },
  status: {
    backgroundColor: "#333",
    color: "white",
    padding: "5px",
    textAlign: "center",
    margin: "10px 0",
    borderRadius: "6px",
  },
  feature: {
    display: "flex",
    justifyContent: "space-between",
  },
  btn_edit: {
    backgroundColor: "#1bb3ce",
    color: "white",
    padding: "8px 12px",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "10px",
  },
  btn_delete: {
    backgroundColor: "#ed3838",
    color: "white",
    padding: "8px 12px",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "10px",
  },
  done: {
    backgroundColor: "green",
  },
  pending: {
    backgroundColor: "yellow",
    color: "black",
  },

  in_progress: {
    backgroundColor: "blue",
  },
  cancel: {
    backgroundColor: "red",
  },
};

export default STYLE;
