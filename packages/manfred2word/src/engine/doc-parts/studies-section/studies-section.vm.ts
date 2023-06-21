export interface StudiesSectionVm {
  studyType: string;
  name: string;
  startDate: string;
  finishDate: string;
  description: string;
  institution: Institution;
}

export interface Institution {
  name: string;
  description: string;
  location: Location;
}

export interface Location {
  country: string;
  region: string;
  notes: string;
}

export interface CountryType {
  iso: string;
  name: string;
}

export interface StudyTypeWithTranslation {
  key: string;
  value: string;
}
