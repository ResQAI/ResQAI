import React, { useState } from "react";

const Modal = ({ isOpen, onClose, title }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirm = async () => {
    try {
      setIsSubmitting(true);
      // Simulate an API call
      const response = await fetch("/api/add-to-monitor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Add to Monitor" }),
      });

      if (!response.ok) {
        throw new Error("Failed to add to monitor");
      }

      const result = await response.json();
      console.log("Successfully added to monitor:", result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
      onClose(); // Close the modal after submission
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-700 mb-6">
          You are adding this prediction to the monitor. Configure any
          additional settings or confirm.
        </p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 mr-2"
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 text-white ${
              isSubmitting ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
            } rounded`}
            onClick={handleConfirm}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
