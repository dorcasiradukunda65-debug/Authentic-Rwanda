import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import checkoutFb28ab from './checkout'
/**
* @see \App\Http\Controllers\StripePaymentController::checkout
* @see app/Http/Controllers/StripePaymentController.php:19
* @route '/bookings/{booking}/stripe/checkout'
*/
export const checkout = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkout.url(args, options),
    method: 'post',
})

checkout.definition = {
    methods: ["post"],
    url: '/bookings/{booking}/stripe/checkout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StripePaymentController::checkout
* @see app/Http/Controllers/StripePaymentController.php:19
* @route '/bookings/{booking}/stripe/checkout'
*/
checkout.url = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { booking: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            booking: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        booking: typeof args.booking === 'object'
        ? args.booking.id
        : args.booking,
    }

    return checkout.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StripePaymentController::checkout
* @see app/Http/Controllers/StripePaymentController.php:19
* @route '/bookings/{booking}/stripe/checkout'
*/
checkout.post = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkout.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StripePaymentController::checkout
* @see app/Http/Controllers/StripePaymentController.php:19
* @route '/bookings/{booking}/stripe/checkout'
*/
const checkoutForm = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkout.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StripePaymentController::checkout
* @see app/Http/Controllers/StripePaymentController.php:19
* @route '/bookings/{booking}/stripe/checkout'
*/
checkoutForm.post = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkout.url(args, options),
    method: 'post',
})

checkout.form = checkoutForm

/**
* @see \App\Http\Controllers\StripePaymentController::webhook
* @see app/Http/Controllers/StripePaymentController.php:78
* @route '/stripe/webhook'
*/
export const webhook = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: webhook.url(options),
    method: 'post',
})

webhook.definition = {
    methods: ["post"],
    url: '/stripe/webhook',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StripePaymentController::webhook
* @see app/Http/Controllers/StripePaymentController.php:78
* @route '/stripe/webhook'
*/
webhook.url = (options?: RouteQueryOptions) => {
    return webhook.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StripePaymentController::webhook
* @see app/Http/Controllers/StripePaymentController.php:78
* @route '/stripe/webhook'
*/
webhook.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: webhook.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StripePaymentController::webhook
* @see app/Http/Controllers/StripePaymentController.php:78
* @route '/stripe/webhook'
*/
const webhookForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: webhook.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StripePaymentController::webhook
* @see app/Http/Controllers/StripePaymentController.php:78
* @route '/stripe/webhook'
*/
webhookForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: webhook.url(options),
    method: 'post',
})

webhook.form = webhookForm

const stripe = {
    checkout: Object.assign(checkout, checkoutFb28ab),
    webhook: Object.assign(webhook, webhook),
}

export default stripe