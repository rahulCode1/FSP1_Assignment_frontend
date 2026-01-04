import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "../loading/LoadingSpinner";

const RootLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {/* Sidebar - Fixed position on medium+ screens */}
      <aside
        className="d-none d-md-block position-fixed top-0 start-0 vh-100"
        style={{ width: "200px", zIndex: 1000 }}
      >
        <Header />
      </aside>

      {/* Mobile Header - Fixed position on small screens */}
      <div className="d-md-none">
        <Header />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />

      {isLoading && <LoadingSpinner size={30} />}

      {/* Main content with responsive margins */}
      <main
        className="px-3 px-md-4"
        style={{
          marginLeft: window.innerWidth >= 768 ? "220px" : "0",
          marginTop: window.innerWidth < 768 ? "70px" : "0",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
