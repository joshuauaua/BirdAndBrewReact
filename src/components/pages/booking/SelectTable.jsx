import '/src/pages/Booking.css'

export default function SelectTable({ tables, formData, setFormData }) {
  const handleSelect = (event) => {
    const selectedId = parseInt(event.target.value, 10);
    const selectedTable = tables.find((t) => t.id === selectedId);

    if (selectedTable) {
      setFormData((prev) => ({
        ...prev,
        tableId: selectedTable.id,
        tableNumber: selectedTable.tableNumber,
      }));
    }
  };

  return (
    <div className="table-select">
      <select
        className="table-dropdown"
        value={formData.tableId || ""}
        onChange={handleSelect}
      >
        <option value="">-- Choose a table --</option>
        {tables.map((table) => (
          <option key={table.id} value={table.id}>
            Table {table.tableNumber} — Seats {table.capacity}
          </option>
        ))}
      </select>
    </div>
  );
}