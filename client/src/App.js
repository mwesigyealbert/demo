import React, { useState } from 'react';

function App() {
    const [serialNumber, setSerialNumber] = useState('');
    const [nameDrugshop, setNameDrugshop] = useState('');
    const [physicalAddress, setPhysicalAddress] = useState('');
    const [fulltimeIncharge, setFulltimeIncharge] = useState('');
    const [qualification, setQualification] = useState('');
    const [district, setDistrict] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5454/api/drugshops', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    serialNumber,
                    nameDrugshop,
                    physicalAddress,
                    fulltimeIncharge,
                    qualification,
                    district,
                }),
            });
            const data = await response.json();
            console.log('Drugshop added:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Drugshop Data Collection Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Serial Number"
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Name of Drugshop"
                    value={nameDrugshop}
                    onChange={(e) => setNameDrugshop(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Physical Address"
                    value={physicalAddress}
                    onChange={(e) => setPhysicalAddress(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Fulltime Incharge"
                    value={fulltimeIncharge}
                    onChange={(e) => setFulltimeIncharge(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Qualification"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="District"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
