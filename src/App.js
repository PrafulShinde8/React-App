import Profile from "./Components/Profile";
import './App.css';
const profileDetailsList =[
  {
    imageUrl: "https://img.freepik.com/free-icon/man_318-233556.jpg",
    name: "John McDoe",
    role: "Sr. Software Engineer"
  },
  {
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/77/38/04/360_F_577380416_94uavP658eMEJve8JhMhsvG4bh7mqlDJ.jpg",
    name: "Stacey Michaels",
    role: "Sr. UX Engineer"
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg",
    name: "Michael Deeley",
    role: "Director of Operations"
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-vector/young-man-wearing-smart-glass-vector-illustration_107173-16887.jpg?w=360",
    name: "Rajan Krishnan",
    role: "Director of Sales (APAC)"
  }
];

const App = () => (
<div className="list-container">
<h1>Profile List</h1>
<Profile userDetails={profileDetailsList[0]}/>
<Profile userDetails={profileDetailsList[1]}/>
<Profile userDetails={profileDetailsList[2]}/>
<Profile userDetails={profileDetailsList[3]}/>
</div>
);

export default App;