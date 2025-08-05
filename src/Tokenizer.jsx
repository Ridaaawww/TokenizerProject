import React, { useState, useEffect, useRef } from "react";
import { get_encoding, encoding_for_model } from "@dqbd/tiktoken";
import cl100k_base from "@dqbd/tiktoken/encoders/cl100k_base.json";
const Tokenizer = () => {
    const [text, setText] = useState("")
    const [tokens, setTokens] = useState([])
    const [tokenIds, setTokenIds] = useState([])
    const encoderRef = useRef(null)

    useEffect(() => {
        encoderRef.current = get_encoding("cl100k_base", cl100k_base);
        return () => encoderRef.current?.free(); // clean up
    }, []);


    const handleChange = (e) => {
        const input = e.target.value;
        setText(input);
      
        const encoder = encoderRef.current;
        if (!encoder) return;
      
        const ids = encoder.encode(input);
        const decoder = new TextDecoder();
      
        const pieces = ids.map(id => decoder.decode(encoder.decode([id])));
      
        console.log("Token IDs:", ids);
        console.log("Tokens:", pieces);
      
        setTokenIds(ids);
        setTokens(pieces);
      };
      


    return (
        <>
            <div className="p-6 max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb- text-black">Token Visualizer</h1>

                <textarea
                    value={text}
                    className="w-full p-3 border rounded mb-4 border-black placeholder:text-black text-black"
                    placeholder="type something"
                    onChange={handleChange}
                    rows={4}

                />
            </div>


            <div className="mt-4">
                <div className="flex flex-wrap gap-2 text-white">Total Tokens: {tokenIds.length}</div>
            </div>

            <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2">Tokens</h2>
                <div className="flex flex-wrap gap-2">
                    {tokens.map((tok, i) => (
                        <span key={i} className="px-2 py-1 bg-purple-200 rounded font-mono text-sm">
                            {tok}
                        </span>
                    ))}
                </div>
            </div>



        </>
    )
}
export default Tokenizer