import React, {useState} from 'react';
import styles from "./Login.module.css"
import { useLanguageStore } from '../../store';

function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const lang = useLanguageStore((state)=> state.english) 

    function handleEmail(e) {
        setEmail(e)
    }
    function handlePassword(e) {
        setPassword(e)
    }
    function handleSubmit() {

    }

    return (
        <div className={styles.mainBox}>
            <p>{lang ? "Coming soon!" : "Muy pronto!"}</p>
                {/* <form onSubmit={handleSubmit}>
                    <label className={styles.labelForm}>Email</label>
                    <input 
                        className={styles.inputForm}
                        type="text"
                        onChange={(e) => handleEmail(e.target.value)}
                        value={email}
                    />
                    <label className={styles.labelForm}>Password</label>
                    <input 
                        className={styles.inputForm}
                        type="password"
                        onChange={(e) => handlePassword(e.target.value)}
                        value={password}
                    />
                    <div className={styles.formButtons}>
                        <button className={styles.cancelLogin} type="button" onClick={() => setOpenProfile(!openProfile)}>Cancel</button>
                        <button className={styles.submitLogin} type="submit" disabled={email && password ? false : true}>Log in</button>
                    </div>
                </form> */}
        </div>
    );
}

export default Login;