# Ubuntu Docker deployment

The private GitHub repository is `Natthabhat/engineering-portfolio`. Images and videos use Git LFS. The Ubuntu checkout is `/home/natthabhat/apps/namon-portfolio-git`. Its ignored `.env` binds the site to `192.168.31.36:3300`.

## Publish from Windows

In PowerShell, change to `C:\Users\natth\Desktop\Web\Nextjs\Profile`, then run:

```powershell
git status
git add app components public README.md DEPLOYMENT.md Dockerfile compose.yaml next.config.ts package.json pnpm-lock.yaml
git commit -m "Describe the update"
git push origin main
```

Stage any other files you changed. Git LFS uploads changed photos and videos automatically. Keep `.env`, `node_modules`, and `.next` out of Git.

## Deploy on Ubuntu

```sh
cd ~/apps/namon-portfolio-git
git pull --ff-only origin main
git lfs pull
docker compose up -d --build --wait
docker compose ps
curl -I http://192.168.31.36:3300/
```

The server uses a read-only GitHub deploy key. Its `.env` remains in place during pulls. The Docker container runs as a non-root user with Linux capabilities dropped, has a health check, and restarts after reboot unless manually stopped. This Ubuntu host cannot start the Node image with `no-new-privileges`, so that setting is omitted.

## Logs and stop

```sh
docker compose logs --tail=100 portfolio
docker compose stop
```
