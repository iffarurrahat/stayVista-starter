import useRole from "../../../hooks/useRole";
import HostStatistics from "../Host/HostStatistics";
import GuestStatistics from "../Guest/GuestStatistics";
import AdminStatistics from "../Admin/AdminStatistics";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const Statistics = () => {
  const [role, isLoading] = useRole();

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      {role === "admin" && <AdminStatistics />}
      {role === "host" && <HostStatistics />}
      {role === "guest" && <GuestStatistics />}
    </>
  );
};

export default Statistics;
