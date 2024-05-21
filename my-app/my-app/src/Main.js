import React from 'react';
import './App.css';
import userImageSrc from './images/user.png';
import gptImageSrc from './images/GP_LOGO.png';

function Main() {
    const toggle_Btn = (enable) => {
        var send_btn = document.getElementById('send-button');
        if (enable == true) {
            send_btn.disabled = true;
            console.log('Button Disabled!');
        }
        if (enable == false){
            send_btn.disabled = false;
            console.log('Button Enabled');
        }
    }
    const API_URL = 'http://localhost:8003/rag-redis/invoke';
    const handleAsk = async () => {
        toggle_Btn(true);
        const messageInput = document.querySelector('#message-input');
        const messageBox = document.querySelector('#message-box');
        const userImage = document.querySelector('#user-image');
        const gptImage = document.querySelector('#gpt-image');
        //const cancelButton = document.querySelector('#cancelButton');

        const message = messageInput.value.trim();
        if (message === '') {
            toggle_Btn(false);
            return;
        }
        const requestBody = {
            input: message,
            config: {},
            kwargs: {},
        };

        try {

            messageBox.innerHTML += `
                <div class="message">
                    <div class="user"> 
                    <img src="${userImageSrc}" alt="User" />
                    </div>
                    <div class="content">${message}</div>
                </div>
            `;

            // messageBox.innerHTML += `
            //     <div class="message">
            //         <div class="user">
            //         <img src="${gptImageSrc}" alt="GPT" />
            //         </div>
            //         <div class="content">${responseData.output}</div>
            //     </div>
            // `;

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
            console.log('response is : ', response);
            if (!response.ok) {
                toggle_Btn(false);
                alert('Error Occured. Please Refresh and Try Again!');
            }

            const responseData = await response.json();
            messageBox.innerHTML += `
                <div class="message">
                <div class="user">
                     <img src="${gptImageSrc}" alt="GPT" />
                </div>
                    <div class="content">${responseData.output}</div>
                </div>
            `;
            
        } catch (error) {
            console.error('Error:', error);
            toggle_Btn(false);
            
            
        } finally {
            toggle_Btn(false);
            messageInput.value = '';
            // cancelButton.classList.add('stop_generating-hidden');
        }
        toggle_Btn(false);
    };

    return (
        <div className="container">
                <div className="box" id="message-box"></div>
                    <div className="buttons">
                        <div className="field">
                            <div className="user-input">
                                <div className="input-box">
                                    <textarea
                                        id="message-input"
                                        style={{ width: '1500px', height: '30px', marginTop: '30px', fontSize: '25px' }}
                                        placeholder="Enter a query"
                                    ></textarea>
                                    <button id="send-button" onClick={handleAsk}>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default Main;