import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BookingController::store
* @see app/Http/Controllers/BookingController.php:19
* @route '/bookings'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/bookings',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BookingController::store
* @see app/Http/Controllers/BookingController.php:19
* @route '/bookings'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookingController::store
* @see app/Http/Controllers/BookingController.php:19
* @route '/bookings'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BookingController::store
* @see app/Http/Controllers/BookingController.php:19
* @route '/bookings'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BookingController::store
* @see app/Http/Controllers/BookingController.php:19
* @route '/bookings'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\BookingController::payment
* @see app/Http/Controllers/BookingController.php:58
* @route '/bookings/{id}/payment'
*/
export const payment = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payment.url(args, options),
    method: 'get',
})

payment.definition = {
    methods: ["get","head"],
    url: '/bookings/{id}/payment',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BookingController::payment
* @see app/Http/Controllers/BookingController.php:58
* @route '/bookings/{id}/payment'
*/
payment.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return payment.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookingController::payment
* @see app/Http/Controllers/BookingController.php:58
* @route '/bookings/{id}/payment'
*/
payment.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payment.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BookingController::payment
* @see app/Http/Controllers/BookingController.php:58
* @route '/bookings/{id}/payment'
*/
payment.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: payment.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BookingController::payment
* @see app/Http/Controllers/BookingController.php:58
* @route '/bookings/{id}/payment'
*/
const paymentForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payment.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BookingController::payment
* @see app/Http/Controllers/BookingController.php:58
* @route '/bookings/{id}/payment'
*/
paymentForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payment.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BookingController::payment
* @see app/Http/Controllers/BookingController.php:58
* @route '/bookings/{id}/payment'
*/
paymentForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payment.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

payment.form = paymentForm

/**
* @see \App\Http\Controllers\BookingController::confirm
* @see app/Http/Controllers/BookingController.php:72
* @route '/bookings/{id}/confirm'
*/
export const confirm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirm.url(args, options),
    method: 'post',
})

confirm.definition = {
    methods: ["post"],
    url: '/bookings/{id}/confirm',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BookingController::confirm
* @see app/Http/Controllers/BookingController.php:72
* @route '/bookings/{id}/confirm'
*/
confirm.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return confirm.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookingController::confirm
* @see app/Http/Controllers/BookingController.php:72
* @route '/bookings/{id}/confirm'
*/
confirm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: confirm.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BookingController::confirm
* @see app/Http/Controllers/BookingController.php:72
* @route '/bookings/{id}/confirm'
*/
const confirmForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: confirm.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BookingController::confirm
* @see app/Http/Controllers/BookingController.php:72
* @route '/bookings/{id}/confirm'
*/
confirmForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: confirm.url(args, options),
    method: 'post',
})

confirm.form = confirmForm

const BookingController = { store, payment, confirm }

export default BookingController