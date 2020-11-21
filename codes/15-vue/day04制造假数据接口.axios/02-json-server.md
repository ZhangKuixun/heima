1. json-server
- 可以根据一个json文件，开启一个接口服务器，并且提供假数据

2. 如何使用？
- 安装： `npm i json-server -g`
- 使用： `json-server json文件的路径`
> 得到接口地址：http://localhost:3000/list
- 注意：命令保持连接，不能断

3. 遵循REST API 格式
- 获取 GET
- 添加 POST
- 删除 DELETE
- 修改 PUT/Patch
        
4. 使用postman调试接口
- get ：获取全部：http://localhost:3000/list
        获取列表某个数据：http://localhost:3000/list/1

- post：添加：http://localhost:3000/list（id不需要）
        参数：{name:'马哥', done:true}

- delete：删除：http://localhost:3000/list/2

- put/patch
  需求：{'id':1,'name':'张三','done':true}=>{'id':1,'name':'张三','done':true}
  - put：把需要修改的和不需要修改的都要传过去
      修改某一个：http://localhost:3000/list/1
      {name:'莲莲', done:true}
  - patch 哪里需要修改，传哪里
      修改某一个：http://localhost:3000/list/1
      {name:'莲莲'}

