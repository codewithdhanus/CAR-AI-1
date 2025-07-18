export const ReservationsList = ({ initialData = [] }) => {
  if (!initialData.length) {
    return <p>No reservations found.</p>;
  }

  return (
    <div>
      {initialData.map((reservation) => (
        <div key={reservation.id} className="p-4 border rounded mb-2">
          {/* Customize display as needed */}
          <p>Car: {reservation.carName}</p>
          <p>Date: {reservation.date}</p>
        </div>
      ))}
    </div>
  );
};
