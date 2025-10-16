import {
  Settings,
  MoreVertical,
  LayoutGrid,
  Users,
  Calendar,
  MessageSquare,
  Receipt,
} from "lucide-react";
import TestLogo from "../../assets/TestLogo.svg";
import DoctorImage from "../../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-[211px] h-[48px] flex items-center">
              <img
                src={TestLogo}
                alt="Tech.Care Logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-10">
            <a
              href="#"
              className="flex items-center gap-2 text-[#072635] font-bold text-sm hover:text-[#01F0D0] transition-colors"
            >
              <LayoutGrid className="w-5 h-5" />
              Overview
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#01F0D0] text-[#072635] font-bold text-sm"
            >
              <Users className="w-5 h-5" />
              Patients
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[#072635] font-bold text-sm hover:text-[#01F0D0] transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Schedule
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[#072635] font-bold text-sm hover:text-[#01F0D0] transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Message
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[#072635] font-bold text-sm hover:text-[#01F0D0] transition-colors"
            >
              <Receipt className="w-5 h-5" />
              Transactions
            </a>
          </nav>

          {/* profile */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 pr-3 border-r border-[#EDEDED]">
              <img
                src={DoctorImage}
                alt="Dr. Jose Simmons"
                className="w-11 h-11 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-[#072635] font-bold text-sm">
                  Dr. Jose Simmons
                </span>
                <span className="text-[#707070] text-xs">
                  General Practitioner
                </span>
              </div>
            </div>
            <button
              title="Settings"
              type="button"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5 text-[#072635]" />
            </button>
            <button
              title="More options"
              type="button"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <MoreVertical className="w-5 h-5 text-[#072635]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
