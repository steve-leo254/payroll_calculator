// ... Your existing code ...

// M-PESA tariff data
const mpesaTariffs = [
    { min: 1, max: 49, transferToUsers: "FREE",transferToOtherNetworks:"N/A", transferToUnregisteredUsers: "N/A",  withdrawalFromAgents: "N/A" },
    { min: 50, max: 100, transferToUsers: "FREE",transferToOtherNetworks:"N/A", transferToUnregisteredUsers: "N/A", withdrawalFromAgents: 11 },
    { min: 101, max: 500, transferToUsers: "7",transferToOtherNetworks:"7", transferToUnregisteredUsers: "47", withdrawalFromAgents: 29 },
    { min: 501, max: 1000, transferToUsers: "13", transferToOtherNetworks:"13",transferToUnregisteredUsers: "51", withdrawalFromAgents: 29 },
    { min: 1001, max: 1500, transferToUsers: "23", transferToOtherNetworks:"23",transferToUnregisteredUsers: "61", withdrawalFromAgents: 29 },
    { min: 1501, max: 2500, transferToUsers: "33",transferToOtherNetworks:"33", transferToUnregisteredUsers: "76", withdrawalFromAgents: 29 },
    { min: 2501, max: 3500, transferToUsers: "53",transferToOtherNetworks:"53", transferToUnregisteredUsers: "115", withdrawalFromAgents: 52 },
    { min: 35001, max: 5000, transferToUsers: "57", transferToOtherNetworks:"57", transferToUnregisteredUsers: "139", withdrawalFromAgents: 69 },
    { min: 5001, max: 7500, transferToUsers: "78",transferToOtherNetworks:"78", transferToUnregisteredUsers: "171", withdrawalFromAgents: 87 },
    { min: 7501, max: 10000, transferToUsers: "90", transferToOtherNetworks:"90", transferToUnregisteredUsers: "211", withdrawalFromAgents: 115 },
    { min: 10001, max: 15000, transferToUsers: "100",transferToOtherNetworks:"100", transferToUnregisteredUsers: "273", withdrawalFromAgents: 167 },
    { min: 15001, max: 20000, transferToUsers: "105",transferToOtherNetworks:"105", transferToUnregisteredUsers: "296", withdrawalFromAgents: 185 },
    { min: 20001, max: 35000, transferToUsers: "108",transferToOtherNetworks:"108", transferToUnregisteredUsers: "318", withdrawalFromAgents: 197 },
    { min: 35001, max: 50000, transferToUsers: "108",transferToOtherNetworks:"108", transferToUnregisteredUsers: "318", withdrawalFromAgents: 278 },
    { min: 50001, max: 150000, transferToUsers: "108",transferToOtherNetworks:"108", transferToUnregisteredUsers: "318", withdrawalFromAgents: 309 },
    // ... Include the rest of the tariff data here ...
];

// Function to find M-PESA tariff based on the amount
function findMpesaTariff(amount) {
    for (const tariff of mpesaTariffs) {
        if (amount >= tariff.min && amount <= tariff.max) {
            return tariff;
        }
    }
    return null; // Return null if no matching tariff is found
}

// ... Your existing code ...

function calculate() {
    // ... Your existing code ...

    // Input for M-PESA amount
    const mpesaAmountInput = document.getElementById("mpesa_amount");
    const mpesaAmount = parseFloat(mpesaAmountInput.value);

    // Find the M-PESA tariff for the given amount
    const mpesaTariff = findMpesaTariff(mpesaAmount);

    // Display M-PESA tariff details in HTML
    if (mpesaTariff) {
        document.getElementById('displayTransferToUsers').textContent = mpesaTariff.transferToUsers;
        document.getElementById('displayTransferToRegistered').textContent = mpesaTariff.transferToOtherNetworks;
        document.getElementById('displayTransferToUnregistered').textContent = mpesaTariff.transferToUnregisteredUsers;
        document.getElementById('displayWithdrawalFromAgents').textContent = mpesaTariff.withdrawalFromAgents;
    } else {
        // Display N/A if no tariff is found
        document.getElementById('displayTransferToUsers').textContent = "N/A";
        document.getElementById('displayTransferToRegistered').textContent = "N/A";
        document.getElementById('displayTransferToUnregistered').textContent = "N/A";
        document.getElementById('displayWithdrawalFromAgents').textContent = "N/A";
    }

    // ... Your existing code ...
}
