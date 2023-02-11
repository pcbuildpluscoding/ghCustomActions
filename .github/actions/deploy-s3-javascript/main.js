const core = require("@actions/core")
// const github = require("@actions/github")
const exec = require("@actions/exec")

function run() {
  // 1 - get some input value
  const bucket = core.getInput("bucket", { required: true })
  const bucketRegion = core.getInput("bucket-region", { required: true })
  const distFolder = core.getInput("dist-folder", { required: true })

  // 2 - upload the dist files
  exec.exec(`aws s3 sync ${distFolder} s3://${bucket} --region ${bucketRegion}`)

  core.notice('hello from my custom javascript action !!')
}

run();