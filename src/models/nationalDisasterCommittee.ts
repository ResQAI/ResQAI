import { Timestamp } from "firebase/firestore";

export interface GeoLocation {
  latitude: number;
  longitude: number;
  address?: string;
  affectedArea?: string;
}

export enum DisasterLevel {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
  CRITICAL = 4,
}

export enum DisasterStatus {
  POTENTIAL = "potential",
  ACTIVE = "active",
  CONTAINED = "contained",
  RESOLVED = "resolved",
}

export interface BaseDisaster {
  id: string;
  name: string;
  tags: [];
  exactLocation: GeoLocation;
  level: DisasterLevel;
  peopleAffected: number;
  estimatedEconomicImpact: number;
  startTime: Timestamp;
  endTime?: Timestamp;
  status: DisasterStatus;
  geologicalData?: {
    magnitude?: number;
    depth?: number;
    richterScale?: number;
  };
  weatherData?: {
    windSpeed?: number;
    precipitation?: number;
    temperature?: number;
  };
}

export interface IncomingDisaster extends BaseDisaster {}

export interface DeclaredDisaster extends BaseDisaster {
  responsePlan: Task[];
  notifications: Notification[];
  resourceRequests: ResourceRequest[];
  situationReports: SituationReport[];
}

export interface Task {
  id: string;
  disasterId: string;
  name: string;
  status: "pending" | "in-progress" | "completed" | "on-hold";
  departmentConcerned: string;
  priority: "low" | "medium" | "high" | "critical";
  completedByTime: Timestamp;
  description: string;
  startTime: Timestamp;
  statusUpdates: [];
  estimedEndTime: Timestamp;
  isFailed: boolean;
}

export interface SituationReport {
  id: string;
  disasterId: string;
  disasterStatus: {
    weatherCondition: {
      primary: string;
      details: string[];
      severity: number;
    };
    affectedAreas: {
      name: string;
      coordinates: GeoLocation;
      impactLevel: number;
    }[];
    affectedPopulation: {
      total: number;
      demographics: {
        children: number;
        adults: number;
        elderly: number;
      };
      vulnerableGroups: string[];
    };
  };
  casualties: {
    types: {
      category: string;
      count: number;
    }[];
    firstAid: {
      treatmentType: string;
      treatmentLocation: string;
      personnelInvolved: number;
    }[];
    communication: {
      status: "operational" | "limited" | "down";
      methods: string[];
    };
  };
  materialFlow: {
    foodMaterials: {
      type: string;
      quantity: number;
      distributionMethod: string;
    }[];
    airDropping: {
      active: boolean;
      frequency?: number;
      locations?: GeoLocation[];
    };
    transport: {
      type: string;
      capacity: number;
      activeVehicles: number;
    }[];
    medicalAid: {
      type: string;
      quantity: number;
      destination: GeoLocation;
    }[];
  };
  teamArrival: {
    centralTeams: {
      name: string;
      arrivalTime: Timestamp;
      personnelCount: number;
    }[];
    internationalTeams: {
      country: string;
      organizationName: string;
      arrivalTime: Timestamp;
      personnelCount: number;
    }[];
    others: {
      name: string;
      type: string;
      arrivalTime: Timestamp;
    }[];
  };
  summary: {
    overview: string;
    criticalObservations: string[];
    recommendedActions: string[];
  };
}

export interface Notification {
  id: string;
  disasterId: string;
  type: "incoming" | "sent" | "alert" | "update";
  departmentsConcerned: string[];
  urgency: "low" | "medium" | "high" | "critical";
  dateIssued: Timestamp;
  status: "read" | "unread" | "archived";
  title: string;
  message: string;
  attachedFiles: {
    name: string;
    url: string;
    type: "pdf" | "doc" | "image" | "other";
    size: number;
  }[];
  relatedDisasterId?: string;
}

export interface OverallNotification {
  id: string;
  type: "incoming" | "sent" | "alert" | "update";
  departmentsConcerned: string[];
  urgency: "low" | "medium" | "high" | "critical";
  dateIssued: Timestamp;
  status: "read" | "unread" | "archived";
  title: string;
  message: string;
  attachedFiles: {
    name: string;
    url: string;
    type: "pdf" | "doc" | "image" | "other";
    size: number;
  }[];
  relatedDisasterId?: string;
}

