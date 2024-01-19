import TableForm from "../../features/TableForm/TableForm";

const AddTable = () => {
  const table = {
    status: "free",
    peopleAmount: "0",
    maxPeopleAmount: "4",
    bill: "",
  };
  return (
    <div className="add-table">
      <h1>Add Table</h1>
      <TableForm table={table} formForAdd={true}/>
    </div>
  );
};
export default AddTable;