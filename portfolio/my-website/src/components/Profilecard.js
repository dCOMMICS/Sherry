import React from 'react';

function ProfileCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-64 object-cover object-center" src="profile-image.jpg" alt="Profile" />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">Your Name</h2>
        <p className="text-gray-600">Software Engineer and Game Designer</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
}

export default ProfileCard;
