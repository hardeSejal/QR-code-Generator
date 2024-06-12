import React, { useState }  from "react"
import QRCode from "react-qr-code";
export default function QRCodeGenerator(){
    const [qrCode, setQrCode] = useState('')
    const [input, setinput] = useState('')
    function handleGenerateQrCode(){
        setQrCode(input )
        setinput('')
    }
    return ( <div>
    <h1>QR Code Generator</h1>
    <div>
        <input  value={input} onChange={(e=> setinput(e.target.value))} type="text" name="qr-code"  placeholder="enter your value here"/>
       <button disabled={input && input.trim()!=="" ? false:true} onClick={handleGenerateQrCode}>Generate</button>
    </div>
    <div>
     <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#ffffff"/>
    </div>
    </div>
    );
}