import HandleAvailability from "./HandleAvailability";
import HandleGuest from "./HandleGuest";



export default function DynamicButtons({
  page,
  formData,
  setError,
  setTables,
  setPage,
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
        <button
          className="btn-primary"
          onClick={() => HandleGuest(formData, setError, setPage)}
        >
          Confirm your booking
        </button>
      </div>
    );
  }
}