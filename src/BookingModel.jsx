import { useState } from "react";
import './styles.css';

export function BookingModal({ room, onClose, onSave }) {
  const [checkIn, setCheckIn] = useState("");
  const [nights, setNights] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();
    setError("");
    if (!checkIn) return setError("Please choose a check-in date.");
    if (!name.trim()) return setError("Please enter your name.");
    if (!phone.trim()) return setError("Please enter your phone number.");
    if (nights < 1) return setError("Nights must be at least 1.");

    const id = Date.now();
    const total = room.price * nights;
    const newBooking = {
      id,
      roomId: room.id,
      roomName: room.name,
      checkIn,
      nights,
      name,
      phone,
      total,
    };

    onSave(newBooking);
  }

  return (
    <div className="rb-modal-root">
      <div className="rb-backdrop" onClick={onClose}></div>

      <form onSubmit={submit} className="rb-modal">
        <div className="rb-modal-head">
          <div>
            <div className="rb-modal-title">Book: {room.name}</div>
            <div className="rb-modal-subtitle">₹{room.price} / night</div>
          </div>
          <button 
            type="button" 
            onClick={onClose} 
            className="rb-modal-close"
          >
            ✕
          </button>
        </div>

        <div>
          <div className="rb-field">
            <label>Check-in date</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>

          <div className="rb-field">
            <label>Nights</label>
            <input
              type="number"
              min={1}
              value={nights}
              onChange={(e) => setNights(Number(e.target.value))}
              required
            />
          </div>

          <div className="rb-field">
            <label>Your name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              required
            />
          </div>

          <div className="rb-field">
            <label>Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Mobile number"
              required
            />
          </div>

          {error && <div className="rb-error">{error}</div>}

          <div className="rb-modal-footer">
            <div className="rb-modal-total">
              Total: <span className="rb-modal-total-amount">₹{room.price * nights}</span>
            </div>
            <button type="button" onClick={onClose} className="btn btn-ghost">
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
