"use client";

import ProfileComponent from "@/components/Profile";

export default function Profile() {
    return (
        <div>
            <ProfileComponent />
            
            <div style={{ width: '50%', height: '50vh', overflow: 'hidden', marginTop: '20px' }}>
                <button 
                    onClick={() => window.open('https://ndem.nrsc.gov.in/#/', '_blank', 'width=800,height=600')}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        backgroundColor: '#007BFF',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '5px'
                    }}
                >
                    Open NDEM Site
                </button>
            </div>
        </div>
    );
}

