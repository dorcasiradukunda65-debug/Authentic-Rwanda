import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\FirebaseAuthController::auth
* @see app/Http/Controllers/Auth/FirebaseAuthController.php:17
* @route '/firebase/auth'
*/
export const auth = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: auth.url(options),
    method: 'post',
})

auth.definition = {
    methods: ["post"],
    url: '/firebase/auth',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\FirebaseAuthController::auth
* @see app/Http/Controllers/Auth/FirebaseAuthController.php:17
* @route '/firebase/auth'
*/
auth.url = (options?: RouteQueryOptions) => {
    return auth.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\FirebaseAuthController::auth
* @see app/Http/Controllers/Auth/FirebaseAuthController.php:17
* @route '/firebase/auth'
*/
auth.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: auth.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\FirebaseAuthController::auth
* @see app/Http/Controllers/Auth/FirebaseAuthController.php:17
* @route '/firebase/auth'
*/
const authForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: auth.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\FirebaseAuthController::auth
* @see app/Http/Controllers/Auth/FirebaseAuthController.php:17
* @route '/firebase/auth'
*/
authForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: auth.url(options),
    method: 'post',
})

auth.form = authForm

const firebase = {
    auth: Object.assign(auth, auth),
}

export default firebase