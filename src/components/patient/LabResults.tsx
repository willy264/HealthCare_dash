import { Download } from "lucide-react";
import type { LabResult } from "../../types";

interface LabResultsProps {
  labResults: LabResult[];
}

const LabResults = ({ labResults }: LabResultsProps) => {
  return (
    <div className="bg-white rounded-2xl p-5">
      <h2 className="text-[#072635] font-extrabold text-2xl leading-[33px] mb-5">
        Lab Results
      </h2>

      <div className="space-y-0 h-[calc(100vh-380px)] overflow-y-auto custom-scrollbar">
        {labResults.map((result, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 hover:bg-[#F6F6F6] px-3 -mx-3 rounded-lg transition-colors cursor-pointer"
          >
            <span className="text-[#072635] text-sm leading-[19px]">
              {result.name}
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
