import React from 'react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: {
    name: 'Standard Package';
    price: 59.0;
    invoiceDate: `Jan 13,2023`;
    status: 'Paid';
  };
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, order }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{order.name}</h2>
        <p>
          <strong>Followers:</strong> {order.price}
        </p>
        <p>
          <strong>Duration:</strong> {order.invoiceDate}
        </p>
        <p>
          <strong>Invoice Date:</strong> {order.invoiceDate}
        </p>
        <p>
          <strong>Status:</strong> {order.status}
        </p>

        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
