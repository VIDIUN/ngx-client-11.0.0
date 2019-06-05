/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaResource } from './KalturaResource';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MediaAddContentActionArgs() { }
/** @type {?} */
MediaAddContentActionArgs.prototype.entryId;
/** @type {?|undefined} */
MediaAddContentActionArgs.prototype.resource;
/**
 * Build request payload for service 'media' action 'addContent'.
 *
 * Usage: Add content to media entry which is not yet associated with content (therefore is in status NO_CONTENT).
 * If the requirement is to replace the entry's associated content, use action updateContent
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'media' action 'addContent'.
 *
 * Usage: Add content to media entry which is not yet associated with content (therefore is in status NO_CONTENT).
 * If the requirement is to replace the entry's associated content, use action updateContent
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
MediaAddContentAction = /** @class */ (function (_super) {
    tslib_1.__extends(MediaAddContentAction, _super);
    function MediaAddContentAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMediaEntry', responseConstructor: KalturaMediaEntry }) || this;
    }
    /**
     * @return {?}
     */
    MediaAddContentAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'media' },
            action: { type: 'c', default: 'addContent' },
            entryId: { type: 's' },
            resource: { type: 'o', subTypeConstructor: KalturaResource, subType: 'KalturaResource' }
        });
        return result;
    };
    return MediaAddContentAction;
}(KalturaRequest));
/**
 * Build request payload for service 'media' action 'addContent'.
 *
 * Usage: Add content to media entry which is not yet associated with content (therefore is in status NO_CONTENT).
 * If the requirement is to replace the entry's associated content, use action updateContent
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export { MediaAddContentAction };
if (false) {
    /** @type {?} */
    MediaAddContentAction.prototype.entryId;
    /** @type {?} */
    MediaAddContentAction.prototype.resource;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFBZGRDb250ZW50QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZWRpYUFkZENvbnRlbnRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RTs7Ozs7Ozs7O0FBQUE7SUFBMkMsaURBQWlDO0lBS3hFLCtCQUFZLElBQWdDO2VBRXhDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG1CQUFtQixFQUFFLG1CQUFtQixFQUFHLGlCQUFpQixFQUFHLENBQUM7S0FDdEg7Ozs7SUFFUyw0Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUU7WUFDdkQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFO1lBQy9DLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1NBQ25GLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBNUNMO0VBcUIyQyxjQUFjLEVBd0J4RCxDQUFBOzs7Ozs7Ozs7O0FBeEJELGlDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWVkaWFFbnRyeSB9IGZyb20gJy4vS2FsdHVyYU1lZGlhRW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVzb3VyY2UgfSBmcm9tICcuL0thbHR1cmFSZXNvdXJjZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYUFkZENvbnRlbnRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0cmVzb3VyY2U/IDogS2FsdHVyYVJlc291cmNlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbWVkaWEnIGFjdGlvbiAnYWRkQ29udGVudCcuXG4gKlxuICogVXNhZ2U6IEFkZCBjb250ZW50IHRvIG1lZGlhIGVudHJ5IHdoaWNoIGlzIG5vdCB5ZXQgYXNzb2NpYXRlZCB3aXRoIGNvbnRlbnQgKHRoZXJlZm9yZSBpcyBpbiBzdGF0dXMgTk9fQ09OVEVOVCkuXG4gKiBJZiB0aGUgcmVxdWlyZW1lbnQgaXMgdG8gcmVwbGFjZSB0aGUgZW50cnkncyBhc3NvY2lhdGVkIGNvbnRlbnQsIHVzZSBhY3Rpb24gdXBkYXRlQ29udGVudFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFNZWRpYUVudHJ5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBNZWRpYUFkZENvbnRlbnRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTWVkaWFFbnRyeT4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0cmVzb3VyY2UgOiBLYWx0dXJhUmVzb3VyY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTWVkaWFBZGRDb250ZW50QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTWVkaWFFbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFFbnRyeSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWVkaWEnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGRDb250ZW50JyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlc291cmNlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVzb3VyY2UsIHN1YlR5cGUgOiAnS2FsdHVyYVJlc291cmNlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=