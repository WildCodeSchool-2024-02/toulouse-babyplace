import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProfilePro.scss";

function ProfilePro() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [editingField, setEditingField] = useState(null);
  const [newValue, setNewValue] = useState("");
  const token = localStorage.getItem("authToken");
  const { userId } = jwtDecode(token);
  const navigate = useNavigate();

  const modify = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="#000"
        d="m14.36 4.079l.927-.927a3.932 3.932 0 0 1 5.561 5.561l-.927.927m-5.56-5.561s.115 1.97 1.853 3.707C17.952 9.524 19.92 9.64 19.92 9.64m-5.56-5.561l-8.522 8.52c-.577.578-.866.867-1.114 1.185a6.556 6.556 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.094 3.281m17.6-10.162L11.4 18.16c-.577.577-.866.866-1.184 1.114a6.554 6.554 0 0 1-1.211.749c-.364.173-.751.302-1.526.56l-3.281 1.094m0 0l-.802.268a1.06 1.06 0 0 1-1.342-1.342l.268-.802m1.876 1.876l-1.876-1.876"
      />
    </svg>
  );

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/childcare-center/${userId}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [userId]);

  const updateUserInfo = async (field) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/childcare-center`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ id: userId, [field]: newValue }),
        }
      );
      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
        setEditingField(null);
      } else {
        console.error("Failed to update user info:", response.status);
      }
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  };

  useEffect(() => {
    if (editingField) {
      updateUserInfo(editingField);
    }
  }, [editingField, updateUserInfo]);

  const deleteUser = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/childcare-center`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ id: userId }),
        }
      );
      if (response.ok) {
        localStorage.removeItem("authToken");
        navigate("/");
      } else {
        console.error("Failed to delete user:", response.status);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEditClick = (field) => {
    const updatedValue = prompt(`Modifiez votre ${field}:`);
    if (updatedValue) {
      setNewValue(updatedValue);
      setEditingField(field);
      updateUserInfo(field);
    }
  };

  const getInitials = (name) => {
    const cleanName = name.replace(/[^a-zA-Z\s]/g, "");

    const words = cleanName.split(" ").filter((word) => word.length > 0);
    const initials = words.map((word) => word[0].toUpperCase());

    return initials.slice(0, 2).join("");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <div className="profile-card">
        <span className="avatar">{getInitials(user?.name)}</span>
        <div className="profile-name-firstname">
          <div className="profile-name">
            <p>{user?.firstname}</p>
            <button type="button" onClick={() => handleEditClick("firstname")}>
              {modify}
            </button>
          </div>
          <div className="profile-name">
            <p>{user?.name}</p>
            <button type="button" onClick={() => handleEditClick("name")}>
              {modify}
            </button>
          </div>
        </div>
      </div>
      <div className="profile-line">
        <p className="profile-text">
          Maximisez vos opportunités. <br />
          Un profil complet est essentiel pour accueillir les enfants !
        </p>
        <button type="button" onClick={deleteUser}>
          Supprimer mon compte
        </button>
      </div>
    </div>
  );
}

export default ProfilePro;
