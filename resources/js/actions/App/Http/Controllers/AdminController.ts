import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AdminController::index
* @see app/Http/Controllers/AdminController.php:18
* @route '/admin'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdminController::index
* @see app/Http/Controllers/AdminController.php:18
* @route '/admin'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::index
* @see app/Http/Controllers/AdminController.php:18
* @route '/admin'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AdminController::index
* @see app/Http/Controllers/AdminController.php:18
* @route '/admin'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AdminController::index
* @see app/Http/Controllers/AdminController.php:18
* @route '/admin'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AdminController::index
* @see app/Http/Controllers/AdminController.php:18
* @route '/admin'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AdminController::index
* @see app/Http/Controllers/AdminController.php:18
* @route '/admin'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\AdminController::verifyGuide
* @see app/Http/Controllers/AdminController.php:62
* @route '/admin/guides/{guide}/verify'
*/
export const verifyGuide = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyGuide.url(args, options),
    method: 'post',
})

verifyGuide.definition = {
    methods: ["post"],
    url: '/admin/guides/{guide}/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AdminController::verifyGuide
* @see app/Http/Controllers/AdminController.php:62
* @route '/admin/guides/{guide}/verify'
*/
verifyGuide.url = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return verifyGuide.definition.url
            .replace('{guide}', parsedArgs.guide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::verifyGuide
* @see app/Http/Controllers/AdminController.php:62
* @route '/admin/guides/{guide}/verify'
*/
verifyGuide.post = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyGuide.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AdminController::verifyGuide
* @see app/Http/Controllers/AdminController.php:62
* @route '/admin/guides/{guide}/verify'
*/
const verifyGuideForm = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyGuide.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AdminController::verifyGuide
* @see app/Http/Controllers/AdminController.php:62
* @route '/admin/guides/{guide}/verify'
*/
verifyGuideForm.post = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyGuide.url(args, options),
    method: 'post',
})

verifyGuide.form = verifyGuideForm

/**
* @see \App\Http\Controllers\AdminController::rejectGuide
* @see app/Http/Controllers/AdminController.php:75
* @route '/admin/guides/{guide}/reject'
*/
export const rejectGuide = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: rejectGuide.url(args, options),
    method: 'post',
})

rejectGuide.definition = {
    methods: ["post"],
    url: '/admin/guides/{guide}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AdminController::rejectGuide
* @see app/Http/Controllers/AdminController.php:75
* @route '/admin/guides/{guide}/reject'
*/
rejectGuide.url = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return rejectGuide.definition.url
            .replace('{guide}', parsedArgs.guide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::rejectGuide
* @see app/Http/Controllers/AdminController.php:75
* @route '/admin/guides/{guide}/reject'
*/
rejectGuide.post = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: rejectGuide.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AdminController::rejectGuide
* @see app/Http/Controllers/AdminController.php:75
* @route '/admin/guides/{guide}/reject'
*/
const rejectGuideForm = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: rejectGuide.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AdminController::rejectGuide
* @see app/Http/Controllers/AdminController.php:75
* @route '/admin/guides/{guide}/reject'
*/
rejectGuideForm.post = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: rejectGuide.url(args, options),
    method: 'post',
})

rejectGuide.form = rejectGuideForm

/**
* @see \App\Http\Controllers\AdminController::markNotificationAsRead
* @see app/Http/Controllers/AdminController.php:49
* @route '/admin/notifications/{id}/read'
*/
export const markNotificationAsRead = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markNotificationAsRead.url(args, options),
    method: 'patch',
})

markNotificationAsRead.definition = {
    methods: ["patch"],
    url: '/admin/notifications/{id}/read',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\AdminController::markNotificationAsRead
* @see app/Http/Controllers/AdminController.php:49
* @route '/admin/notifications/{id}/read'
*/
markNotificationAsRead.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return markNotificationAsRead.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::markNotificationAsRead
* @see app/Http/Controllers/AdminController.php:49
* @route '/admin/notifications/{id}/read'
*/
markNotificationAsRead.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markNotificationAsRead.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\AdminController::markNotificationAsRead
* @see app/Http/Controllers/AdminController.php:49
* @route '/admin/notifications/{id}/read'
*/
const markNotificationAsReadForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markNotificationAsRead.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AdminController::markNotificationAsRead
* @see app/Http/Controllers/AdminController.php:49
* @route '/admin/notifications/{id}/read'
*/
markNotificationAsReadForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markNotificationAsRead.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

markNotificationAsRead.form = markNotificationAsReadForm

const AdminController = { index, verifyGuide, rejectGuide, markNotificationAsRead }

export default AdminController