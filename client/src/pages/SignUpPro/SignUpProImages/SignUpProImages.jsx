import { useSignUpPro } from "../../../context/SignUpPro";
import "../SignUpPro.scss";

function SignUpProImages() {
  const { avatar, setAvatar } = useSignUpPro();

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };
  return (
    <div className="form-flex">
      <div className="sign-up-pro-input">
        <label htmlFor="avatar">Ajoutez votre photo de profil</label>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          value={avatar}
          onChange={handleAvatarChange}
        />
      </div>
    </div>
  );
}

export default SignUpProImages;