export interface ChatContent {
  type: "text" | "file" | "image" | "location" | "audio";
  content:
    | string
    | {
        fileUrl?: string;
        fileName?: string;
        fileSize?: number;
        mimeType?: string;
        locationData?: GeoLocation;
        audioDuration?: number;
      };
}

export interface Chat {
  id: string;
  sentBy: string;
  time: Timestamp;
  content: ChatContent;
  readBy: string[];
}

export interface Group {
  id: string;
  name: string;
  chats: Chat[];
  members: string[];
  createdAt: Timestamp;
  type: "disaster-response" | "department" | "emergency";
}

export interface ResourceRequest {
  id: string;
  organizationName: string;
  exactLocation: GeoLocation;
  tags: string[];
  resourceType: {
    category: string;
    specificType: string;
  };
  quantity: {
    requested: number;
    fulfilled: number;
  };
  currentSituation: string;
  specificNeedsDescription: string;
  populationAffected: {
    total: number;
    mostVulnerable: string[];
  };
  criticalChallenges: string[];
  urgency: "low" | "medium" | "high" | "critical";
  status: "pending" | "in-progress" | "fulfilled" | "rejected";
  requestedBy: string;
  timestamp: Timestamp;
}

export interface NationalDisasterCommittee {
  name: string;
  userId: string;
  username: string;
  password: string;
  numberOfPeopleWorking: number;
  incomingDisaster: IncomingDisaster | null;
  declaredDisasters: DeclaredDisaster[];
  overallNotifications: OverallNotification[];
  chats: {
    groups: Group[];
    resourceRequests: ResourceRequest[];
  };
  contactDetails: {
    phone: string;
    email: string;
    emergencyContactName: string;
    emergencyContactNumber: string;
  };
}

const sampleSituationReports: SituationReport[] = [
  {
    id: "report1",
    disasterId: "disaster1",
    disasterStatus: {
      weatherCondition: {
        primary: "rain",
        details: ["heavy rain", "thunderstorms"],
        severity: 3,
      },
      affectedAreas: [
        {
          name: "Area 1",
          coordinates: { latitude: 12.34, longitude: 56.78 },
          impactLevel: 2,
        },
      ],
      affectedPopulation: {
        total: 1000,
        demographics: {
          children: 200,
          adults: 600,
          elderly: 200,
        },
        vulnerableGroups: ["elderly", "children"],
      },
    },
    casualties: {
      types: [
        { category: "injured", count: 50 },
        { category: "deceased", count: 5 },
      ],
      firstAid: [
        {
          treatmentType: "basic",
          treatmentLocation: "local hospital",
          personnelInvolved: 10,
        },
      ],
      communication: {
        status: "limited",
        methods: ["radio", "satellite phone"],
      },
    },
    materialFlow: {
      foodMaterials: [
        {
          type: "canned food",
          quantity: 500,
          distributionMethod: "trucks",
        },
      ],
      airDropping: {
        active: true,
        frequency: 2,
        locations: [{ latitude: 12.34, longitude: 56.78 }],
      },
      transport: [
        {
          type: "trucks",
          capacity: 10,
          activeVehicles: 5,
        },
      ],
      medicalAid: [
        {
          type: "first aid kits",
          quantity: 100,
          destination: { latitude: 12.34, longitude: 56.78 },
        },
      ],
    },
    teamArrival: {
      centralTeams: [
        {
          name: "Team A",
          arrivalTime: Timestamp.now(),
          personnelCount: 20,
        },
      ],
      internationalTeams: [
        {
          country: "Country X",
          organizationName: "Org X",
          arrivalTime: Timestamp.now(),
          personnelCount: 15,
        },
      ],
      others: [
        {
          name: "Volunteer Group",
          type: "NGO",
          arrivalTime: Timestamp.now(),
        },
      ],
    },
    summary: {
      overview: "Heavy rain causing floods",
      criticalObservations: ["Roads blocked", "Power outage"],
      recommendedActions: ["Evacuate affected areas", "Provide medical aid"],
    },
  },
  // Add more sample objects as needed
];

export { sampleSituationReports };
