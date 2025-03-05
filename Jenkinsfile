pipeline {
    agent any

    stages{
        stage("Clone repository") {
            steps{
                git branch: 'master', url: "https://github.com/kamalbhaiii/docker-jenkins-demo.git"
            }
        }
        stage("Down compose") {
            steps{
                bat 'docker-compose -f compose.yaml down'
            }
        }
        stage("Create mongo and mongo express image") {
            steps{
                bat 'docker rmi mongo || TRUE'
                bat 'docker rmi mongo-express || TRUE'
                bat 'docker pull mongo:latest'
                bat 'docker pull mongo-express:latest'
            }
        }
        stage("Create frontend and backend image") {
            steps{
                bat 'docker rmi frontend:latest || TRUE'
                bat 'docker rmi backend:latest || TRUE'
                bat 'docker build -t frontend:latest ./frontend'
                bat 'docker build -t backend:latest ./backend'
            }
        }
        stage("Up compose") {
            steps{
                bat 'docker-compose -f compose.yaml up -d'
            }
        }
    }
    post{
        success {
            echo "Deployment successful"
        }
        failure {
            echo "Deployment failed"
        }
    }
}