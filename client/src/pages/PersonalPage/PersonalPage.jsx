import Calendar from "../../components/Calendar/Calendar";
import TableComponent from "../../components/WaitingList/TableComponent";

function PersonalPage() {
  return (
    <div>
      <TableComponent />
      <div className="profile">
        <p>
          Samantha Doe
          <Calendar />
        </p>

      </div>
    </div>
  );
}

export default PersonalPage;
