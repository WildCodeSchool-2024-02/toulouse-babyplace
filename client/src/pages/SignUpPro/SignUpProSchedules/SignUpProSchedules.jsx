import Input from "../../../components/Input/Input";

function SignUpProSchedules() {
  return (
    <div>
      <h4>Quels sont vos horaires d’ouverture</h4>
      <Input title="De : " type="time" />
      <Input title="A : " type="time" />
    </div>
  );
}

export default SignUpProSchedules;
