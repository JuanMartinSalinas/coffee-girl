import React from 'react';
import styles from "./Background.module.css"

function Background() {

    function changeBackground(e) {
        e.preventDefault()  
        console.log(e);
        const fileInput = e.target;
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
              const imageUrl = e.target.result;
              document.getElementById('body').style.backgroundImage = `url(/${imageUrl})`;
            };
            reader.readAsDataURL(file);
          }
    }

    function seeIfItWorks(e) {
        changeBackground(e)
    }



    return (
        <div>
            <li className={styles.mainBox}>
                <form>
                    <input className={styles.backgroundButton} type="file" accept="image/**" onChange={(e) => seeIfItWorks(e)}/>
                    <button>Add</button>
                </form>
            </li>
        </div>
    );
}

export default Background;