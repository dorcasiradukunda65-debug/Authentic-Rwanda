import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\AdminController::verify
* @see app/Http/Controllers/AdminController.php:62
* @route '/admin/guides/{guide}/verify'
*/
export const verify = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(args, options),
    method: 'post',
})

verify.definition = {
    methods: ["post"],
    url: '/admin/guides/{guide}/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AdminController::verify
* @see app/Http/Controllers/AdminController.php:62
* @route '/admin/guides/{guide}/verify'
*/
verify.url = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { guide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { guide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            guide: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        guide: typeof args.guide === 'object'
        ? args.guide.id
        : args.guide,
    }

    return verify.definition.url
            .replace('{guide}', parsedArgs.guide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::verify
* @see app/Http/Controllers/AdminController.php:62
* @route '/admin/guides/{guide}/verify'
*/
verify.post = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AdminController::verify
* @see app/Http/Controllers/AdminController.php:62
* @route '/admin/guides/{guide}/verify'
*/
const verifyForm = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AdminController::verify
* @see app/Http/Controllers/AdminController.php:62
* @route '/admin/guides/{guide}/verify'
*/
verifyForm.post = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(args, options),
    method: 'post',
})

verify.form = verifyForm

/**
* @see \App\Http\Controllers\AdminController::reject
* @see app/Http/Controllers/AdminController.php:75
* @route '/admin/guides/{guide}/reject'
*/
export const reject = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/admin/guides/{guide}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AdminController::reject
* @see app/Http/Controllers/AdminController.php:75
* @route '/admin/guides/{guide}/reject'
*/
reject.url = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { guide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { guide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            guide: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        guide: typeof args.guide === 'object'
        ? args.guide.id
        : args.guide,
    }

    return reject.definition.url
            .replace('{guide}', parsedArgs.guide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::reject
* @see app/Http/Controllers/AdminController.php:75
* @route '/admin/guides/{guide}/reject'
*/
reject.post = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AdminController::reject
* @see app/Http/Controllers/AdminController.php:75
* @route '/admin/guides/{guide}/reject'
*/
const rejectForm = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reject.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AdminController::reject
* @see app/Http/Controllers/AdminController.php:75
* @route '/admin/guides/{guide}/reject'
*/
rejectForm.post = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reject.url(args, options),
    method: 'post',
})

reject.form = rejectForm

const guides = {
    verify: Object.assign(verify, verify),
    reject: Object.assign(reject, reject),
}

export default guides