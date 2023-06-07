import { Navigate, Route, Routes } from "react-router-dom"
import App from "../App"


export const Firstpage = () => {
  return (
   <>
   <Routes>
   <Route path="/" element={ <App/> } />

   </Routes>
   </>
  )
}
