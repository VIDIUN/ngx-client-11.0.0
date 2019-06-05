/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaDropFolder } from './KalturaDropFolder';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DropFolderFreeExclusiveDropFolderActionArgs() { }
/** @type {?} */
DropFolderFreeExclusiveDropFolderActionArgs.prototype.dropFolderId;
/** @type {?|undefined} */
DropFolderFreeExclusiveDropFolderActionArgs.prototype.errorCode;
/** @type {?|undefined} */
DropFolderFreeExclusiveDropFolderActionArgs.prototype.errorDescription;
/**
 * Build request payload for service 'dropFolder' action 'freeExclusiveDropFolder'.
 *
 * Usage: freeExclusive KalturaDropFolder object
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 */
export class DropFolderFreeExclusiveDropFolderAction extends KalturaRequest {
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
            action: { type: 'c', default: 'freeExclusiveDropFolder' },
            dropFolderId: { type: 'n' },
            errorCode: { type: 's' },
            errorDescription: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    DropFolderFreeExclusiveDropFolderAction.prototype.dropFolderId;
    /** @type {?} */
    DropFolderFreeExclusiveDropFolderAction.prototype.errorCode;
    /** @type {?} */
    DropFolderFreeExclusiveDropFolderAction.prototype.errorDescription;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcEZvbGRlckZyZWVFeGNsdXNpdmVEcm9wRm9sZGVyQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Ecm9wRm9sZGVyRnJlZUV4Y2x1c2l2ZURyb3BGb2xkZXJBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFLE1BQU0sOENBQStDLFNBQVEsY0FBaUM7Ozs7SUFNMUYsWUFBWSxJQUFrRDtRQUUxRCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQyxDQUFDO0tBQ3ZIOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN2RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUM1RCxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlciB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXInO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEcm9wRm9sZGVyRnJlZUV4Y2x1c2l2ZURyb3BGb2xkZXJBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZHJvcEZvbGRlcklkIDogbnVtYmVyO1xuXHRlcnJvckNvZGU/IDogc3RyaW5nO1xuXHRlcnJvckRlc2NyaXB0aW9uPyA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2Ryb3BGb2xkZXInIGFjdGlvbiAnZnJlZUV4Y2x1c2l2ZURyb3BGb2xkZXInLlxuICpcbiAqIFVzYWdlOiBmcmVlRXhjbHVzaXZlIEthbHR1cmFEcm9wRm9sZGVyIG9iamVjdFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFEcm9wRm9sZGVyXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBEcm9wRm9sZGVyRnJlZUV4Y2x1c2l2ZURyb3BGb2xkZXJBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRHJvcEZvbGRlcj4ge1xuXG4gICAgZHJvcEZvbGRlcklkIDogbnVtYmVyO1xuXHRlcnJvckNvZGUgOiBzdHJpbmc7XG5cdGVycm9yRGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRHJvcEZvbGRlckZyZWVFeGNsdXNpdmVEcm9wRm9sZGVyQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRHJvcEZvbGRlcicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlciAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZHJvcGZvbGRlcl9kcm9wZm9sZGVyJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZnJlZUV4Y2x1c2l2ZURyb3BGb2xkZXInIH0sXG5cdFx0XHRcdGRyb3BGb2xkZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlcnJvckNvZGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXJyb3JEZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=