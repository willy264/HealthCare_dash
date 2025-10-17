import { ChevronDown } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { DiagnosisHistory } from "../../types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BloodPressureChart = ({
  diagnosisHistory,
}: {
  diagnosisHistory: DiagnosisHistory[];
}) => {
  if (!diagnosisHistory || diagnosisHistory.length === 0) {
    return (
      <div className="">
        <h2 className="text-[#072635] font-extrabold text-2xl mb-10">
          Diagnosis History
        </h2>
        <div
          className="bg-[#F4F0FE] rounded-xl p-4 flex items-center justify-center"
          style={{ height: "300px" }}
        >
          <p className="text-[#072635]">No diagnosis history available</p>
        </div>
      </div>
    );
  }

  const last6Months = diagnosisHistory.slice(0, 6).reverse();
  const labels = last6Months.map(
    (item) => `${item.month.slice(0, 3)}, ${item.year}`
  );
  const systolicData = last6Months.map(
    (item) => item.blood_pressure.systolic.value
  );
  const diastolicData = last6Months.map(
    (item) => item.blood_pressure.diastolic.value
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#C26EB4",
        backgroundColor: "#C26EB4",
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#7E6CAB",
        backgroundColor: "#7E6CAB",
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#072635",
        bodyColor: "#072635",
        borderColor: "#E0E0E0",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#072635", font: { size: 12 } },
        border: { display: false },
      },
      y: {
        min: 60,
        max: 180,
        ticks: { stepSize: 20, color: "#072635", font: { size: 12 } },
        grid: { color: "#E0E0E0" },
        border: { display: false },
      },
    },
  };

  const latestReading = diagnosisHistory[0];

  return (
    <div className="">
      <h2 className="text-[#072635] font-extrabold text-2xl mb-10">
        Diagnosis History
      </h2>

      <div className="bg-[#F4F0FE] rounded-xl p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* chart */}
          <div className="lg:col-span-8">
            {/* header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#072635] font-bold text-lg">Blood Pressure</h3>
              <div className="flex items-center gap-2">
                <span className="text-[#072635] text-sm">Last 6 months</span>
                <ChevronDown className="w-4 h-4 text-[#072635]" />
              </div>
            </div>
            <div style={{ height: "240px" }}>
              <Line data={chartData} options={options} />
            </div>
          </div>

          {/* readings */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-5 justify-start">
            {/* systolic */}
            <div className="lg:border-b lg:border-[#CBC8D4] pb-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-[#E66FD2]"></div>
                <span className="text-[#072635] font-bold text-sm">
                  Systolic
                </span>
              </div>
              <div className="text-[#072635] font-bold text-[22px] mb-1">
                {latestReading.blood_pressure.systolic.value}
              </div>
              <div className="flex items-center gap-2">
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none">
                  <path d="M0 5L5 0L10 5H0Z" fill="#072635" />
                </svg>
                <span className="text-[#072635] text-sm">
                  {latestReading.blood_pressure.systolic.levels}
                </span>
              </div>
            </div>

            {/* diastolic */}
            <div className="flex-1 pl-5 lg:pl-0 border-l lg:border-l-0 border-[#CBC8D4]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-[#8C6FE6]"></div>
                <span className="text-[#072635] font-bold text-sm">
                  Diastolic
                </span>
              </div>
              <div className="text-[#072635] font-bold text-[22px] mb-1">
                {latestReading.blood_pressure.diastolic.value}
              </div>
              <div className="flex items-center gap-2">
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none">
                  <path d="M0 0L5 5L10 0H0Z" fill="#072635" />
                </svg>
                <span className="text-[#072635] text-sm">
                  {latestReading.blood_pressure.diastolic.levels}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
