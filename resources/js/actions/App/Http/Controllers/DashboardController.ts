import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DashboardController::index
* @see app/Http/Controllers/DashboardController.php:17
* @route '/dashboard'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::index
* @see app/Http/Controllers/DashboardController.php:17
* @route '/dashboard'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::index
* @see app/Http/Controllers/DashboardController.php:17
* @route '/dashboard'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DashboardController::index
* @see app/Http/Controllers/DashboardController.php:17
* @route '/dashboard'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DashboardController::index
* @see app/Http/Controllers/DashboardController.php:17
* @route '/dashboard'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DashboardController::index
* @see app/Http/Controllers/DashboardController.php:17
* @route '/dashboard'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DashboardController::index
* @see app/Http/Controllers/DashboardController.php:17
* @route '/dashboard'
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
* @see \App\Http\Controllers\DashboardController::becomeGuide
* @see app/Http/Controllers/DashboardController.php:58
* @route '/profile/become-guide'
*/
export const becomeGuide = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: becomeGuide.url(options),
    method: 'post',
})

becomeGuide.definition = {
    methods: ["post"],
    url: '/profile/become-guide',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DashboardController::becomeGuide
* @see app/Http/Controllers/DashboardController.php:58
* @route '/profile/become-guide'
*/
becomeGuide.url = (options?: RouteQueryOptions) => {
    return becomeGuide.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::becomeGuide
* @see app/Http/Controllers/DashboardController.php:58
* @route '/profile/become-guide'
*/
becomeGuide.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: becomeGuide.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DashboardController::becomeGuide
* @see app/Http/Controllers/DashboardController.php:58
* @route '/profile/become-guide'
*/
const becomeGuideForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: becomeGuide.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DashboardController::becomeGuide
* @see app/Http/Controllers/DashboardController.php:58
* @route '/profile/become-guide'
*/
becomeGuideForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: becomeGuide.url(options),
    method: 'post',
})

becomeGuide.form = becomeGuideForm

const DashboardController = { index, becomeGuide }

export default DashboardController