import { useNavigate } from "react-router-dom";

export default function TransactionHist() {
    const navigate = useNavigate(); 
    const navigateHome = () => {
        navigate('/user');
    }
    return (
        <div>
            <div className="home-div">
                <button onClick={navigateHome}>Home</button>
            </div>
            <h1>History</h1>
            <div className="account_container">
                <h1>My Account #1</h1>
                <h1 className="transfer_out">Transfer out </h1> 
                <p>to: Sasah (6534293472)</p>
                <h1>Amount</h1>
                <p>500.00 $</p>
                <p><b>Date:</b> Mar 14, 2023 15:44:21 </p>
            </div>
            <div className="account_container">
                <h1>Everyday</h1>
                <h1 className="transfer_in">Transfer in </h1> 
                <p>by: Andy (32452372)</p>
                <h1>Amount</h1>
                <p>300.00 $</p>
                <p><b>Date:</b> Mar 13, 2023 23:58:11</p>
            </div>
        </div>
    )
}