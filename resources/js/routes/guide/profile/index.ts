import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\GuideController::edit
* @see app/Http/Controllers/GuideController.php:15
* @route '/profile/guide'
*/
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/profile/guide',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GuideController::edit
* @see app/Http/Controllers/GuideController.php:15
* @route '/profile/guide'
*/
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuideController::edit
* @see app/Http/Controllers/GuideController.php:15
* @route '/profile/guide'
*/
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GuideController::edit
* @see app/Http/Controllers/GuideController.php:15
* @route '/profile/guide'
*/
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GuideController::edit
* @see app/Http/Controllers/GuideController.php:15
* @route '/profile/guide'
*/
const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GuideController::edit
* @see app/Http/Controllers/GuideController.php:15
* @route '/profile/guide'
*/
editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GuideController::edit
* @see app/Http/Controllers/GuideController.php:15
* @route '/profile/guide'
*/
editForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\GuideController::update
* @see app/Http/Controllers/GuideController.php:34
* @route '/profile/guide'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/profile/guide',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GuideController::update
* @see app/Http/Controllers/GuideController.php:34
* @route '/profile/guide'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuideController::update
* @see app/Http/Controllers/GuideController.php:34
* @route '/profile/guide'
*/
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GuideController::update
* @see app/Http/Controllers/GuideController.php:34
* @route '/profile/guide'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GuideController::update
* @see app/Http/Controllers/GuideController.php:34
* @route '/profile/guide'
*/
updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

update.form = updateForm

const profile = {
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
}

export default profile