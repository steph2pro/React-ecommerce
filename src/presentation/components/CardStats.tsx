interface CardStatsProps {
    title: string;
    value: string;
    color: string;
  }
  
  const CardStats: React.FC<CardStatsProps> = ({ title, value, color }) => {
    return (
      <div className={`p-4 text-white rounded-md ${color}`}>
        <h3 className="text-lg">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    );
  };
  
  export default CardStats;
  