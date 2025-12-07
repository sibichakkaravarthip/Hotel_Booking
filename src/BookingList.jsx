 export function BookingList({ bookings, onCancel }) {
  if (bookings.length === 0)
    return <div className="text-sm">No bookings yet — try one of the rooms!</div>;

  return (
    <div className="space-y-3">
      {bookings.map((b) => (
        <div key={b.id} className="rb-booking-item">
          <div className="rb-booking-row">
            <div>
              <div className="rb-booking-title">{b.roomName}</div>
              <div className="rb-booking-meta">{b.checkIn} • {b.nights} night(s)</div>
              <div className="rb-booking-total">Total: ₹{b.total}</div>
            </div>
            <button
              onClick={() => onCancel(b.id)}
              className="btn btn-danger"
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}