export default function SelectTable({
  formData,
  setFormData,
  tables,
}) {
  return (
    <div className="form-container">
      <select
        value={formData.tableNumber}
        onChange={(e) =>
          setFormData({ ...formData, tableNumber: e.target.value })
        }
      >
        <option value="">Select a table</option>
        {tables && tables.length > 0 ? (
          tables.map((table) => (
            <option key={table.id} value={table.id}>
              Table {table.tableNumber} (Seats {table.capacity})
            </option>
          ))
        ) : (
          <option disabled>No tables available</option>
        )}
      </select>
    </div>
  );
}
