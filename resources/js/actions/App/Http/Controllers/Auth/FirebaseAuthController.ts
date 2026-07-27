import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\FirebaseAuthController::store
* @see app/Http/Controllers/Auth/FirebaseAuthController.php:17
* @route '/firebase/auth'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/firebase/auth',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\FirebaseAuthController::store
* @see app/Http/Controllers/Auth/FirebaseAuthController.php:17
* @route '/firebase/auth'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\FirebaseAuthController::store
* @see app/Http/Controllers/Auth/FirebaseAuthController.php:17
* @route '/firebase/auth'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\FirebaseAuthController::store
* @see app/Http/Controllers/Auth/FirebaseAuthController.php:17
* @route '/firebase/auth'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\FirebaseAuthController::store
* @see app/Http/Controllers/Auth/FirebaseAuthController.php:17
* @route '/firebase/auth'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const FirebaseAuthController = { store }

export default FirebaseAuthController