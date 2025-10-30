// test-api.ts

// Adjust this import path if your services folder is not at 'services/api'
import { searchProperties, getPropertyById } from './services/api'; 

// Helper function to pretty-print JSON
function printJson(title: string, data: any) {
  console.log(`\n--- ${title} ---`);
  if (data) {
    console.log(JSON.stringify(data, null, 2));
  } else {
    console.log("No data returned.");
  }
}

async function runApiTests() {
  try {
    console.log("🚀 Starting API tests...");

    // --- Test 1: Get Featured Properties ---
    const featuredPropsResponse = await searchProperties({ 
      featured: true, 
      pageSize: 3 // Let's just get 3 for the test
    });
    
    console.log(`\n✅ Fetched ${featuredPropsResponse?.results.length || 0} featured properties.`);
    
    if (featuredPropsResponse && featuredPropsResponse.results.length > 0) {
      // Print the full data for the first property
      printJson("First Featured Property", featuredPropsResponse.results[0]);
      
      // --- Test 2: Get a Property by ID ---
      // We'll use the ID from the first property we fetched
      const idToTest = featuredPropsResponse.results[0].id;
      console.log(`\nTesting getPropertyById with ID: ${idToTest}...`);
      
      const singleProp = await getPropertyById(idToTest);
      printJson(`Single Property (ID: ${idToTest})`, singleProp);

    } else {
      console.warn("⚠️ Could not find a featured property to use for 'Get by ID' test.");
    }

    console.log("\n✨ API tests complete!");

  } catch (error) {
    console.error("\n❌ Test failed with an error:");
    console.error(error);
  }
}

// Run the tests
runApiTests();