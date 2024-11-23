//-------ROUTER ----------
import { BrowserRouter, Route , Routes } from 'react-router-dom'
//-----------COMPONENTS--------------
import Header from '../components/Header'
import Footer from '../components/Footer'
//------------ PAGES ---------
import Home from '../Pages/Home'
import Authors from '../Pages/Authors'
import AuthorPost from '../Pages/AuthorPost'
import CategoryPost from '../Pages/CategoryPost'
import CreatePost from '../Pages/CreatePost'
import DashBoard from '../Pages/DashBoard'
import DeletePost from '../Pages/DeletePost'
import EditPost from '../Pages/EditPost'
import ErrorPage from '../Pages/ErrorPage'
import Login from '../Pages/Login'
import Logout from '../Pages/Logout'
import PostDtail from '../Pages/PostDtail'
import Register from '../Pages/Register'
import UserProfile from '../Pages/UserProfile'


function Router() {
  return (
    <>
    <BrowserRouter  >

       <Header/>
         <Routes> 
            <Route path="/" element={<Home/>} />
            <Route path="/authors" element={<Authors/>} />
            <Route path="/posts/user/:id" element={<AuthorPost/>} />
            <Route path="/posts/categories/:category" element={<CategoryPost/>} />
            <Route path="/create" element={<CreatePost/>} />
            <Route path="/myposts/:id" element={<DashBoard/>} />
            <Route path="/delete" element={<DeletePost/>} />
            <Route path="/posts/:id/edit" element={<EditPost/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/posts/:id" element={<PostDtail/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/profile/:id" element={<UserProfile/>} />
            <Route path="*" element={<ErrorPage/>} />
            
            
         </Routes>
       <Footer/>
    </BrowserRouter>
    </>
  )
}

export default Router