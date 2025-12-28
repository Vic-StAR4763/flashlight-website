# Adds %APPDATA%\npm to the current user's PATH if missing and updates current session
$p = [Environment]::GetEnvironmentVariable('Path','User')
$npmPath = Join-Path $env:APPDATA 'npm'
if ($p -notlike "*$npmPath*") {
  [Environment]::SetEnvironmentVariable('Path', $p + ';' + $npmPath, 'User')
  Write-Output 'Added to User PATH'
} else {
  Write-Output 'Already in User PATH'
}
# Update this session so we can verify immediately
$env:Path += ';' + $npmPath
# Verify
$result = & where.exe pnpm 2>$null
if ($result) { $result } else { Write-Output 'where failed' }
try { pnpm.cmd -v } catch { Write-Output 'pnpm.cmd not found'}
