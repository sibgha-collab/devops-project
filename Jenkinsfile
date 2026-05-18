pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                echo 'Code checkout done'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'cd backend && npm install'
            }
        }
        stage('Security Scan') {
            steps {
                sh 'trivy fs .'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker build -t devops-app:v1 ./backend'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deployment done!'
            }
        }
    }
}
