import { useDataContext } from "../contexts/DataContext";

const Overview = () => {

  const { data } = useDataContext();

  const totalVisits = data.reduce((acc, curr) => acc + curr.visits, 0);
  const totalLeads = data.reduce((acc, curr) => acc + curr.leads, 0);
  const totalConversions = data.reduce((acc, curr) => acc + curr.conversions, 0);
  const totals = [totalVisits, totalLeads, totalConversions];

  const OverviewItem = ({ title, value }: { title: string, value: number }) => {

    const itemPercentage = value / totals[0] * 100;
    const itemPercentageFormatted = `${Math.round(itemPercentage * 10) / 10}%`;
    return (
      <div className="overviewItem">
        <div className="overviewItemTitle">{title}</div>
        <div className="overviewItemValue">{Intl.NumberFormat().format(value)}</div>
        <div className="overviewItemPercentage">{itemPercentageFormatted}</div>
      </div>
    );
  };

  return (
    <div className="overview">
      {totals.map((total, index) => (
        <OverviewItem
          key={index}
          title={index === 0 ? "Visits" : index === 1 ? "Leads" : "Conversions"}
          value={total}
        />
      ))}

    </div>
  );
}

export default Overview;