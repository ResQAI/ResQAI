import React, { useState, KeyboardEvent } from "react";
import { Dialog } from "@headlessui/react";
import Button from "./Button";

interface Task {
  id: number;
  title: string;
  statusUpdates: StatusUpdate[];
}

interface StatusUpdate {
  timestamp: Date;
  currentStatus: string;
  personnelCount: number;
  additionalTimeNeeded: number;
  resources: string[];
  departments: string[];
  additionalResources: string[];
}

interface StatusUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task; // Update to use the Task type with statusUpdates array
  onUpdate?: (taskId: number, update: StatusUpdate) => void;
}

interface ListItem {
  id: string;
  text: string;
}

const ListInput = ({
  items,
  setItems,
  placeholder,
}: {
  items: ListItem[];
  setItems: (items: ListItem[]) => void;
  placeholder: string;
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      setItems([
        ...items,
        { id: Date.now().toString(), text: inputValue.trim() },
      ]);
      setInputValue("");
    }
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full p-3 border border-gray-300 rounded-md mb-2"
        placeholder={placeholder}
      />
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-green-100 text-green-800 px-3 py-1 rounded-md flex items-center gap-2"
          >
            <span>{item.text}</span>
            <button
              onClick={() => removeItem(item.id)}
              className="text-green-600 hover:text-green-800"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const StatusUpdateModal: React.FC<StatusUpdateModalProps> = ({
  isOpen,
  onClose,
  task,
  onUpdate,
}) => {
  const [resources, setResources] = useState<ListItem[]>([]);
  const [departments, setDepartments] = useState<ListItem[]>([]);
  const [additionalResources, setAdditionalResources] = useState<ListItem[]>(
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUpdate: StatusUpdate = {
      timestamp: new Date(),
      currentStatus: "Status update", // Get from form
      personnelCount: 0, // Get from form
      additionalTimeNeeded: 0, // Get from form
      resources: resources.map((r) => r.text),
      departments: departments.map((d) => d.text),
      additionalResources: additionalResources.map((r) => r.text),
    };

    if (onUpdate) {
      onUpdate(task.id, newUpdate);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-white rounded-lg p-8 w-[600px] max-h-[80vh] overflow-y-auto">
          <Dialog.Title className="text-2xl font-semibold mb-6">
            Update Status: {task.title}
          </Dialog.Title>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Task Status
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md"
                rows={3}
                placeholder="Describe current situation on the ground..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Personnel Involved
              </label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-md"
                min="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Time Required (hours)
              </label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-md"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resources Being Used
              </label>
              <ListInput
                items={resources}
                setItems={setResources}
                placeholder="Type a resource and press Enter..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Departments required for assistance
              </label>
              <ListInput
                items={departments}
                setItems={setDepartments}
                placeholder="Type the Department name whose assistance is required and press Enter..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Resources/Personnel Required from Other Departments
              </label>
              <ListInput
                items={additionalResources}
                setItems={setAdditionalResources}
                placeholder="Type required resource and press Enter..."
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
              >
                Submit Update
              </Button>
              <Button
                type="button"
                onClick={onClose}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default StatusUpdateModal;
