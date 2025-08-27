pipeline {
    agent any

    stages {
        stage('Cloner le code') {
            steps {
                git 'https://github.com/kenaubry/CalculatriceJenkins'
            }
        }

        stage('Construire et tester') {
            steps {
                    sh 'docker build -t test .'

                    sh 'docker run --rm -d -p 8081:8080 --name test-container test'                }
            }
        }

        stage('Déployer en production') {
            steps {
                    def deploy = input message: 'Voulez-vous déployer en production ?', parameters: [choice(choices: ['Oui', 'Non'], description: 'Déploiement', name: 'confirmer')]
              
                    if (deploy == 'Oui') {
    
                        sh 'docker rm -f prod-container || true'

                        sh 'docker run -d -p 80:8080 --name prod-container test http-server -p 8080'
                    } else {
                        echo 'Déploiement annulé.'
                    }
                }
                }
            }
