import TableComponent from "../../components/WaitingList/TableComponent";
import "./PersonalPage.scss";

function PersonalPage() {
  return (
    <div>
      <h1>Votre liste d'attente</h1>
      <div className="personal-page">
        <div className="table-component-container">
          <TableComponent />
        </div>
      </div>
    </div>
  );
}

export default PersonalPage;
