<?php

if(!function_exists('apiGetPagination')){
    function apiGetPagination($model){
        $arr=[
            'total' => $model->total(),
            'per_page' => $model->perPage(),
            'current_page' => $model->currentPage(),
            'last_page' => $model->lastPage(),
            'from' => $model->firstItem(),
            'to' => $model->lastItem(),
        ];
        return $arr;
    }
}
