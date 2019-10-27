'use strict';

import {
    NOT_LOADED,
    notSkipped,
    withoutLoadError,
    isntLoaded,
    shouldBeActive,
    shouldntBeActive,
    isLoaded,
    isntActive,
    isActive
} from './app.helper';
import {invoke} from '../navigation/invoke';

const APPS=[]

export function getAppsToLoad(){
    return APPS.filter(notSkipped).filter(withoutLoadError).filter(isntLoaded).filter(shouldBeActive);
}

export function getAppsToMount(){
    return APPS.filter(notSkipped).filter(isLoaded).filter(isntActive).filter(shouldBeActive);
}

/**
 * 需要被unmount的app
 * 1、没有加载中断
 * 2、正在挂载的
 * 3、需要卸载的
 */
export function getAppsToUnmount(){
    return APPS.filter(notSkipped).filter(isActive).filter(shouldntBeActive);
}

export function getAppNames(){
    return APPS.map(function (item) {
        return item.name;
    });
}

export function getAppStatus(name){
    if (!name) {
        return APPS.map(item => item.status);
    }
    let app = APPS.find(item => item.name === name);
    return app ? app.status : null;
}

export function getRawApps(){
    return [...APPS];
}

export function getMountedApps(){
    return APPS.filter(isActive).map(item => item.name);
}

/**
 * 注册app
 * @param {string} appName 要注册的app名称
 * @param {Function<Promise>|Object} loadFunction app异步加载函数或app内容
 * @param {Function<boolean>} activityWhen 判断该app应该在何时被启动
 * @param {Object} customProps 自定义配置
 * @return {Promise} 
 */
export function registerApplication(appName,loadFunction,activityWhen,customProps){
    if(!appName || typeof appName !== 'string'){
        throw new Error('appName must be a non-empty string')
    }
    if(!loadFunction){
        throw new Error('loadFunction must be a function or object')
    }
    if(typeof loadFunction !== 'function'){
        loadFunction = () => Promise.resolve(loadFunction)
    }
    if(typeof activityWhen !== 'function'){
        throw new Error('activityWhen must be a function')
    }

    Apps.push({
        name:appName,
        loadFunction,
        activityWhen,
        customProps,
        status:NOT_LOADED,
        services:{}
    })

    return invoke()
}