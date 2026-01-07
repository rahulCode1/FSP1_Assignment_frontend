import { Outlet } from "react-router-dom"
import SettingHeader from "./SettingHeader"

const SettingLayout = ()=>{

    return <>
    <SettingHeader/>
    <Outlet/>
    </>
}

export default SettingLayout