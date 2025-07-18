// 📂 components/test-drive-card.jsx

"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function TestDriveCard({
  booking,
  onCancel,
  isCancelling,
  cancelError,
  showActions = false,
  isPast = false,
  viewMode = "card",
}) {
  const handleCancelClick = () => {
    if (onCancel) {
      onCancel(booking.id);
    }
  };

  return (
    <Card className="p-4 space-y-2">
      <h3 className="text-xl font-semibold">{booking.carName}</h3>
      <p>Date: {booking.date}</p>
      <p>Status: {booking.status}</p>

      {showActions && (
        <div className="mt-4 flex gap-2">
          <Button
            variant="destructive"
            disabled={isCancelling}
            onClick={handleCancelClick}
          >
            {isCancelling ? "Cancelling..." : "Cancel Booking"}
          </Button>
          {cancelError && (
            <p className="text-red-500 text-sm">{cancelError.message}</p>
          )}
        </div>
      )}

      {isPast && <p className="text-sm italic text-gray-500">Past test drive</p>}
    </Card>
  );
}
