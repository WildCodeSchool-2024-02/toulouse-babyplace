import "./SignUpProDescription.scss";

function SignUpProDescription() {
  return (
    <div id="sign-up-pro-description">
      <div className="sign-up-pro-input">
        <p>Présentez vous auprès des parents</p>
        <textarea
          name="Description"
          id="description"
          rows="5"
          cols="40"
          maxLength="500"
          placeholder="..."
        />
      </div>
    </div>
  );
}

export default SignUpProDescription;
