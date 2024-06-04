#/bin/env sh

SERVICE_NAME=justyol-ui

docker buildx build -f .devops/Dockerfile -t $SERVICE_NAME .

docker rm -f $SERVICE_NAME > /dev/null 2>&1
docker run -it -d -p 3000:3000 --name $SERVICE_NAME $SERVICE_NAME

exit
