import ProjectInvestmentDetails from "@/components/UI/ProjectInvestmentDetails";
import ProjectInvestmentDetailsNav from "@/components/UI/ProjectInvestmentDetailsNav";
import InvestorDetailsTopArrowbtn from "@/components/UI/btn/InvestorDetailsTopArrowbtn";

const InvestmentDetailsLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="flex justify-between items-center flex-col">
      <div className="w-full rounded-lg pb-4">
        <InvestorDetailsTopArrowbtn />
      </div>
      <div className="flex justify-start  gap-4   w-full">
        <div>
          <ProjectInvestmentDetails />
        </div>
        <div className=" w-full flex  flex-col gap-2">
          <div className="">
            <ProjectInvestmentDetailsNav />
          </div>
          <div className="w-full shadow-lg h-[100vh]">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentDetailsLayout;
