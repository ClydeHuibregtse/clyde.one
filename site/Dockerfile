FROM node:16

# Copy in files to safe location in container filesystem
COPY . /opt/clyde.one

WORKDIR /opt/clyde.one

# Install and build
RUN npm install && npm run build

# Expose
ENTRYPOINT npm run preview

