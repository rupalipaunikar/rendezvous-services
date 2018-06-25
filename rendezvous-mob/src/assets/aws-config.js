// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
var aws_app_analytics = 'enable';
var aws_cognito_identity_pool_id = 'ap-south-1:2dcdf3c4-37ad-419e-a654-bd12195e742f';
var aws_cognito_region = 'ap-south-1';
var aws_content_delivery = 'enable';
var aws_content_delivery_bucket = 'rendezvous-hosting-mobilehub-914653526';
var aws_content_delivery_bucket_region = 'ap-south-1';
var aws_content_delivery_cloudfront = 'enable';
var aws_content_delivery_cloudfront_domain = 'd1uu7wfnxyrl7t.cloudfront.net';
var aws_dynamodb = 'enable';
var aws_dynamodb_all_tables_region = 'ap-south-1';
var aws_dynamodb_table_schemas = [{"tableName":"ionic-mobile-hub-tasks","attributes":[{"name":"userId","type":"S"},{"name":"taskId","type":"S"},{"name":"category","type":"S"},{"name":"created","type":"N"},{"name":"description","type":"S"}],"indexes":[{"indexName":"DateSorted","hashKey":"userId","rangeKey":"created"}],"region":"ap-south-1","hashKey":"userId","rangeKey":"taskId"}];
var aws_mobile_analytics_app_id = 'ff2123cc0236407ba2b43e1af2056828';
var aws_mobile_analytics_app_region = 'us-east-1';
var aws_project_id = 'e8505c67-23f4-44ba-b915-e707ec498bdb';
var aws_project_name = 'rendezvous';
var aws_project_region = 'ap-south-1';
var aws_resource_name_prefix = 'rendezvous-mobilehub-914653526';
var aws_sign_in_enabled = 'enable';
var aws_user_files = 'enable';
var aws_user_files_s3_bucket = 'rendezvous-userfiles-mobilehub-914653526';
var aws_user_files_s3_bucket_region = 'ap-south-1';
var aws_user_pools = 'enable';
var aws_user_pools_id = 'ap-south-1_OWoVEM7PT';
var aws_user_pools_mfa_type = 'OFF';
var aws_user_pools_web_client_id = '2ddc5beuv5rrcr2qrjejsa5drn';

AWS.config.region = aws_project_region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: aws_cognito_identity_pool_id
  }, {
    region: aws_cognito_region
  });
AWS.config.update({customUserAgent: 'MobileHub v0.1'});