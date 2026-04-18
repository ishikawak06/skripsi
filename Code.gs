// ============================================================
//  SkripsiAI — Google Apps Script Backend
//  Simpan ke Google Spreadsheet sebagai database
//  Deploy sebagai: Web App → Anyone (or Anyone with Google Account)
// ============================================================

const SHEET_NAMES = {
  SESSIONS: 'Sessions',
  TODO: 'TodoItems',
  LITERATURE: 'Literature',
  PROGRESS: 'Progress',
  LOGS: 'AILogs'
};

// ── Utility ────────────────────────────────────────────────
function getOrCreateSheet(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length)
      .setBackground('#1e3a8a')
      .setFontColor('#ffffff')
      .setFontWeight('bold');
  }
  return sheet;
}

function timestamp() {
  return new Date().toISOString();
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── Router ─────────────────────────────────────────────────
function doGet(e) {
  const action = e.parameter.action || '';
  const sessionId = e.parameter.sessionId || 'default';

  try {
    switch (action) {
      case 'getAll':       return jsonResponse(getAllData(sessionId));
      case 'getTodo':      return jsonResponse(getTodo(sessionId));
      case 'getLiterature':return jsonResponse(getLiterature(sessionId));
      case 'getProgress':  return jsonResponse(getProgress(sessionId));
      default:             return jsonResponse({ error: 'Unknown action' });
    }
  } catch (err) {
    return jsonResponse({ error: err.message });
  }
}

function doPost(e) {
  let body = {};
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return jsonResponse({ error: 'Invalid JSON body' });
  }

  const action = body.action || '';

  try {
    switch (action) {
      case 'saveTodo':      return jsonResponse(saveTodo(body));
      case 'deleteTodo':    return jsonResponse(deleteTodo(body));
      case 'saveLiterature':return jsonResponse(saveLiterature(body));
      case 'deleteLiterature': return jsonResponse(deleteLiterature(body));
      case 'saveProgress':  return jsonResponse(saveProgress(body));
      case 'logAI':         return jsonResponse(logAI(body));
      case 'saveSession':   return jsonResponse(saveSession(body));
      default:              return jsonResponse({ error: 'Unknown action' });
    }
  } catch (err) {
    return jsonResponse({ error: err.message });
  }
}

// ── GET ALL (for initial load) ─────────────────────────────
function getAllData(sessionId) {
  return {
    todo: getTodo(sessionId).data,
    literature: getLiterature(sessionId).data,
    progress: getProgress(sessionId).data,
    ok: true
  };
}

// ── TODO ───────────────────────────────────────────────────
function getTodo(sessionId) {
  const sheet = getOrCreateSheet(SHEET_NAMES.TODO,
    ['id', 'sessionId', 'text', 'checked', 'category', 'createdAt', 'updatedAt']);

  const rows = sheet.getDataRange().getValues();
  const headers = rows[0];
  const data = rows.slice(1)
    .filter(r => r[1] === sessionId || sessionId === 'all')
    .map(r => Object.fromEntries(headers.map((h, i) => [h, r[i]])));
  return { ok: true, data };
}

function saveTodo(body) {
  const sheet = getOrCreateSheet(SHEET_NAMES.TODO,
    ['id', 'sessionId', 'text', 'checked', 'category', 'createdAt', 'updatedAt']);

  const { id, sessionId, text, checked, category } = body;
  const rows = sheet.getDataRange().getValues();

  // find existing row
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] === id) {
      sheet.getRange(i + 1, 1, 1, 7).setValues([[
        id, sessionId, text, checked, category || '', rows[i][5], timestamp()
      ]]);
      return { ok: true, updated: true };
    }
  }
  // new row
  sheet.appendRow([id, sessionId, text, checked, category || '', timestamp(), timestamp()]);
  return { ok: true, created: true };
}

function deleteTodo(body) {
  const sheet = getOrCreateSheet(SHEET_NAMES.TODO,
    ['id', 'sessionId', 'text', 'checked', 'category', 'createdAt', 'updatedAt']);
  const rows = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] === body.id) {
      sheet.deleteRow(i + 1);
      return { ok: true };
    }
  }
  return { ok: false, error: 'Not found' };
}

