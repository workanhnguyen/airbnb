import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = ({ user, setUser }) => {
  const navigate = useNavigate();

  const logout = async () => {
    await axios.post("/logout");
    setUser(null);
    navigate("/", { replace: true });
  };
  
  return (
    <div className="text-center max-w-lg mx-auto">
      Logged in as {user?.name} ({user?.email}) <br />
      <button onClick={logout} className="primary max-w-sm mt-2">
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
