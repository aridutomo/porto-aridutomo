pipeline {
    agent any

    environment {
        // Folder project di VPS yang sudah kita buat sebelumnya
        PROJECT_DIR = '/opt/projects/porto-aridutomo'
    }

    stages {
        stage('Deploy ke VPS') {
            steps {
                script {
                    // Jenkins akan menjalankan perintah ini di VPS
                    sh """
                        cd ${PROJECT_DIR}
                        git pull origin main
                        docker compose build --no-cache
                        docker compose up -d
                        docker image prune -f
                    """
                }
            }
        }
    }
}
