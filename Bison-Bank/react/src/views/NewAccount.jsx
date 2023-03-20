import { useNavigate } from "react-router-dom"

export default function NewAccount() {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/user');
    }
    return (
        <div>
            <div className="home-div">
                <button onClick={navigateHome}>Home</button>
            </div>
            <label>Choose your new account type</label><br></br>
            <select>
                <option value="1">Savings Account (0.3%)</option>
                <option value="2">Fixed Deposit Account (0.8%)</option>
            </select><br></br>
            <label>New account name</label><br></br>
            <input value="My account #1" name="accName"></input><br></br>
            <label>Initial Deposit</label><br></br>
            <input value="0.00" name="depost"></input>$<br></br>
            <div className="button-div">
                <button type="button" onClick="">
                    Create new account
                </button>
            </div>
        </div>
    )
}