##
to pull image only => docker pull (image_name)
to run docker image => docker run -it (image_name)
-------
##
to push own docker image on docker.hub
1=>see Dockerfile
2=>docker build -t (image_name) dockerfile_directory [image-creation]
3=>docker run -p 8000:8000 (image_name) [to tell to over machine]
-------
4=>docker build -t varungauravtyagi/anyprojectname dockerfile_directory
5=>docker push varungauravtyagi/anyprojectname
-------
