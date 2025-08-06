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
            <div className="min-h-screen bg-black text-green-400 p-6 max-w-4xl mx-auto">
                {/* Matrix-style background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-10 w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-0.5 h-0.5 bg-green-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-green-600 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-20 right-1/3 w-0.5 h-0.5 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                {/* Corner border elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-green-400/30"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-green-400/30"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-green-400/30"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-green-400/30"></div>

                {/* Main content */}
                <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2 text-white font-mono">
                            <span className="text-green-400">{'>'}</span> TOKEN_VISUALIZER
                        </h1>
                        <div className="w-32 h-0.5 bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>
                    </div>

                    {/* Input section */}
                    <div className="mb-8">
                        <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-4 hover:border-green-500/60 transition-all duration-300">
                            <div className="text-green-400 font-mono text-sm mb-2">{'>'} INPUT_TEXT</div>
                            <textarea
                                value={text}
                                className="w-full p-4 bg-black border border-green-400/50 rounded-lg font-mono text-green-400 placeholder:text-green-400/50 focus:border-green-400 focus:outline-none focus:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all duration-300"
                                placeholder="Enter text to tokenize..."
                                onChange={handleChange}
                                rows={4}
                            />
                        </div>
                    </div>

                    {/* Token count display */}
                    <div className="mb-8">
                        <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-4">
                            <div className="text-green-400 font-mono text-sm mb-2">{'>'} TOKEN_ANALYSIS</div>
                            <div className="flex items-center gap-4">
                                <div className="text-white font-mono">
                                    <span className="text-green-400">Total Tokens:</span> {tokenIds.length}
                                </div>
                                <div className="text-white font-mono">
                                    <span className="text-green-400">Characters:</span> {text.length}
                                </div>
                                <div className="text-white font-mono">
                                    <span className="text-green-400">Ratio:</span> {text.length > 0 ? (tokenIds.length / text.length).toFixed(2) : '0.00'}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tokens display */}
                    <div className="mb-8">
                        <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-4">
                            <div className="text-green-400 font-mono text-sm mb-4">{'>'} TOKEN_BREAKDOWN</div>
                            <div className="flex flex-wrap gap-2">
                                {tokens.map((tok, i) => (
                                    <span 
                                        key={i} 
                                        className="px-3 py-2 bg-green-400/10 border border-green-400/30 rounded-lg font-mono text-sm text-green-400 hover:bg-green-400/20 hover:border-green-400/60 transition-all duration-300"
                                    >
                                        {tok === ' ' ? '␣' : tok}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Status indicators */}
                    <div className="flex justify-between text-green-400 text-xs font-mono">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                            <span>ENCODER_ACTIVE</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                            <span>READY_FOR_INPUT</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tokenizer