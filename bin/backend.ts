#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BackendStack } from '../lib/backend-stack';

const app = new cdk.App();
new BackendStack(app, 'BackendStack', {
  env: {
    account: '12345678',
    region: 'us-east-1',
  }
});

app.synth();