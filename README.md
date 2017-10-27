### Absence Recording API ##

Based on: https://app.swaggerhub.com/apis/itabara/absences/1.0.0

#### Environment urls:
```
https://abs.iulian.co.uk/api/ping
```

```
http://localhost:3000/api/ping
```

```
http://localhost:3000/docs/
```

#### Samples
1. login as admin
```
curl -X POST \
  http://localhost:3000/api/login/admin \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: d7d73c28-624e-6dc0-40d9-3d6e462ea9d0' \
  -d '{
	"username":"godaddy",
	"password":"Pipex123"
}'
```

2. login as user
```
curl -X POST \
  http://localhost:3000/api/login/user \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: d7d73c28-624e-6dc0-40d9-3d6e462ea9d0' \
  -d '{
	"username":"godaddy",
	"password":"Pipex123"
}'
```

3. enroll
```
curl -X POST \
  http://localhost:3000/api/enroll \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnb2RhZGR5IiwiaXNzIjoiaXVsaWFuLmNvLnVrIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTA5MDM0Nzg0fQ.4LF_F4E5ZoFukCH7QKLS71s2w86_Na0uTrq2gWKdqoA' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ff20febb-2e39-8306-af1f-dc370fa107b9' \
  -d '{
	"email_address" : "iulian.tabara@godaddy.com"
}'
```

4. unroll
```
curl -X DELETE \
  http://localhost:3000/api/enroll \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnb2RhZGR5IiwiaXNzIjoiaXVsaWFuLmNvLnVrIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTA5MDM0Nzg0fQ.4LF_F4E5ZoFukCH7QKLS71s2w86_Na0uTrq2gWKdqoA' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 27451ab4-3900-f051-9283-a50416a65b23' \
  -d '{
	"email_address" : "iulian.tabara@godaddy.com"
}'
```

5. add absence days
```
curl -X POST \
http://localhost:3000/api/absences \
-H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnb2RhZGR5IiwiaXNzIjoiaXVsaWFuLmNvLnVrIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTA5MDM0Nzg0fQ.4LF_F4E5ZoFukCH7QKLS71s2w86_Na0uTrq2gWKdqoA' \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-H 'postman-token: 0fca48ca-31e9-5540-8b5b-27aa56acc71d' \
-d '{
"email_address": "iulian.tabara@gmail.com",
"days_off": [
  "01/02/2017",
  "02/03/2017"
]
}'
```

6. get today's absences
```
curl -X GET \
  http://localhost:3000/api/absences \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnb2RhZGR5IiwiaXNzIjoiaXVsaWFuLmNvLnVrIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTA5MDM0Nzg0fQ.4LF_F4E5ZoFukCH7QKLS71s2w86_Na0uTrq2gWKdqoA' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: afe58a6d-5df5-1e29-8aac-b7241126721b'
```
