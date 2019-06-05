/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaDropFolder } from './KalturaDropFolder';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DropFolderGetExclusiveDropFolderActionArgs() { }
/** @type {?} */
DropFolderGetExclusiveDropFolderActionArgs.prototype.tag;
/** @type {?} */
DropFolderGetExclusiveDropFolderActionArgs.prototype.maxTime;
/**
 * Build request payload for service 'dropFolder' action 'getExclusiveDropFolder'.
 *
 * Usage: getExclusive KalturaDropFolder object
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 */
export class DropFolderGetExclusiveDropFolderAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaDropFolder', responseConstructor: KalturaDropFolder });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'dropfolder_dropfolder' },
            action: { type: 'c', default: 'getExclusiveDropFolder' },
            tag: { type: 's' },
            maxTime: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    DropFolderGetExclusiveDropFolderAction.prototype.tag;
    /** @type {?} */
    DropFolderGetExclusiveDropFolderAction.prototype.maxTime;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcEZvbGRlckdldEV4Y2x1c2l2ZURyb3BGb2xkZXJBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0Ryb3BGb2xkZXJHZXRFeGNsdXNpdmVEcm9wRm9sZGVyQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RSxNQUFNLDZDQUE4QyxTQUFRLGNBQWlDOzs7O0lBS3pGLFlBQVksSUFBaUQ7UUFFekQsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG1CQUFtQixFQUFFLG1CQUFtQixFQUFHLGlCQUFpQixFQUFHLENBQUMsQ0FBQztLQUN2SDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDdkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0QsR0FBRyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlcic7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyb3BGb2xkZXJHZXRFeGNsdXNpdmVEcm9wRm9sZGVyQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHRhZyA6IHN0cmluZztcblx0bWF4VGltZSA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2Ryb3BGb2xkZXInIGFjdGlvbiAnZ2V0RXhjbHVzaXZlRHJvcEZvbGRlcicuXG4gKlxuICogVXNhZ2U6IGdldEV4Y2x1c2l2ZSBLYWx0dXJhRHJvcEZvbGRlciBvYmplY3RcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRHJvcEZvbGRlclxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRHJvcEZvbGRlckdldEV4Y2x1c2l2ZURyb3BGb2xkZXJBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRHJvcEZvbGRlcj4ge1xuXG4gICAgdGFnIDogc3RyaW5nO1xuXHRtYXhUaW1lIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IERyb3BGb2xkZXJHZXRFeGNsdXNpdmVEcm9wRm9sZGVyQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRHJvcEZvbGRlcicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlciAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZHJvcGZvbGRlcl9kcm9wZm9sZGVyJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0RXhjbHVzaXZlRHJvcEZvbGRlcicgfSxcblx0XHRcdFx0dGFnIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1heFRpbWUgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19