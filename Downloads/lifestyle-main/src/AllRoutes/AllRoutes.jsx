import { Route, Routes } from "react-router-dom"
import { Cart } from "../components/Card/Cart"
import { Category } from "../components/Category/Category"
import { Checkout } from "../components/Checkout/Checkout"
import { Home } from "../components/Home"
import { Login } from "../components/Login/Login"
import { Product } from "../components/productshow/Product"
import { SignUp } from "../components/Signup/Sign"



export const AllRoutes = ()=>{


    return(
        <Routes>
          <Route path="/" element = {<Home></Home>}/>
          <Route path="/login" element = {<Login></Login>}/>
          <Route path="/signup" element = {<SignUp></SignUp>}/>
          <Route path="/category" element = {<Category></Category>}/>  
          <Route path="/category/:id" element = {<Product/>}/> 
           <Route path="/cart/:id" element = {<Cart></Cart>}/> 
          <Route path="/checkout" element = {<Checkout></Checkout>}/>  

        </Routes>
    )
}