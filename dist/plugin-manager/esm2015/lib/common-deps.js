/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-deps.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as core from '@angular/core';
import * as common from '@angular/common';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as rxjs from 'rxjs';
import * as tslib from 'tslib';
import * as NgZorro from 'ng-zorro-antd';
import * as manager from '../public_api';
import * as operators from 'rxjs/operators';
import * as le5leStore from 'le5le-store';
import * as fileSaver from 'file-saver';
import * as http from '@angular/common/http';
/** @type {?} */
export const COMMON_DEPS = {
    '@angular/core': core,
    '@angular/common': common,
    '@angular/forms': forms,
    '@angular/router': router,
    'ng-zorro-antd': NgZorro,
    'plugin-manager': manager,
    'rxjs/operators': operators,
    'le5le-store': le5leStore,
    'file-saver': fileSaver,
    '@angular/common/http': http,
    rxjs,
    tslib,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWRlcHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wbHVnaW4tbWFuYWdlci8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24tZGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxJQUFJLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxLQUFLLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEtBQUssTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sS0FBSyxPQUFPLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxPQUFPLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sS0FBSyxTQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxLQUFLLFVBQVUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxLQUFLLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxLQUFLLElBQUksTUFBTSxzQkFBc0IsQ0FBQzs7QUFDN0MsTUFBTSxPQUFPLFdBQVcsR0FBRztJQUN6QixlQUFlLEVBQUUsSUFBSTtJQUNyQixpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixlQUFlLEVBQUUsT0FBTztJQUN4QixnQkFBZ0IsRUFBRSxPQUFPO0lBQ3pCLGdCQUFnQixFQUFFLFNBQVM7SUFDM0IsYUFBYSxFQUFFLFVBQVU7SUFDekIsWUFBWSxFQUFFLFNBQVM7SUFDdkIsc0JBQXNCLEVBQUUsSUFBSTtJQUM1QixJQUFJO0lBQ0osS0FBSztDQUNOIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29yZSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgY29tbW9uIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCAqIGFzIGZvcm1zIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0ICogYXMgcm91dGVyIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIHJ4anMgZnJvbSAncnhqcyc7XHJcbmltcG9ydCAqIGFzIHRzbGliIGZyb20gJ3RzbGliJztcclxuaW1wb3J0ICogYXMgTmdab3JybyBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0ICogYXMgbWFuYWdlciBmcm9tICcuLi9wdWJsaWNfYXBpJztcclxuaW1wb3J0ICogYXMgb3BlcmF0b3JzIGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0ICogYXMgbGU1bGVTdG9yZSBmcm9tICdsZTVsZS1zdG9yZSc7XHJcbmltcG9ydCAqIGFzIGZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmV4cG9ydCBjb25zdCBDT01NT05fREVQUyA9IHtcclxuICAnQGFuZ3VsYXIvY29yZSc6IGNvcmUsXHJcbiAgJ0Bhbmd1bGFyL2NvbW1vbic6IGNvbW1vbixcclxuICAnQGFuZ3VsYXIvZm9ybXMnOiBmb3JtcyxcclxuICAnQGFuZ3VsYXIvcm91dGVyJzogcm91dGVyLFxyXG4gICduZy16b3Jyby1hbnRkJzogTmdab3JybyxcclxuICAncGx1Z2luLW1hbmFnZXInOiBtYW5hZ2VyLFxyXG4gICdyeGpzL29wZXJhdG9ycyc6IG9wZXJhdG9ycyxcclxuICAnbGU1bGUtc3RvcmUnOiBsZTVsZVN0b3JlLFxyXG4gICdmaWxlLXNhdmVyJzogZmlsZVNhdmVyLFxyXG4gICdAYW5ndWxhci9jb21tb24vaHR0cCc6IGh0dHAsXHJcbiAgcnhqcyxcclxuICB0c2xpYixcclxufTtcclxuXHJcbiJdfQ==