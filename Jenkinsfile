pipeline {
    agent any
    stages {
stage('testing pipeline'){
          steps{
      echo 'test1'
      			sh 'mvn --version'
                sh 'mvn compile'
            	sh '-Dtest=testrunner test'
                }
        }
}
}