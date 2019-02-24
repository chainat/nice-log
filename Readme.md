# Nice Log
Docker, Docker Compose and Kubernetes' pod logs are usually format in UTC time. This NPM module enhances these logs by turning/displaying them in your local timezone. It can enhance readability and easier to identify the messages.

Also, if you use `logs -f`, sometime you can get lost in a pile of log messages. A nicer log can help by adding a gap between old and new logs for you automatically.


Install:
```
  npm install -g @chainat/nice-log
```

Usage:
```
  # docker-compose
  docker-compose logs -f {your-service-name} | nice-log


  # docker
  docker logs -f {your-docker-container-name} | nice-log

  # kubernetes
  kubectl logs -f {pod-name} | nice-log
```
