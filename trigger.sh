#!/bin/bash

# Function to check if a newer version is available on Docker Hub
check_for_new_version() {
    local image_name=$1
    local current_version=$(docker image inspect "$image_name" --format '{{index .RepoDigests 0}}' | awk -F'@' '{print $2}')
    local latest_version=$(curl -s "https://registry.hub.docker.com/v2/repositories/$image_name/tags/" | python -c "import sys, json; print(json.load(sys.stdin)['results'][0]['digest'])")
    
    if [ "$current_version" != "$latest_version" ]; then
        echo "New version available: $latest_version"
        return 0
    else
        echo "No new version available"
        return 1
    fi
}

# Function to trigger Portainer webhook
trigger_portainer_webhook() {
    # The first argument to the function is the webhook URL
    local webhook_url=$1
    local payload='{}'  # Customize the payload as needed
    
    curl -k -X POST -H "Content-Type: application/json" -d "$payload" "$webhook_url"
}

frontendImage="1tobyloby1/frontend"
frontendWebhook="https://192.168.1.17:9443/api/webhooks/e1bcdedb-eea9-4cb7-b2aa-1a08c8593ba8"

backendImage="1tobyloby1/backend"
backendWebhook="https://192.168.1.17:9443/api/webhooks/deb6175a-ee94-44f5-ab42-dc5daa9bfba4"

# Main script
if check_for_new_version "$frontendImage"; then
    trigger_portainer_webhook "$frontendWebhook"
fi

if check_for_new_version "$backendImage"; then
    trigger_portainer_webhook "$backendWebhook"
fi

# Remove old Docker images
docker image prune -f