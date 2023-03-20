import { useNavigate } from "react-router-dom";

export default function Tansaction() {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/user');
    }
    return (
        <div>
            <div className="home-div">
                <button onClick={navigateHome}>Home</button>
            </div>
            <label>Choose your account</label><br></br>
            <select>
                <option value="1">My Account #1</option>
                <option value="2">Everyday</option>
            </select><br></br>
            <label>Transfer to</label><br></br>
            <input name="account_id" placeholder="etc: 346327xxxxxxxxxxx"></input><br></br>
            <label>Amount</label><br></br>
            <input name="amount"></input>$<br></br>
            <p className="note"><b>Note: Check your information first</b></p>
            <div className="button-div">
                <button onClick="">Confirm</button>
            </div>
        </div>
    )
}