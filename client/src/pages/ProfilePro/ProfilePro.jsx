import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import "./ProfilePro.scss";

function ProfilePro() {
  const [user, setUser] = useState();

  const token = localStorage.getItem("authToken");

  const { userId } = jwtDecode(token);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/childcare-center/${userId}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [userId]);

  return (
    <div className="profile">
      <p>{user?.name}</p>
    </div>
  );
}

export default ProfilePro;
