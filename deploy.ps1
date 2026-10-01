# Gitee Pages 一键部署脚本
# 使用方法：在项目目录下运行
# pwsh -File deploy-gitee.ps1

param(
    [string]$Message = "更新网站内容"
)

Write-Host "🔨 构建网站..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 构建失败！" -ForegroundColor Red
    exit 1
}

Write-Host "📦 准备部署..." -ForegroundColor Cyan

# 将构建产物复制到部署目录
$distPath = "docs\.vitepress\dist"
if (-not (Test-Path $distPath)) {
    Write-Host "❌ 找不到构建产物！" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ 构建完成！接下来：" -ForegroundColor Green
Write-Host "  1. git add . && git commit -m '$Message' && git push"
Write-Host "  2. 打开 Gitee 仓库 → 服务 → Gitee Pages → 点击「更新」"
Write-Host ""
Write-Host "🌐 网站地址: https://你的用户名.gitee.io/ark-robomaster" -ForegroundColor Yellow