import HandleAvailability from "./HandleAvailability";

export default function DynamicFooter({
  page,
  formData,
  setError,
  setTables,
  setPage,
  handleConfirm,
}) {
  if (page === 0) {
    return (
      <button
        className="btn-primary"
        onClick={() =>
          HandleAvailability(formData, setError, setTables, setPage)
        }
      >
        Check Availability
      </button>
    );
  } else if (page === 1 || page === 2) {
    return (
      <div>
        <button
          className="btn-secondary"
          onClick={() => setPage((currPage) => currPage - 1)}
        >
          Go Back
        </button>

        <button
          className="btn-primary"
          onClick={() => setPage((currPage) => currPage + 1)}
        >
          Next
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button
          className="btn-secondary"
          onClick={() => setPage((currPage) => currPage - 1)}
        >
          Go Back
        </button>
        <button className="btn-primary" onClick={handleConfirm}>
          Confirm your booking
        </button>
      </div>
    );
  }
}