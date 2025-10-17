import { Calendar, Phone, Shield, User } from "lucide-react";
import type { Patient } from "../../types";

interface PatientInfoProps {
  patient: Patient;
}

const PatientInfo = ({ patient }: PatientInfoProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 relative overflow-y-auto ">
      {/* profile header */}
      <div className="flex flex-col items-center mb-6 sm:mb-8">
        <img
          src={patient.profile_picture || "https://via.placeholder.com/200"}
          alt={patient.name}
          className="w-[200px] h-[200px] rounded-full object-cover mb-6"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/200";
          }}
        />
        <h2 className="text-[#072635] font-extrabold text-2xl leading-[33px] text-center">
          {patient.name}
        </h2>
      </div>

      {/* patient details */}
      <div className="space-y-10">
        {/* date of birth */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#F6F6F6] flex items-center justify-center flex-shrink-0">
            <Calendar className="w-5 h-5 text-[#072635]" />
          </div>
          <div className="flex-1">
            <p className="text-[#072635] text-sm leading-[19px] mb-1">
              Date Of Birth
            </p>
            <p className="text-[#072635] font-bold text-sm leading-[19px]">
              {formatDate(patient.date_of_birth)}
            </p>
          </div>
        </div>

        {/* gender */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#F6F6F6] flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-[#072635]" />
          </div>
          <div className="flex-1">
            <p className="text-[#072635] text-sm leading-[19px] mb-1">Gender</p>
            <p className="text-[#072635] font-bold text-sm leading-[19px]">
              {patient.gender}
            </p>
          </div>
        </div>

        {/* contact info */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#F6F6F6] flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-[#072635]" />
          </div>
          <div className="flex-1">
            <p className="text-[#072635] text-sm leading-[19px] mb-1">
              Contact Info
            </p>
            <p className="text-[#072635] font-bold text-sm leading-[19px]">
              {patient.phone_number}
            </p>
          </div>
        </div>

        {/* emergency contacts */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#F6F6F6] flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-[#072635]" />
          </div>
          <div className="flex-1">
            <p className="text-[#072635] text-sm leading-[19px] mb-1">
              Emergency Contacts
            </p>
            <p className="text-[#072635] font-bold text-sm leading-[19px]">
              {patient.emergency_contact}
            </p>
          </div>
        </div>

        {/* insurance provider */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#F6F6F6] flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-[#072635]" />
          </div>
          <div className="flex-1">
            <p className="text-[#072635] text-sm leading-[19px] mb-1">
              Insurance Provider
            </p>
            <p className="text-[#072635] font-bold text-sm leading-[19px]">
              {patient.insurance_type}
            </p>
          </div>
        </div>
      </div>

      {/* show all information button */}
      <button
        type="button"
        className="w-full mt-10 bg-[#01F0D0] hover:bg-[#00D4B5] transition-colors text-[#072635] font-bold text-sm leading-[19px] py-3 px-6 rounded-full"
      >
        Show All Information
      </button>
    </div>
  );
};

export default PatientInfo;
