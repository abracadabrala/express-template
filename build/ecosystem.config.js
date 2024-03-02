module.exports = {
  apps: [
    {
      name: "resend",
      script: "index.js",
      cwd: "./",
      args: "",
      interpreter: "",
      interpreter_args: "",
      watch: false,
      exec_mode: "fork",
      instances: 1,
      max_memory_restart: "1G",
      error_file: "./logs/app-err.log",
      merge_logs: false,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      min_uptime: "60s",
      max_restarts: 1,
      autorestart: true,
      cron_restart: "",
      restart_delay: 60 * 1000,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
