import React, { useState } from 'react'
import cryptonate from '../cryptonate';
import web3 from '../web3';

export default function Donate() {
    const [manager, setManager] = useState('');
    const [users, setUsers] = useState([]);
    const [balance, setBalance] = useState(0);
    const [vote, setVote] = useState(0);
    const [value, setValue] = useState(0);
    const [message, setMessage] = useState('...');
    const [override, setOverride]  = useState(false);


    const onSubmit = event => {
        event.preventDefault();
        const account = web3.eth.accounts[0];
        setMessage("Waiting on transaction success...");

        cryptonate.methods.donate(vote, {
            from: account,
            value: web3.toWei(value, 'ether')
        },
        function(error, result) {
            if (!error) {
                setMessage("Donation preformed successfully!");
            }
    
            else {
                setMessage(String(error));
            }
        })
    }

    const onClick = () => {
        const account = web3.eth.accounts[0];
        setMessage("Waiting on transaction success...");

        cryptonate.methods.releaseFunds(override, {
            from: account
        },
        function(error, result) {
            if (!error) {
                setMessage("The winning project has been chosen!");
            }
    
            else {
                setMessage(String(error));
            }
        })
    }

    return (
        <React.Fragment>
            <div>
                
                <form onSubmit={onSubmit}>
                    <div>
                        <h3>Enter the Amount:</h3>
                        <input>value={value} onChange={event => setValue(event.target.value)}</input>
                        <h3>Enter the Vote Number:</h3>
                        <input>value={vote} onChange={event => setVote(event.target.value)}</input>
                    </div>
                    <button>Donate</button>
                </form>

                <h4>Ready to reveal the project winner?</h4>
                <button onClick={onClick}>Reveal</button>

                <h3>{message}</h3>
            </div>
        </React.Fragment>
    )
}
