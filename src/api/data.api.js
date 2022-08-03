/**
 * 
 * 
 */

import instance from './index.js';


export const getEmail = {
    all: async() =>(
        await instance.get()
    )
}