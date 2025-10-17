import type { DiagnosisHistoryItem as VitalSign } from "../../types";
import RespiratoryIcon from "../../assets/respiratory rate.svg";
import TemperatureIcon from "../../assets/temperature.svg";
import HeartRateIcon from "../../assets/HeartBPM.svg";

interface VitalSignsProps {
  latestVitals: VitalSign;
}

const VitalSigns = ({ latestVitals }: VitalSignsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* respiratory rate */}
      <div className="bg-[#E0F3FA] rounded-xl p-3 sm:p-4">
        <div className="mb-3">
          <div className="rounded-full flex items-center justify-start">
            <img
              src={RespiratoryIcon}
              alt="Respiratory Rate"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <h3 className="text-[#072635] text-sm mb-2">Respiratory Rate</h3>
          <p className="text-[#072635] font-bold text-[32px] leading-none mb-2">
            {latestVitals.respiratory_rate.value} bpm
          </p>
          <div className="text-[#072635] text-xs">
            {latestVitals.respiratory_rate.levels}
          </div>
        </div>
      </div>

      {/* temperature */}
      <div className="bg-[#FFE6E9] rounded-xl p-4">
        <div className="mb-3">
          <div className="rounded-full bg-[#FFE6F1] flex items-center justify-start">
            <img
              src={TemperatureIcon}
              alt="Temperature"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <h3 className="text-[#072635] text-sm mb-2">Temperature</h3>
          <p className="text-[#072635] font-bold text-[32px] leading-none mb-2">
            {latestVitals.temperature.value}°F
          </p>
          <div className="text-[#072635] text-xs">
            {latestVitals.temperature.levels}
          </div>
        </div>
      </div>

      {/* heart rate */}
      <div className="bg-[#FFE6F1] rounded-xl p-4">
        <div className="mb-3">
          <div className="rounded-full bg-[#FFE6E9] flex items-center justify-start">
            <img
              src={HeartRateIcon}
              alt="Heart Rate"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <h3 className="text-[#072635] text-sm mb-2">Heart Rate</h3>
          <p className="text-[#072635] font-bold text-[32px] leading-none mb-2">
            {latestVitals.heart_rate.value} bpm
          </p>
          <div className="flex items-center gap-1.5">
            <svg width="8" height="4" viewBox="0 0 10 5" fill="none">
              <path d="M0 0L5 5L10 0H0Z" fill="#072635" />
            </svg>
            <span className="text-[#072635] text-xs">
              {latestVitals.heart_rate.levels}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VitalSigns;
