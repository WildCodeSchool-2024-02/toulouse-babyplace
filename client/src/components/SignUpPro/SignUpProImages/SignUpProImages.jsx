import { useSignUpPro } from "../../../context/SignUpPro";
import "../../../pages/SignUpPro/SignUpPro.scss";

function SignUpProImages() {
  const { avatar, setAvatar } = useSignUpPro();

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };
  return (
    <div className="form-flex">
      <h4>Personnalisez votre profil :</h4>
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
