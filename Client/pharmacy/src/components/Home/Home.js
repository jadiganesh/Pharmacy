import Dashboard from "../Dashboard/Dashboard"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import './Home.css'
import { useContext } from "react"
import Context from "../../context/Context"
import { Spin } from "antd"

const Home = () => {

    const {loading,setLoading,success,error,contextHolder}=useContext(Context);



    return (
        <>
        {contextHolder}
        <Spin tip="Loading...." size='large' spinning={loading}>
        <div className="home-container">
            <div className="home-header-sidebar"><Header /></div>

            <div className="header-down">
                <div className="sidebar-container">
                    <Sidebar />
                </div>
                <div className="main-content">

                   <Dashboard/>
                </div>
            </div>

        </div>
        </Spin>
        </>
    )
}
export default Home