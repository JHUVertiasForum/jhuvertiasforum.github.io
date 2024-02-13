import boto3
import random
import json

dynamoDB = boto3.resource('dynamodb')
TABLE_NAME = "veritas"

CORS_Header = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
}

###############################################
# DynamoDB
###############################################

def writeToDyanmoDB(data):

    table = dynamoDB.Table(TABLE_NAME)
    response = table.put_item(
        Item={
            'text': data
        }
    )
    return str(response)

def readFromDynamoDB():
    table = dynamoDB.Table(TABLE_NAME)
    response = table.scan()
    return (response['Items'])

###############################################
# Helper Functions
###############################################

def get10RandomMessages():
    messages = readFromDynamoDB()
    textOnly = []
    for message in messages:
        textOnly.append(message['text'])

    random.shuffle(textOnly)

    return str(messages[:10]).replace("'", '"')

def lambda_handler(event, context):

    print(event)

    httpMethod = event['httpMethod']

    if httpMethod == 'GET':
        return {
            "statusCode": 200,
            "body": get10RandomMessages(),
            "headers": CORS_Header
        }
    
    elif httpMethod == 'POST':
        body = (event['body'])

        return {
            
            "statusCode": 200,
            "body": writeToDyanmoDB(body),
            "headers": CORS_Header
        }
    


