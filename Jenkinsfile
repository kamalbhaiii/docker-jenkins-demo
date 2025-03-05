pipeline {
    agent any

    stages{
        stage("Clone repository") {
            steps{
                git branch: 'master', url: "https://github.com/kamalbhaiii/docker-jenkins-demo.git"
            }
        }
        stage("Create mongo and mongo express image"){
            steps{
                sh 'docker rmi mongo || TRUE'
                sh 'docker rmi mongo-express || TRUE'
                sh 'docker pull mongo:latest'
                sh 'docker pull mongo-express:latest'
            }
        }
        stage("Create frontend and backend image") {
            steps{
                sh 'docker rmi frontend:latest || TRUE'
                sh 'docker rmi backend:latest || TRUE'
                sh 'docker build -t frontend:latest ./frontend'
                sh 'docker build -t backend:latest ./backend'
            }
        }
        stage("Down compose"){
            steps{
                sh 'docker-compose -f compose.yaml down'
            }
        }
        stage("Up compose"){
            steps{
                sh 'docker-compose -f compose.yaml up -d'
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