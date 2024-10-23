#!/usr/bin/env node

import { select } from '@inquirer/prompts';
import fs from 'fs-extra';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url'; // Import helper from 'url'

// Create __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to copy boilerplate files safely
async function copyBoilerplate(sourceFolder, targetFolder) {
	if (sourceFolder === targetFolder) {
		console.error('❌ Source and destination folders cannot be the same.');
		process.exit(1);
	}

	try {
		await fs.copy(sourceFolder, targetFolder, {
			overwrite: true,
			errorOnExist: false,
		});
		console.log(`✅ Boilerplate installed successfully in ${targetFolder}`);
	} catch (err) {
		console.error(`❌ Error copying files: ${err}`);
		process.exit(1);
	}
}

// Run npm install inside the new project folder
function runNpmInstall(targetFolder) {
	console.log(`📦 Installing dependencies in ${targetFolder}...`);

	exec('npm install', { cwd: targetFolder }, (error, stdout, stderr) => {
		if (error) {
			console.error(`❌ Error during npm install: ${error.message}`);
			return;
		}
		if (stderr) {
			console.error(`⚠️ stderr: ${stderr}`);
		}
		console.log(`✅ Dependencies installed successfully:\n${stdout}`);
	});
}

// Function to select a boilerplate using @inquirer/select
async function selectBoilerplate(appName) {
	const choices = [
		{ name: 'ygg-barebones', value: 'ygg-barebones' },
		{ name: 'ygg-shadcn', value: 'ygg-shadcn' },
		{ name: 'ygg-skeleton', value: 'ygg-skeleton' },
		{ name: 'ygg-flowbite', value: 'ygg-flowbite' },
	];

	try {
		const choice = await select({
			message: 'Select a boilerplate to install:',
			choices,
		});

		const sourceFolder = path.join(__dirname, 'templates', choice);
		const targetFolder = path.join(process.cwd(), appName);

		console.log(`🚀 Creating new app: ${appName} in ${targetFolder}`);
		await fs.ensureDir(targetFolder);

		console.log(`📂 Installing ${choice} in ${targetFolder}...`);
		await copyBoilerplate(sourceFolder, targetFolder);

		// Run npm install after copying files
		runNpmInstall(targetFolder);
	} catch (error) {
		console.error(`❌ Error: ${error.message}`);
	}
}

// Get the app name from the command-line arguments
const appName = process.argv[2];

if (!appName) {
	console.error(
		'❌ Please provide a name for your new app. Example: boilerplate-installer my-new-app'
	);
	process.exit(1);
}

// Run the script with the provided app name
selectBoilerplate(appName);
