import { Download } from "lucide-react";
import type { PatientRecord } from "../../types";

interface LabResultsProps {
  labResults: PatientRecord["lab_results"];
}

const LabResults = ({ labResults }: LabResultsProps) => {
  return (
    <div className="bg-white rounded-2xl h-[250px] sm:h-[290px] relative flex flex-col">
      <h2 className="text-[#072635] font-extrabold text-xl sm:text-2xl leading-[33px] p-4 sm:p-5 pb-0">
        Lab Results
      </h2>

      <div className="space-y-0 overflow-y-auto overflow-x-hidden custom-scrollbar p-4">
        {labResults.map((result, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 hover:bg-[#F6F6F6] px-3 -mx-3 transition-colors cursor-pointer text-black"
          >
            <span className="text-[#072635] text-sm leading-[19px]">
              {result}
            </span>
            <button
              type="button"
              title="Download Lab Result"
              className="text-[#072635] hover:text-[#01F0D0] transition-colors"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;
