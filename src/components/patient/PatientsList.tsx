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
    <div className="bg-white rounded-2xl flex flex-col h-[400px] md:h-[500px] lg:h-[1100px] relative">
      {/* header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6 p-4 sm:p-5">
        <h2 className="text-[#072635] font-extrabold text-xl sm:text-2xl leading-[33px]">
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
      <div className="flex-1 overflow-y-auto space-y-1 pr-0.5 custom-scrollbar">
        {patients.map((patient, index) => (
          <button
            type="button"
            key={index}
            onClick={() => onSelectPatient(patient)}
            className={`w-full flex items-center justify-between p-4 transition-all ${
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
