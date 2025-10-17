import { useEffect, useState } from "react";
import "./App.css";
import type { PatientRecord } from "./types";
import { fetchPatientData } from "./services/api";
import Header from "./components/layout/Header";
import PatientInfo from "./components/patient/PatientInfo";
import BloodPressureChart from "./components/patient/BloodPressureChart";
import VitalSigns from "./components/patient/VitalSigns";
import DiagnosticList from "./components/patient/DiagnosticList";
import LabResults from "./components/patient/LabResults";
import PatientsList from "./components/patient/PatientsList";

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
        console.log(patientsData);
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

  return (
    <div className="bg-[#F6F6F6] relative overflow-hidden">
      <div className="px-2 sm:px-3 lg:px-4 xl:px-8 py-2 sm:py-4">
        <Header />
        <main className="mx-auto mt-3 sm:mt-6 relative">
          {loading && (
            <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-[#072635] text-lg">Loading...</div>
              </div>
            </div>
          )}
          {error && (
            <div className="mb-3 sm:mb-4 md:mb-6 bg-red-50 border border-red-200 rounded-xl p-3 sm:p-4">
              <p className="text-red-600 text-sm">{error}</p>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-2 text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Try Again
              </button>
            </div>
          )}
          <div className="grid grid-cols-12 gap-4 xl:gap-6">
            <div className="col-span-12 lg:col-span-3 order-1">
              <PatientsList
                patients={patientsData}
                selectedPatient={
                  selectedPatient || patientsData[0] || ({} as PatientRecord)
                }
                onSelectPatient={setSelectedPatient}
              />
            </div>

            <div className="col-span-12 lg:col-span-3 space-y-6 order-2 lg:order-3">
              <PatientInfo
                patient={{
                  name: selectedPatient?.name || "No Patient Selected",
                  profile_picture: selectedPatient?.profile_picture || "",
                  age: selectedPatient?.age || 0,
                  gender: selectedPatient?.gender || "",
                  date_of_birth: selectedPatient?.date_of_birth || "",
                  phone_number: selectedPatient?.phone_number || "",
                  emergency_contact: selectedPatient?.emergency_contact || "",
                  insurance_type: selectedPatient?.insurance_type || "",
                }}
              />
              <LabResults labResults={selectedPatient?.lab_results || []} />
            </div>

            <div className="col-span-12 lg:col-span-6 space-y-6 order-3 lg:order-2">
              <div className="bg-white rounded-2xl p-6">
                <BloodPressureChart
                  diagnosisHistory={selectedPatient?.diagnosis_history || []}
                />
                <div className="mt-8">
                  <VitalSigns
                    latestVitals={
                      selectedPatient?.diagnosis_history?.[0] || {
                        respiratory_rate: { value: 0, levels: "Normal" },
                        temperature: { value: 0, levels: "Normal" },
                        heart_rate: { value: 0, levels: "Normal" },
                      }
                    }
                  />
                </div>
              </div>
              <DiagnosticList
                diagnosticList={selectedPatient?.diagnostic_list || []}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
