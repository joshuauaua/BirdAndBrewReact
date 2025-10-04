

export default function SelectTable({ tables, formData, setFormData }) {
  const handleSelect = (table) => {
    setFormData(prev => ({
      ...prev,
      tableId: table.id,
      tableNumber: table.tableNumber
    }));
  };

  return (
    <div className="table-select">
      <h3>Select a Table</h3>
      {tables.map(table => (
        <button
          key={table.id}
          className={`table-btn ${formData.tableId === table.id ? "selected" : ""}`}
          onClick={() => handleSelect(table)}
        >
          Table {table.tableNumber} — Seats {table.capacity}
        </button>
      ))}
    </div>
  );
}