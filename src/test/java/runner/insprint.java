package runner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "\"src/test/java/features/Regression\"" }, glue = "seleniumgluecode", plugin = {
        "pretty:target/prettyReport.txt", "html:target/cucumber", "json:target/report.json", "rerun:target/rerun.txt",
        "junit:target/junit-report.xml", "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html", "testng:target/testng-output.xml" }, monochrome = true, tags = {"@Test5"})

public class insprint {
    @AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig(new File("config/report.xml"));
    
    }
}