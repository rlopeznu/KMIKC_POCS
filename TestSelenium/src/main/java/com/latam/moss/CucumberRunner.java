package com.latam.moss;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/resources/com/latam/moss/web/", glue = "com.latam.moss.steps", plugin = {
		"pretty", "html:build/reports/cucumber", "json:build/reports/cucumber/cucumber.json",
		"junit:build/reports/cucumber/cucumber.xml" }, dryRun = false, monochrome = false, tags = {
				"@tag1" }, snippets = SnippetType.CAMELCASE)
public class CucumberRunner {

}
