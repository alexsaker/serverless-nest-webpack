## Running the app locally

```bash
npm start
```

Then browse http://localhost:3000/hello

Skiping cache invalidation is the same behavior as a deployed function

```bash
npm start -- --skipCacheInvalidation
```

## Deploy

In order to deploy the endpoint, simply run:

```bash
sls deploy
```

## Usage

Send an HTTP request directly to the endpoint using a tool like curl

```bash
curl https://XXXXXXX.execute-api.eu-west-1.amazonaws.com/dev/hello
```

## Tail logs

```bash
sls logs --function main --tail
```

## Scaling

By default, AWS Lambda limits the total concurrent executions across all functions within a given region to 100. The default limit is a safety limit that protects you from costs due to potential runaway or recursive functions during initial development and testing. To increase this limit above the default, follow the steps in [To request a limit increase for concurrent executions](http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html#increase-concurrent-executions-limit).

## Cold start

Cold start may cause latencies for your application
See : https://serverless.com/blog/keep-your-lambdas-warm/

These behavior can be fixed with the plugin [serverless-plugin-warmup](https://www.npmjs.com/package/serverless-plugin-warmup)

1. Install the plugin

```bash
npm install serverless-plugin-warmup --save-dev
```

2. Enable the plugin

```yaml
plugins:
  - serverless-plugin-optimize
  - serverless-offline
  - serverless-webpack
  - serverless-plugin-warmup

custom:
  # Enable warmup on all functions (only for production and staging)
  warmup:
    - production
    - staging
```

## Benchmark

A basic benchmark script can be used locally, it performs 1000 "GET" requests on "http://localhost:3000/hello"

```bash
# /!\ The app must run locally
npm start # Or npm start -- --skipCacheInvalidation for better performances

# Run bench
node bench.js
```

The expected result should be similar to:

```bash
$ node bench.js
1000 "GET" requests to "http://localhost:3000/hello"
total: 8809.733ms
Average:  8.794ms
```
