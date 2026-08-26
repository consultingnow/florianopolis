# Gera app/icon.png (favicon quadrado) a partir de public/logo.png.
# Usa o System.Drawing do .NET (nativo do Windows) — sem dependências npm.
# Uso:  powershell -ExecutionPolicy Bypass -File scripts/generate-favicon.ps1
Add-Type -AssemblyName System.Drawing

$logo = [System.Drawing.Bitmap]::FromFile((Resolve-Path 'public/logo.png'))
$w = $logo.Width
$h = $logo.Height

# Detecta a área do conteúdo (remove margens transparentes do PNG)
$minX = $w; $minY = $h; $maxX = -1; $maxY = -1
for ($y = 0; $y -lt $h; $y++) {
  for ($x = 0; $x -lt $w; $x++) {
    $c = $logo.GetPixel($x, $y)
    if ($c.A -gt 40) {
      if ($x -lt $minX) { $minX = $x }
      if ($x -gt $maxX) { $maxX = $x }
      if ($y -lt $minY) { $minY = $y }
      if ($y -gt $maxY) { $maxY = $y }
    }
  }
}
$cw = $maxX - $minX + 1
$ch = $maxY - $minY + 1
Write-Output ("Conteúdo detectado: {0}x{1}" -f $cw, $ch)

$S = 512                       # canvas quadrado
$canvas = New-Object System.Drawing.Bitmap($S, $S)
$g = [System.Drawing.Graphics]::FromImage($canvas)
$g.Clear([System.Drawing.Color]::FromArgb(255, 18, 34, 74))  # azul-marinho #12224A
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

$scale = ($S * 0.72) / $cw     # logo ocupa ~72% da largura
$dw = [int][math]::Round($cw * $scale)
$dh = [int][math]::Round($ch * $scale)
$dx = [int][math]::Round(($S - $dw) / 2)
$dy = [int][math]::Round(($S - $dh) / 2)

$srcRect = New-Object System.Drawing.Rectangle($minX, $minY, $cw, $ch)
$dstRect = New-Object System.Drawing.Rectangle($dx, $dy, $dw, $dh)
$g.DrawImage($logo, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

New-Item -ItemType Directory -Force -Path 'app' | Out-Null
$canvas.Save((Join-Path (Get-Location) 'app/icon.png'), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Output ('Favicon salvo: app/icon.png ({0}x{0})' -f $S)
$canvas.Dispose()
$logo.Dispose()