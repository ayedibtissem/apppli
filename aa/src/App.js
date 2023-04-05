
import './App.css';
import{createBrowserRouter,  RouterProvider}from"react-router-dom"
import Register from './pages/Register';
import Login from './pages/Login';

//import Navigation from './pages/Navigation';

import Navbar from './pages/Navbar';
import QuizList from './pages/QuizList';


function App() {

const router=createBrowserRouter([{
  path:"/",
  element:<div>
<Navbar></Navbar>
 
<img src="https://www.cyberriskaware.com/wp-content/uploads/2019/02/graphic@4x.png" alt="React Image"  width="40%" style={{marginLeft:"35%"}}
 />

   <div className="paragraph1">
      <p1>A cybersecurity awareness platform using quizzes can be a great way to educate people on how to stay safe online. The platform can offer quizzes with multiple-choice questions that cover various cybersecurity topics such as password management, phishing scams, social engineering, and malware.</p1>
      <p2>The quizzes can be designed to be interactive and engaging, with feedback provided after each question to reinforce key concepts. To make the platform more effective, the quizzes can be tailored to the specific needs of the users. </p2>
    </div>

    

















    

    </div>
},
{
  path:"/login",
  element:<Login></Login>
},
{
  path:"/register",
  element:<Register></Register>
},
{path:"/quiz",
  element:<QuizList></QuizList>
}




])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    
 
    </div>
  );
}

export default App;