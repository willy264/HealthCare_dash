import axios from 'axios';
import type { PatientData } from '../types';

let username = 'frontend';
let password = 'skillstest';
const API_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev/';

// basic auth token
const createBasicAuthToken = (username: string, password: string) => {
  const auth = btoa(`${username}:${password}`);
  return `Basic ${auth}`;
};

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': createBasicAuthToken(username, password)
  }
});

export const fetchPatientData = async (): Promise<PatientData> => {
  try {
    const response = await api.get('');
    if (!response.data) {
      throw new Error('No data received from the API');
    }
    
    const allPatients = response.data;
    // const jessicaData = allPatients.find((patient: any) => patient.name === 'Jessica Taylor');
    
    // if (!jessicaData) {
    //   throw new Error('Jessica Taylor\'s data not found');
    // }

    return allPatients;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('API Error:', error.response?.data || error.message);
      throw new Error(`API Error: ${error.response?.status || ''} ${error.message}`);
    }
    console.error('Error fetching patient data:', error);
    throw error;
  }
};

export default api;