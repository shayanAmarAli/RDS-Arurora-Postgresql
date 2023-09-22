#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { RdsArroraStack } from '../lib/api_gateway-rds-aurora-serverless-postgress_sql-db-aws-stack';

const app = new cdk.App();
new RdsArroraStack(app, 'RDS-ARRORA-STACK', {});