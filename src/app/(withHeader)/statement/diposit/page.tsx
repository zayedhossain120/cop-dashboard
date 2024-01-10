import StatementTotalCard from "@/components/UI/smallCard/StatementTotalCard";
import DipositTable from "@/components/forStatement/DipositTable";

const Diposit = () => {
  return (
    <div className="h-[90vh] ">
      <div className="overflow-auto h-[500px] px-4">
        <DipositTable />
      </div>
      <div className="flex justify-end mt-10 mr-10">
        <StatementTotalCard />
      </div>
    </div>
  );
};

export default Diposit;
