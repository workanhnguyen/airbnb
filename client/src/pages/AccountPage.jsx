import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

import { PlacesPage, ProfilePage, BookingsPage } from "../pages";
import { AccountNavigation } from "../components";

const AccountPage = () => {
  const { user, setUser, ready } = useContext(UserContext);
  let { subpage, action } = useParams();

  if (subpage === undefined) { subpage = "profile"; }

  if (!ready) return <div className="w-full text-center mt-4">Loading...</div>;
  else if (ready && !user) navigate("/login");

  return (
    <div>
      <AccountNavigation subpage={subpage} />
      {subpage === "profile" && <ProfilePage user={user} setUser={setUser} />}
      {subpage === "places" && <PlacesPage action={action}/>}
      {subpage === "bookings" && <BookingsPage />}
    </div>
  );
};

export default AccountPage;
