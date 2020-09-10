import Koa from 'koa'

const app: Koa = new Koa()
const port: number = 3000

app.listen(port, () => {
  console.log('local: 127.0.0.1:3000')
})
