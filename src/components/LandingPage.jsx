import '../css/LandingPage.css'


const LandingPage = () => {
    return (
        <div className="bg-dark d-flex justify-content-center" style={{ height: "100vh", backgroundColor:"#002B5B"}}>
            <div className='row ' style={{ marginTop: "120px" }}>
                <div className="col rounded text-center" >
                    <h1 className='text-white display-1' style={{ marginBottom: "40px" }}>
                        Crack the code
                    </h1>
                    <h3 className="mb-4 " style={{ color: "#8FE3CF"}}>
                        Start your interview prep here<span className="blinking-cursor pb-5">|</span>
                    </h3>
                    <button
                        className='rounded p-2 btn btn-secondary'
                        onClick={() => window.open("https://interview-backend-f6mj.onrender.com/auth/google")}>
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
        
        
    );
};

export default LandingPage;


