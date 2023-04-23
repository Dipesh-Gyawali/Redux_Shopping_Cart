import {Routes, Route} from "react-router-dom";
import {Home, Cart, PageNotFound } from "../pages";


export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home title="Home"/>} />
            <Route path="/cart" element={<Cart title="Cart"/>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  )
}
