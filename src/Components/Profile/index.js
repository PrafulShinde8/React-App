import "./index.css";

const Profile = (props) => {
  const {userDetails}=props;
  console.log(userDetails);
  return (
    <div className="profile-card-container">
    <img className="profile-pic" src={userDetails.imageUrl} 
    alt="profile-pic" 
    />
    
    <div>
        <h1 className="profile-name">{userDetails.name}</h1>
        <p className="profile-role">{userDetails.role}</p>
    </div>
    </div>
  );
};
export default Profile;