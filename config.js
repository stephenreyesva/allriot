// ─────────────────────────────────────────────────────────────
// config.js — Stephen Reyes VA Time Tracker
// ⚠️  THIS FILE IS IN .gitignore — NEVER COMMIT TO GITHUB
//     Place this file manually in the same folder as admin.html
//     on every device you use (PC, laptop, phone via local server)
// ─────────────────────────────────────────────────────────────

window.TRACKER_CONFIG = {
  // GitHub Personal Access Token (repo scope — contents read/write)
  ghToken: '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',

  // GitHub repo details
  ghUser:   'stephenreyesva',
  ghRepo:   'timetracker',
  ghBranch: 'main',

  // Login credentials hash (SHA-256 of "username:password")
  // Current: StephenVA:admin
  authHash: '2321c4635e1eb7dd4877116b80615a86951680a020cc220f39172c24109efe5a',
};
