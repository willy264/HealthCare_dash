export interface Patient {
  name: string;
  gender: string;
  age: number;
  profilePicture: string;
  dateOfBirth: string;
  phoneNumber: string;
  emergencyContact: string;
  insuranceProvider: string;
}

export interface BloodPressureData {
  date: string;
  systolic: number;
  diastolic: number;
}

export interface VitalSignsHistory {
  respiratoryRate: number;
  temperature: number;
  heartRate: number;
}

export interface DiagnosisList {
  problem: string;
  description: string;
  status: string;
}

export interface LabResult {
  type: string;
  date: string;
  downloadUrl: string;
}

export interface PatientData {
  patient: Patient;
  bloodPressure: BloodPressureData[];
  vitalSigns: VitalSignsHistory[];
  diagnoses: DiagnosisList[];
  labResults: LabResult[];
}