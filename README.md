# Challenge Chapter 5 - REST API With Media Handling
Challenge Chapter 5 - REST API Binar Car Rental with Express Js, Typescript, Postgres

## Install App
1. Clone project into your local `git clone https://github.com/wahyupambudi/24001118-snyrgy7-wahyupambudi-bcr-ch5.git`
2. Change directory to this project folder `cd 24001118-snyrgy7-wahyupambudi-bcr-ch5`
3. Use command `npm install` to install all packages
4. Copy `.env.example` file to `.env` and fill up the correct value of your PostgreSQL connection and cloudinary secret key!
5. Run command `npm run migration:latest` to create table via migration
6. Run command `npm run dev`

# REST API
The REST API for Binar Car Rental
- CRUD Transmissions
- CRUD Brands
- CRUD Categories
- CRUD Cars

# CRUD CARS
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

## Create New Car
### Request
`POST /cars/add`

    curl -L -X POST "localhost:3000/cars/add" -H "Content-Type: multipart/form-data" -F "car_name=\"Pagani Zonda\"" -F "price=\"Rp.100.000\"" -F "avaibility=\"true\"" -F "start_rent=\"2024-05-20\"" -F "end_rent=\"2024-05-25\"" -F "img=@\"/path/img.jpg\"" -F "transmission_id=\"1\"" -F "brand_id=\"1\"" -F "category_id=\"1\""

### Response
    {
        "message": "Success",
        "cars": {
           dataCar
        }
    }

## Update Car
### Request
`PUT /cars/update/:id`

    curl -L -X PUT "localhost:3000/cars/update/3" -H "Content-Type: multipart/form-data" -H "User-Agent: insomnia/9.1.1" -F "car_name=\"Pagani Zonda Update\"" -F "price=\"Rp.100.000\"" -F "avaibility=\"true\"" -F "start_rent=\"2024-05-20\"" -F "end_rent=\"2024-05-25\"" -F "img=@\"path/img.jpg\"" -F "transmission_id=\"1\"" -F "brand_id=\"1\"" -F "category_id=\"1\""

### Response
    {
        "message": "Success",
        "cars": {
           dataCar
        }
    }

## Delete Car
### Request
`DELETE /cars/:id`

    curl -L -X DELETE "localhost:3000/cars/3" -H "Content-Type: application/x-www-form-urlencoded" -H "User-Agent: insomnia/9.1.1" -d "="

### Response
    {
        "message": "Success",
        "cars": {
            dataCar
        }
    }

# CRUD Transmissions
## Get All Transmissions
### Request
`GET /transmissions/`

    curl -L -X GET "localhost:3000/transmissions/"

### Response
    {
        "message": "Success",
        "transmissions": [
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

## Get Transmission By Id
### Request
`GET /transmissions/:id`

    curl -L -X GET "localhost:3000/transmissions/1"

### Response
    {
        "message": "Success",
        "car": {
            "id": 1,
            data
        }
    }

## Create New Transmission
### Request
`POST /transmissions/add`

    curl -L -X POST "localhost:3000/transmissions/add" -H "Content-Type: application/x-www-form-urlencoded" -H "User-Agent: insomnia/9.1.1" -d "transmission_name=Automatic"

### Response
    {
        "message": "Success",
        "transmissions": {
           data
        }
    }

## Update Transmission
### Request
`PUT /transmissions/update/:id`

    curl -L -X PUT "localhost:3000/transmissions/update/8" -H "Content-Type: application/x-www-form-urlencoded" -H "User-Agent: insomnia/9.1.1" -d "transmission_name=Automatic Update"

### Response
    {
        "message": "Success",
        "transmissions": {
           data
        }
    }

## Delete Transmission
### Request
`DELETE /transmissions/:id`

    curl -L -X DELETE "localhost:3000/transmissions/8" -H "Content-Type: application/x-www-form-urlencoded" -H "User-Agent: insomnia/9.1.1" -d "="

### Response
    {
        "message": "Success",
        "transmissions": {
            data
        }
    }

# CRUD Brands
## Get All Brands
### Request
`GET /brands/`

    curl -L -X GET "localhost:3000/brands/"

### Response
    {
        "message": "Success",
        "brands": [
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

## Get Brand By Id
### Request
`GET /brands/:id`

    curl -L -X GET "localhost:3000/brands/1"

### Response
    {
        "message": "Success",
        "car": {
            "id": 1,
            data
        }
    }

## Create New Brand
### Request
`POST /brands/add`

    curl -L -X POST "localhost:3000/brands/add" -H "Content-Type: application/x-www-form-urlencoded" -H "User-Agent: insomnia/9.1.1" -d "brand_name=Automatic"

### Response
    {
        "message": "Success",
        "brands": {
           data
        }
    }

## Update Brand
### Request
`PUT /brands/update/:id`

    curl -L -X PUT "localhost:3000/brands/update/8" -H "Content-Type: application/x-www-form-urlencoded" -H "User-Agent: insomnia/9.1.1" -d "brand_name=Automatic Update"

### Response
    {
        "message": "Success",
        "brands": {
           data
        }
    }

## Delete Brand
### Request
`DELETE /brands/:id`

    curl -L -X DELETE "localhost:3000/brands/8" -H "Content-Type: application/x-www-form-urlencoded" -H "User-Agent: insomnia/9.1.1" -d "="

### Response
    {
        "message": "Success",
        "brands": {
            data
        }
    }

# CRUD Categories
## Get All Categories
### Request
`GET /categories/`

    curl -L -X GET "localhost:3000/categories/"

### Response
    {
        "message": "Success",
        "categories": [
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

## Get Category By Id
### Request
`GET /categories/:id`

    curl -L -X GET "localhost:3000/categories/1"

### Response
    {
        "message": "Success",
        "car": {
            "id": 1,
            data
        }
    }

## Create New Category
### Request
`POST /categories/add`

    curl -L -X POST "localhost:3000/categories/add" -H "Content-Type: application/x-www-form-urlencoded" -H "User-Agent: insomnia/9.1.1" -d "category_name=Automatic"

### Response
    {
        "message": "Success",
        "categories": {
           data
        }
    }

## Update Category
### Request
`PUT /categories/update/:id`

    curl -L -X PUT "localhost:3000/categories/update/8" -H "Content-Type: application/x-www-form-urlencoded" -H "User-Agent: insomnia/9.1.1" -d "category_name=Automatic Update"

### Response
    {
        "message": "Success",
        "categories": {
           data
        }
    }

## Delete Category
### Request
`DELETE /categories/:id`

    curl -L -X DELETE "localhost:3000/categories/8" -H "Content-Type: application/x-www-form-urlencoded" -H "User-Agent: insomnia/9.1.1" -d "="

### Response
    {
        "message": "Success",
        "categories": {
            data
        }
    }

## ERD
![App Screenshot](erd-bcr.png)
