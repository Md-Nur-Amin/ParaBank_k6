const reporter = require('k6-html-reporter')

const options = {
    jsonFile : 'F:/SQA/k6/ParaBank_k6/summary.json',
    output: 'F:/SQA/k6/ParaBank_k6/report',
}

reporter.generateSummaryReport(options)