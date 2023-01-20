def custom_preprocessing_hook(endpoints, **kwargs):
    return [
        (path, path_regex, method, callback)
        for path, path_regex, method, callback in endpoints
        if not (path.startswith('/auth/') 
        and (method == 'GET' or method == 'PUT' or method == 'PATCH' ))
    ]