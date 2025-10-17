import type { DiagnosisListItem } from "../../types";

interface DiagnosticListProps {
  diagnosticList: DiagnosisListItem[];
}

const DiagnosticList = ({ diagnosticList }: DiagnosticListProps) => {
  return (
    <div className="bg-white rounded-2xl p-5 h-[380px] relative flex flex-col">
      <h2 className="text-[#072635] font-extrabold text-2xl leading-[33px] mb-10">
        Diagnostic List
      </h2>

      <div className="rounded-xl custom-scrollbar overflow-y-auto">
        <table className="w-full">
          <thead className="bg-[#F6F6F6] sticky top-0">
            <tr>
              <th className="text-left py-3 px-4 text-[#072635] font-bold text-sm leading-[19px]">
                Problem/Diagnosis
              </th>
              <th className="text-left py-3 px-4 text-[#072635] font-bold text-sm leading-[19px]">
                Description
              </th>
              <th className="text-left py-3 px-4 text-[#072635] font-bold text-sm leading-[19px]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {diagnosticList.map((item, index) => (
              <tr
                key={index}
                className="border-b border-[#F6F6F6] last:border-b-0"
              >
                <td className="py-4 px-4 text-[#072635] text-sm leading-[19px]">
                  {item.name}
                </td>
                <td className="py-4 px-4 text-[#072635] text-sm leading-[19px]">
                  {item.description}
                </td>
                <td className="py-4 px-4 text-[#072635] text-sm leading-[19px]">
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
