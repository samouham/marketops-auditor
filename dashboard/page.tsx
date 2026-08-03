'use client';

import React, { useState } from 'react';

export default function Page() {
    const [isGenerating, setIsGenerating] = useState(false);

    const handleDownload = async () => {
        setIsGenerating(true);
        try {
            // This points to your live App Runner Engine
            const response = await fetch('https://muabisr7qg.us-east-1.awsapprunner.com/api/generate-artifact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    account_id: "778367658348",
                    timestamp: new Date().toISOString()
                })
            });

            if (!response.ok) throw new Error('Forensic Engine Offline');

            // Handle the PDF Blob
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Sovereign-28-Audit.pdf');
            document.body.appendChild(link);
            link.click();
            link.parentNode?.removeChild(link);
        } catch (error) {
            console.error("Artifact Retrieval Failed:", error);
            alert("Forensic Handshake Failed. Check Backend Status.");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div style={{
            color: "cyan", 
            background: "#020617", // Deep Navy institutional background
            height: "100vh", 
            display: "flex", 
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "center", 
            margin: 0,
            fontFamily: "monospace"
        }}>
            <h1 style={{ marginBottom: "20px", letterSpacing: "2px" }}>
                SOVEREIGN-28 ONLINE
            </h1>
            
            <div style={{
                border: "1px solid cyan",
                padding: "40px",
                borderRadius: "8px",
                textAlign: "center",
                background: "rgba(0, 255, 255, 0.05)"
            }}>
                <p style={{ color: "white", marginBottom: "30px" }}>
                    INSTITUTIONAL INTELLIGENCE NODE: ACTIVE
                </p>
                
                <button 
                    onClick={handleDownload}
                    disabled={isGenerating}
                    style={{
                        background: isGenerating ? "#334155" : "transparent",
                        color: "cyan",
                        border: "2px solid cyan",
                        padding: "15px 30px",
                        cursor: isGenerating ? "not-allowed" : "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        transition: "all 0.3s ease"
                    }}
                >
                    {isGenerating ? "SEALING ARTIFACT..." : "SEAL FORENSIC ARTIFACT"}
                </button>
            </div>
            
            <footer style={{ marginTop: "40px", fontSize: "10px", color: "#475569" }}>
                SECURE HANDSHAKE VERIFIED: {new Date().getFullYear()} MARKETOPS CLOUD
            </footer>
        </div>
    );
}