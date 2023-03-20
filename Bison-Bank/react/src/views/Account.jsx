import { useNavigate } from "react-router-dom"

export default function Account() {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/user');
    }
    return (
        <div>
            <div className="home-div">
                <button onClick={navigateHome}>Home</button>
            </div>
            <h1>Your account(s)</h1>
            <div className="account_container">
                <h1>My Account #1 (1234567890)</h1>
                <p>Fixed Deposit Account (0.8%)</p>
                <h1>5,293.45 $</h1>

                <p><b>End of the year balance: </b>5335.80 $ </p>
            </div>
            <div className="account_container">
                <h1>Everyday (396058119)</h1>
                <p>Saving Account (0.3%)</p>
                <h1>882.91 $</h1>
                <p><b>End of the year balance: </b>885.56 $</p>
            </div>
        </div>
    )
}