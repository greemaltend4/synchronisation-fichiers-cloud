const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const dropboxV2Api = require('dropbox-v2-api');

function syncFiles(localPath, cloudService) {
    // Logique de synchronisation ici en fonction du service cloud choisi
    console.log(`Synchronisation de fichiers à partir de ${localPath} vers ${cloudService}`);
}

module.exports = syncFiles;
