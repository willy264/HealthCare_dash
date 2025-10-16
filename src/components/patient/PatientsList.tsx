import { Search, MoreHorizontal } from "lucide-react";
import type { PatientRecord } from "../../types";

interface PatientsListProps {
  patients: PatientRecord[];
  selectedPatient: PatientRecord;
  onSelectPatient: (patient: PatientRecord) => void;
}

const PatientsList = ({
  patients,
  selectedPatient,
  onSelectPatient,
}: PatientsListProps) => {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col h-[calc(100vh-180px)] md:h-[calc(100vh-140px)]">
      {/* header */}
      <div className="flex items-center justify-between mb-6 sticky top-0 bg-white z-10">
        <h2 className="text-[#072635] font-extrabold text-2xl leading-[33px]">
          Patients
        </h2>
        <button
          title="Search patients"
          type="button"
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Search className="w-[18px] h-[18px] text-[#072635]" />
        </button>
      </div>

      {/* patients list */}
      <div className="flex-1 overflow-y-auto space-y-1 -mr-2 pr-2 custom-scrollbar">
        {patients.map((patient, index) => (
          <button
            type="button"
            key={index}
            onClick={() => onSelectPatient(patient)}
            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
              selectedPatient.name === patient.name
                ? "bg-[#D8FCF7]"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src={
                  patient.profile_picture || "https://via.placeholder.com/48"
                }
                alt={patient.name}
                className="w-12 h-12 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/48";
                }}
              />
              <div className="text-left">
                <h3 className="text-[#072635] font-bold text-sm leading-[19px]">
                  {patient.name}
                </h3>
                <p className="text-[#707070] text-sm leading-[19px]">
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>
            <button
              title="More options"
              type="button"
              className="p-1 hover:bg-white rounded transition-colors"
            >
              <MoreHorizontal className="w-[18px] h-[18px] text-[#072635]" />
            </button>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PatientsList;
