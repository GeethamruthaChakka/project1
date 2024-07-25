import React from 'react';
import ProfileBox from './ProfileBox';

const profiles = [
  {
    id: 1,
    name: 'Geethamrutha',
    subtitle: '.2nd',
    description: 'This is a description for Geethamrutha.',
    connections: 20,
    profilePic: '/icon.png',
    connectionPic: '/icon.png',
  },
  {
    id: 2,
    name: 'Rama Tulasi',
    subtitle: '.3rd',
    description: 'This is a description for Rama Tulasi.',
    connections: 25,
    profilePic: '/icon.png',
    connectionPic: '/icon.png',
  },
  {
    id: 3,
    name: 'Afreen',
    subtitle: '.3rd',
    description: 'This is a description for Afreen.',
    connections: 35,
    profilePic: '/icon.png',
    connectionPic: '/icon.png',
  },
  {
    id: 4,
    name: 'Divya',
    subtitle: '.3rd',
    description: 'This is a description for Divya.',
    connections: 45,
    profilePic: '/icon.png',
    connectionPic: '/icon.png',
  },
  {
    id: 5,
    name: 'Pavithra',
    subtitle: '.3rd',
    description: 'This is a description for Pavithra.',
    connections: 55,
    profilePic: '/icon.png',
    connectionPic: '/icon.png',
  },
  {
    id: 6,
    name: 'Manasa',
    subtitle: '.3rd',
    description: 'This is a description for Manasa.',
    connections: 65,
    profilePic: '/icon.png',
    connectionPic: '/icon.png',
  },
  {
    id: 7,
    name: 'Meghana',
    subtitle: '.3rd',
    description: 'This is a description for Meghana.',
    connections: 75,
    profilePic: '/icon.png',
    connectionPic: '/icon.png',
  },
  {
    id: 8,
    name: 'Joe',
    subtitle: '.3rd',
    description: 'This is a description for Joe.',
    connections: 85,
    profilePic: '/icon.png',
    connectionPic: '/icon.png',
  },

];

function ProfileGrid() {
  return (
    <div className="profile-grid">
      {profiles.map(profile => (
        <ProfileBox key={profile.id} profile={profile} />
      ))}
    </div>
  );
}

export default ProfileGrid;