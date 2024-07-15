import ChildCareCenterProfile from "../../components/ProfileCenter/ChildCareCenterProfile";
import "./ChildCareCenterPage.scss";
import TableComponent from "../../components/WaitingList/TableComponent";

function ChildCareCenterPage() {
  return (
    <div className="child-care-center-page">
      <ChildCareCenterProfile />
      <TableComponent />
    </div>
  );
}

export default ChildCareCenterPage;