// ── LITERATURE ─────────────────────────────────────────────
function getLiterature(sessionId) {
  const sheet = getOrCreateSheet(SHEET_NAMES.LITERATURE,
    ['id', 'sessionId', 'title', 'authors', 'year', 'journal', 'url', 'summary', 'createdAt']);

  const rows = sheet.getDataRange().getValues();
  const headers = rows[0];
  const data = rows.slice(1)
    .filter(r => r[1] === sessionId || sessionId === 'all')
    .map(r => Object.fromEntries(headers.map((h, i) => [h, r[i]])));
  return { ok: true, data };
}

function saveLiterature(body) {
  const sheet = getOrCreateSheet(SHEET_NAMES.LITERATURE,
    ['id', 'sessionId', 'title', 'authors', 'year', 'journal', 'url', 'summary', 'createdAt']);

  const { id, sessionId, title, authors, year, journal, url, summary } = body;
  const rows = sheet.getDataRange().getValues();

  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] === id) {
      sheet.getRange(i + 1, 1, 1, 9).setValues([[
        id, sessionId, title, authors || '', year || '', journal || '', url || '', summary || '', rows[i][8]
      ]]);
      return { ok: true, updated: true };
    }
  }
  sheet.appendRow([id, sessionId, title, authors || '', year || '', journal || '', url || '', summary || '', timestamp()]);
  return { ok: true, created: true };
}

function deleteLiterature(body) {
  const sheet = getOrCreateSheet(SHEET_NAMES.LITERATURE,
    ['id', 'sessionId', 'title', 'authors', 'year', 'journal', 'url', 'summary', 'createdAt']);
  const rows = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] === body.id) {
      sheet.deleteRow(i + 1);
      return { ok: true };
    }
  }
  return { ok: false, error: 'Not found' };
}

// ── PROGRESS ───────────────────────────────────────────────
function getProgress(sessionId) {
  const sheet = getOrCreateSheet(SHEET_NAMES.PROGRESS,
    ['sessionId', 'bab1', 'bab2', 'bab3', 'bab4', 'bab5', 'updatedAt']);

  const rows = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] === sessionId) {
      return { ok: true, data: {
        bab1: rows[i][1], bab2: rows[i][2], bab3: rows[i][3],
        bab4: rows[i][4], bab5: rows[i][5]
      }};
    }
  }
  return { ok: true, data: { bab1: 0, bab2: 0, bab3: 0, bab4: 0, bab5: 0 } };
}

function saveProgress(body) {
  const sheet = getOrCreateSheet(SHEET_NAMES.PROGRESS,
    ['sessionId', 'bab1', 'bab2', 'bab3', 'bab4', 'bab5', 'updatedAt']);

  const { sessionId, bab1, bab2, bab3, bab4, bab5 } = body;
  const rows = sheet.getDataRange().getValues();

  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] === sessionId) {
      sheet.getRange(i + 1, 1, 1, 7).setValues([[
        sessionId, bab1||0, bab2||0, bab3||0, bab4||0, bab5||0, timestamp()
      ]]);
      return { ok: true, updated: true };
    }
  }
  sheet.appendRow([sessionId, bab1||0, bab2||0, bab3||0, bab4||0, bab5||0, timestamp()]);
  return { ok: true, created: true };
}

// ── AI LOG ─────────────────────────────────────────────────
function logAI(body) {
  const sheet = getOrCreateSheet(SHEET_NAMES.LOGS,
    ['sessionId', 'toolName', 'inputLength', 'outputLength', 'model', 'tokensUsed', 'createdAt']);

  sheet.appendRow([
    body.sessionId || 'unknown',
    body.toolName || '',
    body.inputLength || 0,
    body.outputLength || 0,
    body.model || 'claude-sonnet-4-20250514',
    body.tokensUsed || 0,
    timestamp()
  ]);
  return { ok: true };
}

// ── SESSION ────────────────────────────────────────────────
function saveSession(body) {
  const sheet = getOrCreateSheet(SHEET_NAMES.SESSIONS,
    ['sessionId', 'userName', 'major', 'thesisTitle', 'targetDate', 'createdAt', 'updatedAt']);

  const { sessionId, userName, major, thesisTitle, targetDate } = body;
  const rows = sheet.getDataRange().getValues();

  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] === sessionId) {
      sheet.getRange(i + 1, 1, 1, 7).setValues([[
        sessionId, userName||'', major||'', thesisTitle||'', targetDate||'', rows[i][5], timestamp()
      ]]);
      return { ok: true, updated: true };
    }
  }
  sheet.appendRow([sessionId, userName||'', major||'', thesisTitle||'', targetDate||'', timestamp(), timestamp()]);
  return { ok: true, created: true };
}
