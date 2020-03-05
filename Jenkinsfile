pipeline {
   agent any

   stages {
      stage('Smoketest') {
        steps {
        	-Dtest=testrunner test
        }
   }
   stage('In Sprint') {
     steps {
        	-Dtest=insprint test
     }
   }
   stage('Regression') {
     steps {
            -Dtest=regression test
     }
   }
  }
}