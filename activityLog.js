const fs = require('fs');

function logActivity(message) {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFile('activity.log', logMessage, (err) => {
        if (err) {
            console.error('Erreur d écriture du journal:', err);
        }
    });
}

module.exports = logActivity;
