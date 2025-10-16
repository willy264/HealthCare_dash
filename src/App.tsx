import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import PatientInfo from "./components/patient/PatientInfo";
import BloodPressureChart from "./components/patient/BloodPressureChart";
import VitalSigns from "./components/patient/VitalSigns";
import type { PatientRecord } from "./types";
import { fetchPatientData } from "./services/api";
// import DiagnosticList from "./components/patient/DiagnosticList";
// import LabResults from "./components/patient/LabResults";
// import PatientsList from "./components/patient/PatientsList";

function App() {
  const [patientsData, setPatientsData] = useState<PatientRecord[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<PatientRecord | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPatientData = async () => {
      try {
        const allPatientsData = await fetchPatientData();

        if (!Array.isArray(allPatientsData)) {
          throw new Error("API response is not in the expected format");
        }

        setPatientsData(allPatientsData);

        const jessicaTaylor = allPatientsData.find(
          (p) => p.name === "Jessica Taylor"
        );
        setSelectedPatient(jessicaTaylor || allPatientsData[0] || null);
      } catch (err) {
        console.error("Error details:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load patient data"
        );
      } finally {
        setLoading(false);
      }
    };

    loadPatientData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F6F6F6]">
        <div className="text-[#072635] text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F6F6F6]">
        <div className="text-red-600 text-center">
          <p className="text-xl font-bold mb-2">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!selectedPatient) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F6F6F6]">
        <div className="text-[#072635]">No patient data available</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      <Header />
      <main className="mx-auto px-8 py-8">
        <div className="grid grid-cols-12 gap-8">

        </div>
      </main>
    </div>
  );
}

export default App;
