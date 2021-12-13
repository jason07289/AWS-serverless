var AWS = require('aws-sdk');
var documentClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

const tableName = "Cards";

exports.handler = async (event) => {
    console.log("Received: " + JSON.stringify(event, null, 2));
    let response = "";
    try {
        const id = event.pathParameters.id;//테스트시 전달 필수 값
        const body = JSON.parse(event.body);//테스트시 전달 필수 값
        var params = {
            TableName: tableName,
            Key: { id: id },
            UpdateExpression: "set #c = :c, #t = :t",
            ExpressionAttributeNames: { "#c": "category", "#t": "title" },
            ExpressionAttributeValues: {
                ":c": body.category,
                ":t": body.title,
            }

        };

        await documentClient.update(params).promise();

        response = {
            statusCode: 204,
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        };
    } catch (exception) {
        console.error(exception);
        response = {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({ "Message: ": exception })
        };
    }
    return response;
};
