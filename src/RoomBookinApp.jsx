import { useState, useEffect } from "react";
import './styles.css';
import { RoomCard } from "./Roomcard";
import { BookingList } from "./BookingList";
import { BookingModal } from "./BookingModel";
import img1 from './assets/22.jpg';
import img2 from './assets/3.jpg';
export default function RoomBookingApp() {
  const sampleRooms = [
    {
      id: 1,
      name: "Cozy Single",
      price: 1200,
      beds: 1,
      desc: "A compact, comfortable single room — perfect for solo travelers.",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 2,
      name: "Deluxe Double",
      price: 2400,
      beds: 2,
      desc: "Spacious double room with a city view and modern amenities.",
      img: img1,
    },
    {
      id: 3,
      name: "Family Suite",
      price: 4200,
      beds: 3,
      desc: "Large suite with living area — ideal for families or groups.",
      img: img2,
    },
  ];

  const [rooms] = useState(sampleRooms);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Load saved bookings from localStorage (simple persistence for beginners)
    const saved = localStorage.getItem("rb_bookings");
    if (saved) setBookings(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("rb_bookings", JSON.stringify(bookings));
  }, [bookings]);

  function openBooking(room) {
    setSelectedRoom(room);
    setShowModal(true);
  }

  function saveBooking(newBooking) {
    setBookings((prev) => [newBooking, ...prev]);
    setShowModal(false);
    setSelectedRoom(null);
  }

  function cancelBooking(id) {
    if (!confirm("Cancel this booking?")) return;
    setBookings((prev) => prev.filter((b) => b.id !== id));
  }

  return (
    <div className="rb-page">
      <header className="rb-container rb-header">
        <h1 className="rb-title">Book Your Rooms In StayComfort</h1>
        <p className="rb-meta">Local demo · data stored in localStorage</p>
      </header>

      <main className="rb-container rb-grid">
        <section>
          <h2 style={{fontSize: '20px', fontWeight: '700', marginBottom: '20px'}}>Available Rooms</h2>
          <div className="rb-rooms-grid">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} onBook={() => openBooking(room)} />
            ))}
          </div>
        </section>

        <aside className="rb-aside">
          <h2>Your Bookings</h2>
          <BookingList bookings={bookings} onCancel={cancelBooking} />
        </aside>
      </main>

      {showModal && selectedRoom && (
        <BookingModal
          room={selectedRoom}
          onClose={() => setShowModal(false)}
          onSave={saveBooking}
        />
      )}

    
    </div>
  );
}




