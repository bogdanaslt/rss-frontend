#!/usr/bin/env bash
if [ -f /var/app/package.json ]; then
    echo "[info] npm install"
    npm install /var/app
fi

npm run serve