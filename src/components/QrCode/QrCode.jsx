import { useState } from 'react'
import QRCode from "react-qr-code"

const QrCode = () => {

    const [qrCode, setQrCode] = useState("")
    const [input, setInput] = useState("")

    function handleClick() {
        setQrCode(input)
        setInput("")
    }
    return (
        <div
            className='min-h-screen bg-slate-100 flex items-center justify-center p-4'
        >
            <div className='w-full max-w-lg bg-white rounded-xl shadow-md p-4 sm:p-6'>
                <h2 className='text-2xl font-bold text-slate-800 text-center mb-6'>QR Code Generator</h2>
                <div className='flex flex-col gap-4'>
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        type="text"
                        name="qr-code"
                        placeholder='Enter anything'
                        className='w-full border border-slate-300 rounded-lg p-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                    />
                    <button
                        disabled={!input || input.trim() === ""}
                        onClick={handleClick}
                        className='w-full bg-indigo-600 text-white font-semibold p-3 rounded-lg hover:bg-indigo-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        Generate
                    </button>

                </div>
                <div className='mt-6 min-h-72 flex justify-center items-center bg-slate-50 p-4 rounded-xl'>
                    {
                        qrCode ? <QRCode
                        id="qr-code-main"
                        value={qrCode}
                        size={250}
                        bgColor='#ffffff'
                    /> : <p className='text-sm text-slate-500 text-center py-8'>Enter something to generate the QR code</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default QrCode
