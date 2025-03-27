import CardStats from "../components/CardStats";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-4 gap-4 my-6">
        <CardStats title="Total Sales" value="$10.54K" color="bg-yellow-500" />
        <CardStats title="Orders" value="1,056" color="bg-blue-500" />
        <CardStats title="Unique Visits" value="5,420" color="bg-green-500" />
        <CardStats title="Returning Users" value="1,650" color="bg-purple-500" />
      </div>
      {/* <OrdersChart />
      <div className="grid grid-cols-2 gap-4 mt-6">
        <RecentTransactions />
        <TopProducts />
      </div> */}
    </div>
  );
};

export default Dashboard;
