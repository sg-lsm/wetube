import routes from "./routes";

export const localMiddleware = (req, res, next) =>{
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id:1
    }
    next();
}
//템플릿 전체에 추가하는 방법으로 예를들어 헤더가 라우트 객체에 접근하도록 하려면 미들웨어를 사용해야하는데 미들웨어는 레이어 같은 것이다.
//위에서 밑으로 한 단계씩 내려간다. 그러므로 미들웨어를 어디에 위치시킬지를 생각해야한다.
//미들웨어가 next에 req를 전달해야 한다. app.js에서 미들웨어가 커넥션과 라우트들 사이에 존재하므로 next()로 넘겨주면 된다.
//만약 next()로 넘겨주지 않는다면 페이지가 리프레쉬되지 않는다.