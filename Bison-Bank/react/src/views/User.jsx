import { useNavigate } from "react-router-dom"

export default function User() {
    const navigate = useNavigate();
    const navigateTransaction = () => {navigate('/user/transaction');}
    return (
        <div className="body">
            <h1>Welcome, Bob</h1>
            <div className="button-div">
                <button onClick={navigateTransaction}>Transfer</button>
            </div>
        </div>
    )
}