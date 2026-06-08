export interface Category {
  id: string;
  badge: string;
  title: string;
  subTitle: string;
  image: string;
  description: string;
  standardGSM: string;
  standardIngredients: string;
  availableSizes: string[];
  commonSheetCounts: number[];
}

export interface Certification {
  name: string;
  authority: string;
  scope: string;
  year: string;
  clinicalNote: string;
}

export interface Equipment {
  id: string;
  name: string;
  tag: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
}

export interface OEMConfiguration {
  category: string;
  material: string;
  weightGsm: number;
  formulation: string;
  sheetCount: number;
  packaging: string;
  scented: boolean;
}

export interface SubmissionResponse {
  ticketId: string;
  timestamp: string;
  estimatedLeadTime: string;
  summary: OEMConfiguration & {
    name: string;
    company: string;
    email: string;
  };
}
