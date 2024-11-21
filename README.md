## Resonate CX Take home Assignment

Instructions
1. Build the Docker Image:
In your project directory (where the Dockerfile is located), run the following command to build the Docker image:

`docker build -t contact-app .`

2. Run the Docker Container:
Spin up the container using the following command:

`docker run -it --rm -p 5173:5173 contact-app`
This runs the container interactively and maps the container's port 5173 to the host.

3. Access the Application:
Open your browser and go to:

`http://localhost:5173`
