export interface ServiceRequest {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'scheduled' | 'completed' | 'cancelled';
  date: string;
  clientName: string;
  propertyAddress: string;
  serviceType: string;
}

export interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface WorkOrder {
  id: string;
  title: string;
  status: 'open' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  completedAt?: string;
  description: string;
  location: string;
}

export interface ServiceProvider {
  name: string;
  email: string;
  phone: string;
  services: string[];
  rating: number;
  completedJobs: number;
  availability: {
    [key: string]: {
      start: string;
      end: string;
    }[];
  };
}