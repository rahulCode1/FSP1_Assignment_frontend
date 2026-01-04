import { useState } from "react";
import { useWorkContext } from "../context/workTrackContext";
import SubmitLoading from "../components/loading/SubmitLoading";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const initialData = {
    name: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData);

  const { loading, signup } = useWorkContext();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await signup(formData);
    console.log(response);
    if (response.success) {
      setFormData(initialData);
      navigate("/login");
    }
  };

  return (
    <main className="container-fluid d-flex align-items-center justify-content-center min-vh-100 py-4">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
        <div className="card shadow-lg border-0">
          <div className="card-body p-4 p-md-5">
            {/* Header */}
            <div className="text-center mb-4">
              <h2 className="fw-bold mb-2">Create Account</h2>
              <p className="text-muted">Join us today and get started</p>
            </div>

            <form onSubmit={submitHandler} className="needs-validation">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  <i className="bi bi-person me-2"></i>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={onChangeHandler}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  <i className="bi bi-envelope me-2"></i>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={onChangeHandler}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-semibold">
                  <i className="bi bi-lock me-2"></i>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={onChangeHandler}
                  required
                />
                <div className="form-text">
                  <i className="bi bi-info-circle me-1"></i>
                  Password must be at least 8 characters long.
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-100 mb-3"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <SubmitLoading />
                    <span className="ms-2">Signing up...</span>
                  </>
                ) : (
                  <>
                    <i className="bi bi-check-circle me-2"></i>
                    Sign Up
                  </>
                )}
              </button>

              <div className="text-center">
                <span className="text-muted">Already have an account? </span>
                <a href="/login" className="text-decoration-none fw-semibold">
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
