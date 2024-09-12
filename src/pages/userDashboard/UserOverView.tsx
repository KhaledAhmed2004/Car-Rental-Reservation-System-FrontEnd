import React from "react";

const UserOverView = () => {
  return (
    <div>
      <div className="bg-gray-200 m-4 rounded-lg flex items-center justify-center text-center">
        <div>
          <div className="h-28 w-28 rounded-full bg-blue-300 flex items-center justify-center mx-auto"></div>
          <h2>Name: John Doe (editable)</h2>
          <h2>Email: john@example.com (editable)</h2>
          <h2> Phone Number: 123-456-7890 (editable)</h2>
          <h2>Address: 123 Main Street, City, Country (editable)</h2>
          <button className="bg-gray-500">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default UserOverView;
