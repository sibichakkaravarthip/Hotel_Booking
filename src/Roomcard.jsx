export function RoomCard({ room, onBook }) {
  return (
    <div className="rb-card">
      <img src={room.img} alt={room.name} />
      <div className="rb-card-body">
        <div className="rb-card-row">
          <h3 className="rb-card-title">{room.name}</h3>
          <div className="rb-price">₹{room.price}/night</div>
        </div>
        <p className="rb-desc">{room.desc}</p>
        <div className="rb-card-row" style={{marginTop: '16px'}}>
          <div className="rb-meta-small">Beds: {room.beds}</div>
          <button
            onClick={onBook}
            className="btn btn-primary"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}