// Paste this into a Google Apps Script project linked to your Google Sheet.
// Deploy > New deployment > Web app > Execute as: Me > Who has access: Anyone.
const NOTIFY_EMAIL = 'your-email@example.com'; // where enquiries are emailed

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(data.formType)
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet(data.formType);
  const keys = Object.keys(data);
  if (sheet.getLastRow() === 0) sheet.appendRow(keys);
  const header = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  sheet.appendRow(header.map(function (k) { return data[k] || ''; }));
  MailApp.sendEmail(NOTIFY_EMAIL, 'New enquiry: ' + data.formType,
    keys.map(function (k) { return k + ': ' + data[k]; }).join('\n'));
  return ContentService.createTextOutput('ok');
}
