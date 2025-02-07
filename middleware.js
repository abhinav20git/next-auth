import {NextResponse} from 'next/server'
export  const middleware=(request)=>{


    const pathVaiable = request.nextUrl.pathname;
    const publicPath = ['/register','/login'];

    const auth = request.cookies.get("token") || '';

    
    if(publicPath.includes(pathVaiable) && auth){
        return NextResponse.redirect(new URL("/",request.url))
    }

    if(!publicPath.includes(pathVaiable) && !auth){
        return NextResponse.redirect(new URL("/login",request.url))
    }


}

export const config={
    matcher:[
        '/',
        '/register',
            '/login'
    ]
}