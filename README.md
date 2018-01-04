# ECS Service with Continuous Integration
This is a service project associated with this application - [Services Stack with CI/CD](https://github.com/thestackshack/services-stack-cicd).

## Deploy to Production
Deployments to the sandbox environment are automatic.  After each commit and subsequent build the image is automatically pushed to the service.

Production deployments are automatic by default.  To manually publish an image to production update the `Version` parameter in the [stacks/service.stack.json](stacks/service.stack.json) stack and them commit your changes to Git.  This will trigger the Infrastructure to update and deploy the new version.