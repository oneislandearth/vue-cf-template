// Import the asset handler
import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

// Handle the fetch events
addEventListener('fetch', event => {

  // Attempt to fetch the page
  try {

    // Fetch and return the content
    event.respondWith(handleEvent(event));

  // Handle the error
  } catch (e) {

    // Define the error response
    const response = new Response(e.message || e.toString(), { status: 500 });
    
    // Define the error message in production
    // const response = new Response('Internal Error', { status: 500 });

    // Send the 500 error message
    event.respondWith(response);
  }
});

// Handle the events
const handleEvent = async(event) => {

  // Extract the request url
  const url = new URL(event.request.url)
  
  // Define the options
  const options = {};

  // Attempt to fetch the asset
  try {

    // Return the asset if found
    return await getAssetFromKV(event, options);

  // Handle the error
  } catch (e) {

    // Send the 404 error response
    return new Response('Page not found', { status: 404 });
  }
};