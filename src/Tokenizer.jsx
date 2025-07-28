import React, { useState, useEffect,useRef } from "react";
import { get_encoding, encoding_for_model } from "@dqbd/tiktoken";
import cl100k_base from "@dqbd/tiktoken/encoders/cl100k_base.json";
const Tokenizer = () => {
    const [text, setText] = useState("")
    const [tokens, setTokens] = useState([])
    const [tokenIds, setTokenIds] = useState([])
    const encoderRef=useRef(null)


 


    useEffect(() => {
        encoderRef.current = get_encoding("cl100k_base", cl100k_base);
        return () => encoderRef.current?.free(); // clean up
    }, []);

   
    const handleChange = (e) => {
        const input = e.target.value
        setText(input)

        const encoder = encoderRef.current;

        if (!encoder) 
         
            return;
        
    const ids = encoder.encode(input);
    const pieces = ids.map(id=>encoder.decode([id]))
    console.log(pieces)
    
    setTokenIds(ids);
    setTokens(pieces);
    }

    
    return (
        <>
            <div className="p-6 max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Token Visualizer</h1>

                <textarea
                    value={text}
                    className="w-full p-3 border rounded mb-4"
                    placeholder="type something"
                    onChange={handleChange}
                    rows={4}

                />
            </div>

           
        <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2"> Tokens</h2>
        <div className="flex flex-wrap gap-2">

          {tokenIds.length}
        </div>
      </div>
    

        </>
    )
}
export default Tokenizer