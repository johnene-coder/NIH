module.exports = {
  apps: [{
    name: 'nigeria-hospital',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
    },
    env_production: {
      NODE_ENV: 'production'
    },
    watch: false,
    max_memory_restart: '1G',
    error_file: 'logs/err.log',
    out_file: 'logs/out.log',
    log_file: 'logs/combined.log',
    time: true
  }]
};