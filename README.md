# clyde.one

See www.clyde.one

## Developer Notes

### Setup on Ubuntu host

Ensure the following are installed:

. `docker` (with `docker compose`)

Do the following:

. Clone this repo to `/opt/clyde.one`

. Configure Caddy server
.. `cp /opt/clyde.one/caddy/Caddyfile /etc/caddy/Caddyfile`
.. `sudo systemctl restart caddy`

. Start clyde.one site server
.. `cd /opt/clyde.one/site`
.. `docker compose up --build -d`