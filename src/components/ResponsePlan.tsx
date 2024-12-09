"use client"
import React, { useState } from 'react'
import { ChevronDown, Trash2, Check, Clock, AlertTriangle } from 'lucide-react'

interface Work {
  id: number;
  description: string;
  status: 'done' | 'in-progress' | 'to-do';
  department: string;
}

const departments = [
  'Engineering',
  'Product Management',
  'Customer Support', 
  'Sales',
  'Marketing',
  'Human Resources',
  'Finance'
]

const initialWorks: Work[] = [
  { 
    id: 1, 
    description: 'Implement user authentication', 
    status: 'done',
    department: 'Engineering'
  },
  { 
    id: 2, 
    description: 'Design new landing page', 
    status: 'in-progress',
    department: 'Product Management'
  },
  { 
    id: 3, 
    description: 'Prepare quarterly report', 
    status: 'to-do',
    department: 'Finance'
  },
  { 
    id: 4, 
    description: 'Client meeting preparation', 
    status: 'to-do',
    department: 'Sales'
  },
  { 
    id: 5, 
    description: 'Update marketing materials', 
    status: 'in-progress',
    department: 'Marketing'
  }
]

const StatusIcons = {
  'done': Check,
  'in-progress': Clock,
  'to-do': AlertTriangle
}

const StatusColors = {
  'done': {
    bg: 'bg-emerald-50/50',
    text: 'text-emerald-700',
    icon: 'text-emerald-500',
    border: 'border-emerald-200'
  },
  'in-progress': {
    bg: 'bg-sky-50/50',
    text: 'text-sky-700',
    icon: 'text-sky-500',
    border: 'border-sky-200'
  },
  'to-do': {
    bg: 'bg-amber-50/50',
    text: 'text-amber-700',
    icon: 'text-amber-500',
    border: 'border-amber-200'
  }
}

const ResponsePlan = () => {
  const [workDescription, setWorkDescription] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [works, setWorks] = useState<Work[]>(initialWorks);
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!workDescription.trim()) {
      alert('Please enter a work description');
      return;
    }
    if (!selectedDepartment) {
      alert('Please select a department');
      return;
    }

    const newWork: Work = {
      id: works.length + 1,
      description: workDescription,
      status: 'to-do',
      department: selectedDepartment
    }

    setWorks([...works, newWork]);
    setWorkDescription('');
    setSelectedDepartment('');
  };

  const handleDeleteWork = (id: number) => {
    setWorks(works.filter(work => work.id !== id));
  };

  return (
    <div className="bg-neutral-50 h-full rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 flex flex-col">
      {/* Work List Section */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4 scrollbar-thin scrollbar-thumb-neutral-300">
        {works.map((work) => {
          const statusStyle = StatusColors[work.status];
          const StatusIcon = StatusIcons[work.status];

          return (
            <div 
              key={work.id} 
              className={`
                relative group cursor-pointer 
                ${statusStyle.bg} ${statusStyle.border}
                border rounded-xl p-4 
                transition-all duration-500 
                hover:shadow-lg
              `}
              onMouseEnter={() => setHoveredWork(work.id)}
              onMouseLeave={() => setHoveredWork(null)}
            >
              {hoveredWork === work.id && (
                <div className="absolute inset-0 bg-neutral-200/50 
                  animate-spread z-0 rounded-xl"></div>
              )}

              <div className={`relative z-10 flex items-center 
                ${hoveredWork === work.id ? 'blur-sm' : ''}`}>
                <StatusIcon className={`mr-3 ${statusStyle.icon}`} size={20} />
                <div className="flex-grow">
                  <div className={`font-medium ${statusStyle.text}`}>
                    {work.description}
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    {work.department}
                  </div>
                </div>
                <div className={`capitalize font-semibold 
                  ${statusStyle.text} text-sm`}>
                  {work.status.replace('-', ' ')}
                </div>
              </div>

              {hoveredWork === work.id && (
                <div className="absolute inset-0 flex items-center 
                  justify-center z-20">
                  <button 
                    onClick={() => handleDeleteWork(work.id)}
                    className="z-30 hover:scale-110 transition-transform"
                  >
                    <Trash2 
                      className="text-neutral-700 hover:text-red-500" 
                      size={24} 
                    />
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Input Section */}
      <div className="bg-white border-t border-neutral-200 px-4 sm:px-6 py-4 mt-auto">
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4">
            <div className="flex-grow">
              <textarea 
                value={workDescription}
                onChange={(e) => setWorkDescription(e.target.value)}
                rows={1}
                className="w-full border border-neutral-300 rounded-lg p-3 
                focus:ring-2 focus:ring-sky-500 focus:outline-none 
                hover:border-sky-300 transition-all duration-300 
                resize-none text-neutral-700
                placeholder-neutral-400"
                placeholder="Describe the work to be done..."
              />
            </div>
            <div className="w-full sm:w-1/3 mt-2 sm:mt-0">
              <div className="relative">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full border border-neutral-300 rounded-lg p-3 
                  appearance-none focus:ring-2 focus:ring-sky-500 
                  focus:outline-none hover:border-sky-300 
                  transition-all duration-300 text-neutral-700"
                >
                  <option value="">Department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                  <ChevronDown size={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button 
              type="submit" 
              className="w-full sm:w-1/2 bg-sky-600 text-white py-3 rounded-lg 
              hover:bg-sky-700 active:bg-sky-800 
              focus:outline-none focus:ring-2 focus:ring-sky-300 
              transition-all duration-300 transform hover:scale-[1.02] 
              active:scale-95 shadow-md hover:shadow-xl
              font-semibold tracking-wider"
            >
              Send Work Request
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResponsePlan
