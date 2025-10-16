import type { PatientRecord } from '../types';

const API_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev/';

// Properly encode credentials for Basic Auth
const username = 'coalition';
const password = 'skills-test';
const credentials = btoa(`${username}:${password}`);

export const fetchPatientData = async (): Promise<PatientRecord[]> => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${credentials}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching patient data:', error);
    throw error;
  }
};