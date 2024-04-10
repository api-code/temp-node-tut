// Node.js program to demonstrate the 
// dirent.name property
const fs = require('fs');

// Initiating async function
async function stop(path) {

	// Creating and initiating dir's 
	// underlying resource handle
	const dir = await 
		fs.promises.opendir(path);

	// Synchronously reading the dir's
	// underlying resource handle
	// using readSync() method
	for (var i = 0; i <= 6; i++) {

		// Checking if the particular dirent 
			// is name or not by using name() method
		const value = (dir.readSync()).name;

		// Display the result
		console.log(value);
	}
}

// Catching error
stop('./').catch(console.error);
