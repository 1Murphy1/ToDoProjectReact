import React from 'react';

function ShareModal({ onClose }) {
    return (
        <div className="shareContainer" onClick={onClose}>
            <div className="shareContainer-content">
                <div className="shareContainer-content-buttons">
                    <button className="share-icon"><img src="../src/icons/copyButton.svg" alt="Copy" /></button>
                    <button className="share-icon"><img src="../src/icons/vkButton.svg" alt="VK" /></button>
                    <button className="share-icon"><img src="../src/icons/telegramButton.svg" alt="Telegram" /></button>
                    <button className="share-icon"><img src="../src/icons/whatsappButton.svg" alt="WhatsApp" /></button>
                    <button className="share-icon"><img src="../src/icons/facebookButton.svg" alt="Facebook" /></button>
                </div>
            </div>
        </div>
    );
}

export default ShareModal;
