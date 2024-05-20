# Challenge Chapter 5 - REST API With Media Handling
Challenge Chapter 5 - REST API Binar Car Rental with Express Js, Typescript, Postgres

## Install App
    bundle install

# REST API
The REST API for cars   

## Get All Cars
### Request
`GET /cars/`

    curl -L -X GET "localhost:3000/cars/"

### Response
    {
        "message": "Success",
        "cars": [
            {
                "id": 1,
                data
            },
            {
                "id": 2,
                data
            }
        ]
    }

## Get Cars By Id
### Request
`GET /cars/:id`

    curl -L -X GET "localhost:3000/cars/1"

### Response
    {
        "message": "Success",
        "car": {
            "id": 1,
            data
        }
    }

## ERD
![App Screenshot](erd-bcr.png)
