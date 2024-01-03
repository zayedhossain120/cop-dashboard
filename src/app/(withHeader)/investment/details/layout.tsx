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
      <div className="w-full rounded-lg">
        <InvestorDetailsTopArrowbtn />
      </div>
      <div className="flex justify-center items-center gap-4 shadow-lg rounded-lg">
        <div>
          <ProjectInvestmentDetails />
        </div>
        <div>
          <div className="flex justify-center items-center flex-col">
            <ProjectInvestmentDetailsNav />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentDetailsLayout;
