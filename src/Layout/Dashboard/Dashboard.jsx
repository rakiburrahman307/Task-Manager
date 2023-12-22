import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaHome, } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { RiPlayList2Fill } from "react-icons/ri";
import { useEffect } from "react";
import useAuth from "../../Hook/useAuth";
import { ToastContainer } from "react-toastify";


const Dashboard = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        if (user) {
            navigate('/dashboard/add-task');
        } else {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <div className="flex">
            <ToastContainer />
            {/* dashboard side bar */}
            <div className="w-32 md:w-64 min-h-screen bg-base-200">
                <ul onDrop='' data-aos="fade-up" className="menu rounded-box p-0 md:p-5">
                    {user && (
                        <>
                            <li data-aos="fade-up">
                                <Link to="/dashboard/add-task" className="flex flex-col md:flex-row items-center text-center">
                                    <MdAddTask />
                                    Add Task
                                </Link>
                            </li>
                            <li data-aos="fade-up">
                                <Link to="/dashboard/to-do-list" className="flex flex-col md:flex-row items-center text-center">
                                    <LuClipboardList />
                                    To Do List
                                </Link>
                            </li>
                            <li data-aos="fade-up" draggable='true'>
                                <Link to="/dashboard/ongoing-list" className="flex flex-col md:flex-row items-center text-center">
                                    <RiPlayList2Fill />
                                    Ongoing List
                                </Link>
                            </li>
                           

                        </>
                    )

                    }

                </ul>
                <div className="divider divider-info">Or</div>
                <ul className="menu rounded-box p-0 md:p-5">
                    <li data-aos="fade-up">
                        <Link to='/' className="flex flex-col md:flex-row items-center text-center">
                            <FaHome />
                            Back To Home
                        </Link>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;