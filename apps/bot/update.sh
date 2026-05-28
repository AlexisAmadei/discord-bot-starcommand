#!/bin/bash

set -euo pipefail

log() {
	echo "[$(date +"%Y-%m-%d %H:%M:%S")] $*"
}

die() {
	log "ERROR: $*"
	exit 1
}

run_step() {
	local desc="$1"
	shift
	log "$desc"
	"$@" || die "$desc failed (exit $?)"
}

trap 'die "Unexpected error on line $LINENO"' ERR

log "Updating the bot application..."

run_step "Pulling latest changes" git pull origin main

run_step "Stopping containers" sudo docker compose down
run_step "Building containers" sudo docker compose build
run_step "Starting containers" sudo docker compose up -d

log "Bot application updated and restarted successfully."