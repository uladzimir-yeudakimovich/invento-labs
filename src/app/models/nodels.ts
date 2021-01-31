export interface InformationResponse {
  education: Info[];
  experience: Info[];
  technology: Stars[];
  general: Info;
}

export interface Info {
  en: string;
  ru: string;
  name?: string;
}

export interface Stars {
  level: number[];
  technology: string;
}