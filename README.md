
# Contacts App

CRUD Contacts list made with nodejs, expressjs and postgresql



## API Reference

#### Get all contacts

```http
  GET /api/contacts
```


#### Get contact by id

```http
  GET /api/contacts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of contact to fetch |


##### Response
```json
{
   "id":25,
   "name":"Hector",
   "lastname":"Lopez",
   "company":"Linkedin",
   "phone":"4563278984",
   "email":"hectorl@linkedin.com"
},
{
   "id":26,
   "name":"Ilse",
   "lastname":"Dominguez",
   "company":"",
   "phone":"2335698741",
   "email":"dominguez.ilse@gmail.com"
},
{
   "id":27,
   "name":"Mariana",
   "lastname":"Fernandez",
   "company":"Bancomer",
   "phone":"4545454545",
   "email":"marfdez@bancomer.com"
}
```



#### Get contact by name

```http
  GET /api/contacts/name/${name}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. name of contact to fetch |


##### Response
```json
{
   "id":25,
   "name":"Hector",
   "lastname":"Lopez",
   "company":"Linkedin",
   "phone":"4563278984",
   "email":"hectorl@linkedin.com"
}
```
#### Add contact 
```http
  POST /api/contacts
```
##### Body
```json
{
   "id":25,
   "name":"Hector",
   "lastname":"Lopez",
   "company":"Linkedin",
   "phone":"4563278984",
   "email":"hectorl@linkedin.com"
}
```


#### Update contact by id
```http
  PUT /api/contacts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of contact to fetch |


##### Body
```json
{
   "id":25,
   "name":"Hector",
   "lastname":"Lopez",
   "company":"Linkedin",
   "phone":"4563278984",
   "email":"hectorl@linkedin.com"
}
```
#### Delete contact by id
```http
  DELETE /api/contacts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of contact to fetch |




  
## Try the live version here

 - [My Contacts List ](https://contacts-app-front.herokuapp.com/)
 
  
## Author

- [@laulujan](https://www.github.com/laulujan)

  