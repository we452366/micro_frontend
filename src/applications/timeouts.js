'use strict';

/**
 * @param milliseconds 超时毫秒数
 * @param rejectWhenTimeout 当超时，判断是否
 */
const DEFAULT_TIMEOUTS={
    bootstrap:{
        milliseconds:3000,
        rejectWhenTimeout:false
    },
    mount:{
        milliseconds:3000,
        rejectWhenTimeout:false
    },
    unmount:{
        milliseconds:3000,
        rejectWhenTimeout:false
    },
    unload:{
        milliseconds:3000,
        rejectWhenTimeout:false
    }
}

export function setBootstrapMaxTime(milliseconds,rejectWhenTimeout=false){

}

export function setMountMaxTime(milliseconds,rejectWhenTimeout=false){

}

export function setUnmountMaxTime(milliseconds,rejectWhenTimeout=false){

}

export function setUnloadMaxTime(milliseconds,rejectWhenTimeout=false){

}

export function ensureAppTimeouts(timeouts={}){

}

export function reasonableTime(promise,description,timeouts){
    
}