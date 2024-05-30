import { useState } from "react";

const RandevuComponent = () => {
  const [reservationDate, setReservationdate] = useState("");
  const [isActive, setIsActive] = useState("");
  const [seat, setSeat] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Reservation made:", { reservationDate, isActive, seat });
  };

  return (
    <div>
      <h2>Randevu Al</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tarih: </label>
          <input
            type="date"
            value={reservationDate}
            onChange={(e) => setReservationdate(e.target.value)}
          />
        </div>
        <div>
          <label>Aktif Mi? </label>
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
        </div>
        <div>
          <label>Koltuk Numarası: </label>
          <input
            type="text"
            value={seat}
            onChange={(e) => setSeat(e.target.value)}
          />
        </div>
        <button type="submit">Randevu Al</button>
      </form>
    </div>
  );
};

export default RandevuComponent;
