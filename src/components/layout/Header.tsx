import { useState } from "react";
import {
  Settings,
  MoreVertical,
  LayoutGrid,
  Users,
  Calendar,
  MessageSquare,
  Receipt,
  X,
  Menu,
} from "lucide-react";
import TestLogo from "../../assets/TestLogo.svg";
import DoctorImage from "../../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm rounded-2xl">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between lg:h-[72px]">
          {/* logo */}
          <div className="flex items-center">
            <div className="w-[211px] h-[48px] flex items-center">
              <img
                src={TestLogo}
                alt="Tech.Care Logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <nav className="hidden xl:flex items-center gap-10">
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

          <div className="flex gap-3">
            {/* profile section */}
            <div className="flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-3 pr-3 border-r border-[#EDEDED]">
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

            {/* mobile button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#072635]" />
              ) : (
                <Menu className="w-6 h-6 text-[#072635]" />
              )}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {isMobileMenuOpen && (
          <nav className="xl:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-2">
              <div className="flex lg:hidden items-center gap-3 p-4 mb-2 bg-white rounded-lg">
                <img
                  src={DoctorImage}
                  alt="Dr. Jose Simmons"
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div className="flex flex-col flex-1">
                  <span className="text-[#072635] font-bold text-sm">
                    Dr. Jose Simmons
                  </span>
                  <span className="text-[#707070] text-xs">
                    General Practitioner
                  </span>
                </div>
              </div>

              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-[#072635] font-bold text-sm hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LayoutGrid className="w-5 h-5" />
                Overview
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#01F0D0] text-[#072635] font-bold text-sm"
              >
                <Users className="w-5 h-5" />
                Patients
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-[#072635] font-bold text-sm hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Schedule
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-[#072635] font-bold text-sm hover:bg-gray-100 rounded-lg transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                Message
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-[#072635] font-bold text-sm hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Receipt className="w-5 h-5" />
                Transactions
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
