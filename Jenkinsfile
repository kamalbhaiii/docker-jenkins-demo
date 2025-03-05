pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME="docker-jenkins-demo"
    }

    stages{
        stage("Clone repository") {
            steps{
                git branch: 'master', url: "https://github.com/kamalbhaiii/docker-jenkins-demo.git"
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