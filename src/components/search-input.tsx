import { useState } from "react"

export default function SearchInput({sendIp}) {
    const [ipAddress, setIpAddress] = useState('');
    return (
        <div className="flex w-fit mx-auto relative pt-4">
            <input className="relative p-4 w-128 rounded-xl bg-white text-black focus:outline-none focus:border-none md:w-72" type="text" onChange={(e) => setIpAddress(e.target.value)} value={ipAddress} placeholder="Search for any IP address or domain"/>
            <img className="absolute bg-black right-0 rounded-r-xl hover:bg-zinc-800 cursor-pointer" 
            onClick={() => sendIp(ipAddress)} style={{padding: "1.3rem"}} src="assets/icon-arrow.svg" alt="icon-arrow" />
        </div>
    )
}