// Function to connect Metamask
async function connectMetamask() {
    try {
        // Detect Metamask provider
        const provider = await detectEthereumProvider();

        if (provider) {
            // Metamask is installed
            const ethereum = window.ethereum;

            // Request user's permission to access their accounts
            await ethereum.request({ method: 'eth_requestAccounts' });

            // User approved access, you can now interact with Metamask
            console.log('Connected to Metamask');

            // Display a pop-up message
            alert('Sold! Congrats on your new item. Your ETH funds have been processed and your item is on its way.');

        } else {
            // Metamask is not installed or not available
            console.error('Metamask is not installed');
        }
    } catch (error) {
        console.error('Metamask connection error:', error);
    }
}

// Add an event listener to the "Let's bid!" button
const bidButton = document.getElementById('bid-button');
if (bidButton) {
    bidButton.addEventListener('click', async (event) => {
        event.preventDefault(); // Prevent the default behavior of the anchor link (Stops page from automatically loading back to top after bid button is triggered)

        // Call the connectMetamask function from metamask.js when the button is clicked
        await connectMetamask();

        simulateBidding();
    });
}


