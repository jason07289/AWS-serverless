# AWS-serverless

## API 요구기능
- CRUD(Create Read Update Delete)
    - 카드 조회
        - 입력: x
        - 반환: 전체 카드 리스트
    
    - 카드 생성
        - 입력: 카드객체
        - 반환: id 반환
    
    - 카드 업데이트
        - 입력: 카드객체
        - 반환: x

    - 카드 삭제
        - 입력: id
        - 반환: X

## 카드 클래스 정의
- id
    - 카드 id
- category
    - todo / ongoing / test / done
- title
    - 카드 내용
- cardElement
    - HTML/DOM

## 이벤트 동작과정
![image](https://user-images.githubusercontent.com/38865267/145708246-04cc2ead-2d89-44ce-85be-a8596ebe470d.png)

## DB
- DynamoDB

- Table: Cards

- Attributes:
    - id: S -> PK
    - category: S
    - title: S

## API GATE WAY
- API GATE WAY
    - HOST: https://l684dtya03.execute-api.ap-northeast-2.amazonaws.com/prod
        PATH, METHOD, BODY, HEADER
    - URI 명세
        GET: HOST/kanban/cards
        Body: {}

        POST: HOST/kanban/cards
        Body: Card Object

        PUT: HOST/kanban/cards/{id}
        Body: Card Object

        DELETE: HOST/kanban/cards/{id}
        Body: {}}
## S3 Bucket static web hosting 
- HOST: http://devjaehyuk0728.s3-website.ap-northeast-2.amazonaws.com/