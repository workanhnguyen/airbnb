import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

import { PlacesPage, ProfilePage } from "../pages";
import { AccountNavigation } from "../components";

const AccountPage = () => {
  const { user, setUser, ready } = useContext(UserContext);
  let { subpage, action, id } = useParams();

  if (subpage === undefined) { subpage = "profile"; }

  if (!ready) return <div className="w-full text-center mt-4">Loading...</div>;
  else if (ready && !user) navigate("/login");

  return (
    <div>
      <AccountNavigation subpage={subpage} />
      {subpage === "profile" && <ProfilePage user={user} setUser={setUser} />}
      {subpage === "places" && <PlacesPage action={action}/>}
    </div>
  );
};

export default AccountPage;
